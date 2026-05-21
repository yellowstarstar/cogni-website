export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const payload = await request.json();

    const required = ['inquiryType', 'fullName', 'company', 'email', 'region'];
    for (const field of required) {
      if (!payload[field]) {
        return json({ ok: false, error: `Missing field: ${field}` }, 400);
      }
    }

    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: 'Missing RESEND_API_KEY in environment.' }, 500);
    }

    const to = 'sales@cogniplatform.com';
    let cc = '';
    if (payload.region === '中國香港') {
      cc = 'sales@cogniplatform.com.hk';
    } else if (payload.region === '中國大陸') {
      cc = 'sales@cogniplatform.com.cn';
    }

    const fromEmail = env.FROM_EMAIL || 'no-reply@cogniplatforms.com';
    const isManufacturer = payload.inquiryType === 'manufacturer-package';
    const subject = isManufacturer
      ? `[Manufacturer Inquiry] ${payload.company} - ${payload.packageName || 'Enhancement Package'}`
      : `[B2B Process Inquiry] ${payload.company} - ${payload.system}`;

    const commonLines = [
      `- 公司：${payload.company}`,
      `- 聯絡人：${payload.fullName}`,
      `- 職位：${payload.jobTitle || '未提供'}`,
      `- 企業郵箱：${payload.email}`,
      `- 企業座機：${payload.officePhone || '未提供'}`,
      `- 手機：${payload.mobilePhone || '未提供'}`,
      `- 國家/地區：${payload.region}`,
      ''
    ];

    const detailLines = isManufacturer
      ? [
          `- 詢價增強包：${payload.packageName || '未提供'}`,
          `- 目標系統 / 產品：${payload.targetSystem || '未提供'}`,
          `- 目標版本：${payload.targetVersion || '未提供'}`,
          `- 合作訴求：${payload.inquiryNotes || '未提供'}`
        ]
      : [
          `- 問題系統：${payload.system || '未提供'}`,
          `- 具體產品：${payload.product || '未提供'}`,
          `- 具體版本：${payload.productVersion || '未提供'}`,
          `- 操作系統：${payload.operatingSystem || '未提供'}`,
          `- 數據庫版本：${payload.databaseVersion || '未提供'}`,
          `- 標準模塊 / 流程：${payload.sapModule || '未提供'}`,
          `- 問題描述：${payload.problemDescription || '未提供'}`
        ];

    const text = [
      isManufacturer ? '有新的原廠封裝增強包詢價，資訊如下：' : '有新的 To B 流程 / 問題詢價，資訊如下：',
      '',
      ...commonLines,
      ...detailLines
    ].join('\n');

    const resendPayload = {
      from: fromEmail,
      to: [to],
      cc: cc ? [cc] : undefined,
      subject,
      text
    };

    const sendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`
      },
      body: JSON.stringify(resendPayload)
    });

    if (!sendResp.ok) {
      const errText = await sendResp.text();
      return json({ ok: false, error: `Resend failed: ${errText}` }, 502);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    return json({ ok: false, error: String(error) }, 500);
  }
}

function json(payload, status) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
