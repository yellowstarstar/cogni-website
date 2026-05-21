export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const payload = await request.json();

    const required = [
      'fullName',
      'jobTitle',
      'company',
      'officePhone',
      'mobilePhone',
      'email',
      'region',
      'submittedAt'
    ];

    for (const field of required) {
      if (!payload[field]) {
        return json({ ok: false, error: `Missing field: ${field}` }, 400);
      }
    }

    const to = 'marketing@cogniplatforms.com';
    let cc = '';
    if (payload.region === '中國香港') {
      cc = 'marketing@cogniplatforms.com.hk';
    } else if (payload.region === '中國大陸') {
      cc = 'marketing@cogniplatforms.com.cn';
    }

    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: 'Missing RESEND_API_KEY in environment.' }, 500);
    }

    const fromEmail = env.FROM_EMAIL || 'no-reply@cogniplatforms.com';

    const registrationType = payload.registrationType || 'to-b';
    const isManufacturer = registrationType === 'manufacturer';

    const subjectPrefix = isManufacturer
      ? '[Manufacturer Partnership Registration]'
      : '[B2B Registration]';
    const subject = `${subjectPrefix} ${payload.company} - ${payload.fullName}`;

    const lines = [
      isManufacturer ? '有新的原廠合作註冊申請，資訊如下：' : '有新的 To B 企業客戶註冊申請，資訊如下：',
      '',
      `- 國家/地區：${payload.region}`,
      `- 公司全名：${payload.company}`,
      `- 對方職位：${payload.jobTitle}`,
      `- 對方姓名：${payload.fullName}`,
      `- 企業座機：${payload.officePhone}`,
      `- 手機：${payload.mobilePhone}`,
      `- 企業郵箱：${payload.email}`,
      `- 合作方向：${payload.cooperationFocus || '未提供'}`,
      `- 申請時間：${payload.submittedAt}`,
      '',
      '請安排後續審核與商務跟進。'
    ];

    const resendPayload = {
      from: fromEmail,
      to: [to],
      cc: cc ? [cc] : undefined,
      subject,
      text: lines.join('\n')
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
