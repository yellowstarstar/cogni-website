export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const payload = await request.json();

    const required = ['fullName', 'company', 'email', 'verifyCode'];
    for (const field of required) {
      if (!payload[field]) {
        return json({ ok: false, error: `Missing field: ${field}` }, 400);
      }
    }

    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: 'Missing RESEND_API_KEY in environment.' }, 500);
    }

    const fromEmail = env.FROM_EMAIL || 'no-reply@cogniplatforms.com';
    const isManufacturer = payload.registrationType === 'manufacturer';
    const subject = isManufacturer
      ? '[Manufacturer Verification Code] 原廠合作郵箱驗證碼'
      : '[Enterprise Verification Code] 企業註冊郵箱驗證碼';

    const text = [
      `Dear ${payload.fullName},`,
      '',
      isManufacturer
        ? '你正在進行原廠合作申請，請使用以下驗證碼完成企業郵箱驗證：'
        : '你正在進行企業註冊，請使用以下驗證碼完成企業郵箱驗證：',
      '',
      `驗證碼：${payload.verifyCode}`,
      '',
      `公司：${payload.company}`,
      `企業郵箱：${payload.email}`,
      '',
      '驗證完成後，你的資料將進入審核流程。',
      '若非本人操作，請忽略此郵件。'
    ].join('\n');

    const sendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [payload.email],
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
