export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const payload = await request.json();

    const required = ['actionType', 'fullName', 'company', 'email', 'region'];
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
    const isReferral = payload.actionType === 'referral';
    const isRedemption = payload.actionType === 'redemption';
    const isOrderCreated = payload.actionType === 'order_created';
    const isOrderConfirmed = payload.actionType === 'order_confirmed';

    let subject = `[Points Action] ${payload.company}`;
    if (isReferral) {
      subject = `[B2B Referral] ${payload.company} referred ${payload.referral?.referredCompany || 'New Lead'}`;
    } else if (isRedemption) {
      subject = `[Points Redemption] ${payload.company} - ${payload.redemption?.rewardName || 'Consultation'}`;
    } else if (isOrderCreated) {
      subject = `[Service Order Created] ${payload.company} - ${payload.order?.serviceName || 'Consultation'}`;
    } else if (isOrderConfirmed) {
      subject = `[Service Order Confirmed] ${payload.company} - ${payload.order?.serviceName || 'Consultation'}`;
    }

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

    let detailLines = [];
    if (isReferral) {
      detailLines = [
          `- 被推薦公司：${payload.referral?.referredCompany || '未提供'}`,
          `- 被推薦聯絡人：${payload.referral?.referredContact || '未提供'}`,
          `- 被推薦企業郵箱：${payload.referral?.referredEmail || '未提供'}`,
          `- 被推薦電話：${payload.referral?.referredPhone || '未提供'}`,
          `- 需求方向：${payload.referral?.interestArea || '未提供'}`,
          `- 補充說明：${payload.referral?.referralNotes || '未提供'}`,
          `- 發送積分：${payload.referral?.rewardPoints || 0}`
        ];
    } else if (isRedemption) {
      detailLines = [
          `- 兌換項目：${payload.redemption?.rewardName || '未提供'}`,
          `- 扣除積分：${payload.redemption?.rewardCost || 0}`,
          `- 希望主題：${payload.redemption?.redeemTopic || '未提供'}`,
          `- 希望時段：${payload.redemption?.preferredWindow || '未提供'}`,
          `- 補充需求：${payload.redemption?.redeemNotes || '未提供'}`
        ];
    } else {
      detailLines = [
        `- 訂單服務：${payload.order?.serviceName || '未提供'}`,
        `- 服務扣點：${payload.order?.pointsCost || 0}`,
        `- 目標客戶：${payload.order?.targetCustomerCompany || '未提供'} / ${payload.order?.targetCustomerName || '未提供'}`,
        `- 目標企業郵箱：${payload.order?.targetCustomerEmail || '未提供'}`,
        `- 訂單備註：${payload.order?.orderNotes || '未提供'}`,
        `- 訂單狀態：${payload.order?.status || '未提供'}`
      ];
    }

    const text = [
      isReferral
        ? '有新的 To B 客戶推薦線索，請跟進並確認積分。'
        : isRedemption
          ? '有新的積分兌換小額諮詢申請，請安排後續。'
          : isOrderConfirmed
            ? '客戶已確認服務訂單，請按此安排後續諮詢交付。'
            : '有新的待確認服務訂單，請留意後續客戶確認情況。',
      '',
      ...commonLines,
      ...detailLines
    ].join('\n');

    const sendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        cc: cc ? [cc] : undefined,
        subject,
        text
      })
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
