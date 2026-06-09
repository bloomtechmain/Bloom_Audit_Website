# Email Integration — Resend Welcome Email

## Overview

When a user registers on the BloomAudit marketing website and selects a plan, a professional HTML welcome email is automatically sent to their registered email address via the **Resend** transactional email service.

---

## What Was Added

### New File: `backend/utils/resendEmailService.js`

- Initialises the Resend SDK client using the `RESEND_API_KEY` environment variable.
- Exports a single async function: `sendWelcomeEmail({ name, email, plan, billingCycle, companyType })`.
- Builds a fully self-contained HTML email with inline styles (email-client compatible).
- Picks plan-specific colours, pricing, and feature bullet points from internal lookup tables.

### Modified File: `backend/controllers/authController.js`

- Imports `sendWelcomeEmail` from the new service.
- After a successful registration and JWT token creation, calls `sendWelcomeEmail(...)` in a **fire-and-forget** (non-blocking) manner so a slow or failed email send never blocks the HTTP response.

### New Package: `resend` (added to `backend/package.json`)

```
npm install resend
```

---

## Environment Variables

Add the following to your backend `.env` file (and to Railway / your deployment platform's env config):

| Variable          | Required | Description |
|-------------------|----------|-------------|
| `RESEND_API_KEY`  | **Yes**  | API key from [resend.com](https://resend.com). If missing, the email is silently skipped and a log line is printed. |
| `ERP_URL`         | No       | URL of the ERP system to include in the CTA button. Defaults to `https://adaptable-connection-production.up.railway.app/` |
| `FROM_EMAIL`      | No       | Sender address shown on the email. Defaults to `BloomAudit <onboarding@resend.dev>`. Set to a verified domain address for production (e.g. `noreply@bloomaudit.com`). |

> **Security note:** The API key is never written into source code. It is read exclusively from `process.env.RESEND_API_KEY` at runtime.

---

## Email Content

The welcome email contains:

1. **Header** — BloomAudit logo, plan badge (colour-coded per plan), welcome headline with the user's first name.
2. **Plan summary strip** — Plan name, monthly price, billing cycle, and user seat count.
3. **CTA button** — "Access My BloomAudit ERP →" linking to the ERP URL.
4. **What's Included** — 5 bullet points highlighting key features of the purchased plan.
5. **Getting Started (4 steps)** — Numbered guide walking the user through first login.
6. **Support box** — Live chat and email support contact.
7. **Footer** — BloomAudit branding and copyright.

### Plan-specific colours

| Plan       | Accent Colour |
|------------|--------------|
| Starter    | Blue (`#3b82f6`) |
| Growth     | Teal (`#00cba9`) |
| Business   | Purple (`#8b5cf6`) |
| Enterprise | Amber (`#f59e0b`) |

---

## Trigger Point

The email is sent **once** at registration time inside:

```
POST /api/auth/register  →  authController.register()
```

It fires after the user row is successfully inserted into the database and the JWT token is created, but before the HTTP response is returned. Because it is called with `.catch()` in a non-blocking manner, any Resend API failure will only log an error — it will not cause the registration endpoint to fail.

---

## No Database Changes Required

No schema changes were needed. User plan data is already stored in `public.users` via the existing `createUser` flow.

---

## Testing

To test locally:

1. Set `RESEND_API_KEY` in `backend/.env`.
2. Start the backend: `npm run dev` in `backend/`.
3. Register a new user via the website registration form.
4. Check the Resend dashboard at [resend.com](https://resend.com) to confirm email delivery.

If `RESEND_API_KEY` is not set, you will see a console log line:
```
RESEND_API_KEY not configured — skipping welcome email for <email>
```
