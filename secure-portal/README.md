# Secure Portal Workflow (Prototype)

## Current Flow

1. Register on `register.html` with:
   - Name
   - Company
   - Job title
   - Office phone
   - Mobile phone
   - Corporate email
   - Country/Region
   - Password
2. Complete corporate email verification on the same page using verification code.
3. Admin reviews verified applicants on `admin-review.html`.
4. Manufacturer partners can register on `manufacturer-register.html` with similar fields and verification.
5. Admin also reviews verified manufacturer applications on `admin-review.html`.
6. Approved enterprise users log in on `login.html` and view `agile-method.html`.
7. On `agile-method.html`, user can submit a next-step session booking:
   - Online prerecorded introduction, or
   - Teams consultation request
8. Approved manufacturer partners log in on `manufacturer-login.html` and view `manufacturer-hub.html`.

The booking action generates an email draft addressed to both sides (`hello@example.com` + applicant corporate email).

Registration also triggers a direct notification email to `marketing@cogniplatforms.com` with region-based CC:

- If country/region is `中國香港`, CC `marketing@cogniplatforms.com.hk`
- If country/region is `中國大陸`, CC `marketing@cogniplatforms.com.cn`

The same direct email notification applies to manufacturer partnership registrations.

This direct email is sent by Cloudflare Pages Function endpoint:

- `POST /api/send-registration-notice`
- File: `functions/api/send-registration-notice.js`

After admin approval, the system can also send an access link email to the applicant via:

- `POST /api/send-access-link`
- File: `functions/api/send-access-link.js`

Protected inquiry forms send directly to sales via:

- `POST /api/send-inquiry`
- File: `functions/api/send-inquiry.js`
- To: `sales@cogniplatform.com`
- CC Hong Kong: `sales@cogniplatform.com.hk`
- CC Mainland China: `sales@cogniplatform.com.cn`

To B users now also have a prototype referral points wallet on the protected page:

- Each submitted enterprise referral grants `100` points
- Points can be redeemed for small consultation sessions
- Referral and redemption notices are sent via `POST /api/send-points-action`
- File: `functions/api/send-points-action.js`
- Current redemption catalog:
   - `30` minute process Q&A: `120` points
   - `45` minute system scoping: `180` points
   - `60` minute specialist consultation: `260` points
- Wallet balance and history are stored in browser localStorage for the prototype

The protected To B page now also includes a prototype service-order flow:

- Users can create a service order and confirm it later to consume points
- Superusers can create orders for any approved enterprise customer
- The current service catalog includes one configurable item: `consultation`
- The consultation display name and points cost can be updated from the protected page service settings panel
- Superuser emails are currently controlled in `app.js` via `SUPERUSER_EMAILS`

Required environment variables on Cloudflare Pages:

- `RESEND_API_KEY`: API key from Resend
- `FROM_EMAIL`: verified sender email/domain (example: `no-reply@cogniplatforms.com`)

## Important Prototype Notes

- This prototype stores user workflow data in browser localStorage/sessionStorage.
- Verification code is displayed in-page for local demo.
- Registration notification email is sent server-side by Pages Function (no mail draft).

## Production Recommendation (Cloudflare)

- Use Cloudflare Turnstile + Worker API for registration.
- Store users in D1.
- Send verification email via Resend/MailChannels.
- Protect pages via Cloudflare Access.
- Send booking emails from Worker to both parties.
