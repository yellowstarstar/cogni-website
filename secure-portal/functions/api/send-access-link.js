export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const payload = await request.json();

    const required = ['registrationType', 'fullName', 'company', 'email'];
    for (const field of required) {
      if (!payload[field]) {
        return json({ ok: false, error: `Missing field: ${field}` }, 400);
      }
    }

    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: 'Missing RESEND_API_KEY in environment.' }, 500);
    }

    const origin = env.PORTAL_BASE_URL || new URL(request.url).origin;
    const isManufacturer = payload.registrationType === 'manufacturer';
    const entryLink = isManufacturer
      ? `${origin}/manufacturer-login.html`
      : `${origin}/login.html`;

    const fromEmail = env.FROM_EMAIL || 'no-reply@cogniplatforms.com';
    const subject = isManufacturer
      ? 'Your manufacturer partner access is ready'
      : 'Your enterprise access is ready';

    const lines = [
      `Dear ${payload.fullName},`,
      '',
      isManufacturer
        ? 'Your partner access is now available. You can sign in to view your exclusive manufacturer content here:'
        : 'Your enterprise access is now available. You can sign in to view your exclusive content here:',
      entryLink,
      '',
      `Company: ${payload.company}`,
      `Email: ${payload.email}`,
      '',
      'If you need assistance, please reply to this email.'
    ];

    const resendPayload = {
      from: fromEmail,
      to: [payload.email],
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
