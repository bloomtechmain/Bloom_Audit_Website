const { Resend } = require('resend');

const PLAN_DETAILS = {
  starter:    { displayName: 'Starter',    price: '$29/mo',  users: 'Up to 5 users',       color: '#3b82f6', colorLight: '#93c5fd' },
  growth:     { displayName: 'Growth',     price: '$79/mo',  users: 'Up to 25 users',      color: '#00cba9', colorLight: '#5eead4' },
  business:   { displayName: 'Business',   price: '$149/mo', users: 'Up to 100 users',     color: '#8b5cf6', colorLight: '#c4b5fd' },
  enterprise: { displayName: 'Enterprise', price: '$299/mo', users: 'Unlimited users',     color: '#f59e0b', colorLight: '#fcd34d' },
};

const PLAN_FEATURES = {
  starter: [
    'Full General Ledger & Chart of Accounts',
    'Invoice & Bill Management',
    'P&L, Balance Sheet & Cash Flow Reports',
    'Tax Management (VAT / GST / WHT)',
    'Analytics Dashboard & Audit Trail',
  ],
  growth: [
    'Everything in Starter',
    'Sales & Purchase Orders',
    'Bank Reconciliation & Stripe Payments',
    'Petty Cash & Subscriptions',
    'HR Module — Payroll, PTO & Attendance',
  ],
  business: [
    'Everything in Growth',
    'Inventory Management & COGS Posting',
    'Project Management & Job Costing',
    'Fixed Assets & Multi-Currency (FX)',
    'Budget Planning & Variance Analysis',
  ],
  enterprise: [
    'Everything in Business',
    'Advanced Analytics & Custom KPI Dashboards',
    'Custom Report Builder',
    'REST API v1 & Incoming Webhooks',
    'Vendor Self-Service Portal & Debit Cards',
  ],
};

const buildWelcomeEmailHtml = ({ name, planInfo, features, billingLabel, erpUrl }) => {
  const featureRows = features.map(f => `
    <tr>
      <td style="padding:7px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="28" valign="top" style="padding-top:1px;">
              <div style="width:20px;height:20px;background:${planInfo.color}22;border:1px solid ${planInfo.color}55;border-radius:50%;text-align:center;line-height:20px;font-size:11px;color:${planInfo.colorLight};">✓</div>
            </td>
            <td style="font-family:Arial,sans-serif;font-size:14px;color:#c8d8e8;line-height:1.5;">${f}</td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  const stepRows = [
    { num: '1', title: 'Click the button below', desc: 'Open your BloomAudit ERP system.' },
    { num: '2', title: 'Sign in with your email', desc: 'Use the same email address you registered with on this site.' },
    { num: '3', title: 'Complete your company profile', desc: 'Add your company details, logo, and currency settings.' },
    { num: '4', title: 'Start managing your business', desc: 'Explore your dashboard — all features for your plan are ready to use.' },
  ].map(s => `
    <tr>
      <td style="padding:10px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="40" valign="top">
              <div style="width:32px;height:32px;background:linear-gradient(135deg,${planInfo.color},${planInfo.color}aa);border-radius:50%;text-align:center;line-height:32px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;">${s.num}</div>
            </td>
            <td valign="top" style="padding-left:4px;">
              <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#e2edf7;">${s.title}</p>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#7a9bb5;">${s.desc}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to BloomAudit</title>
</head>
<body style="margin:0;padding:0;background-color:#04090f;font-family:Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#04090f;min-height:100vh;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Email card -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#071426;border-radius:16px;overflow:hidden;border:1px solid rgba(0,203,169,0.18);box-shadow:0 0 80px rgba(0,203,169,0.06),0 24px 80px rgba(0,0,0,0.7);">

          <!-- ── Header banner ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#071e38 0%,#0a2a4a 50%,#071e38 100%);padding:0;position:relative;">
              <!-- Top accent line -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="height:3px;background:linear-gradient(90deg,transparent,${planInfo.color},#00cba9,transparent);"></td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:36px 40px 32px;">
                    <!-- Logo row -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:linear-gradient(135deg,#00cba9,#0099ff);border-radius:10px;width:42px;height:42px;text-align:center;line-height:42px;font-size:20px;font-weight:bold;color:#fff;vertical-align:middle;">B</td>
                              <td style="padding-left:12px;vertical-align:middle;">
                                <span style="font-family:Arial,sans-serif;font-size:22px;font-weight:bold;color:#ffffff;letter-spacing:-0.5px;">Bloom<span style="color:#00cba9;">Audit</span></span>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td align="right" valign="middle">
                          <div style="display:inline-block;background:${planInfo.color}22;border:1px solid ${planInfo.color}55;border-radius:20px;padding:6px 16px;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1px;text-transform:uppercase;">${planInfo.displayName} Plan</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Welcome headline -->
                    <p style="margin:28px 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#00cba9;letter-spacing:3px;text-transform:uppercase;">Welcome Aboard</p>
                    <h1 style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:32px;font-weight:900;color:#ffffff;line-height:1.2;">Your ERP is<br>ready, <span style="color:${planInfo.colorLight};">${name.split(' ')[0]}</span>!</h1>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#7a9bb5;line-height:1.6;">
                      You've successfully activated your <strong style="color:#c8d8e8;">${planInfo.displayName}</strong> plan on BloomAudit ERP — the complete business finance platform built for growing companies.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Plan summary strip ── -->
          <tr>
            <td style="background:${planInfo.color}18;border-top:1px solid ${planInfo.color}30;border-bottom:1px solid ${planInfo.color}30;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding:0;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:14px 24px;text-align:center;border-right:1px solid ${planInfo.color}25;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Plan</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${planInfo.displayName}</p>
                        </td>
                        <td style="padding:14px 24px;text-align:center;border-right:1px solid ${planInfo.color}25;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Price</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${planInfo.price}</p>
                        </td>
                        <td style="padding:14px 24px;text-align:center;border-right:1px solid ${planInfo.color}25;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Billing</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${billingLabel}</p>
                        </td>
                        <td style="padding:14px 24px;text-align:center;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Users</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${planInfo.users}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── CTA button ── -->
          <tr>
            <td style="padding:36px 40px 28px;background-color:#071426;">
              <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;color:#7a9bb5;line-height:1.6;">
                Your dedicated ERP environment is live and waiting. Click the button below to access your BloomAudit dashboard and start managing your business finances today.
              </p>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="border-radius:12px;background:linear-gradient(135deg,${planInfo.color},#00cba9);box-shadow:0 0 30px ${planInfo.color}50;">
                    <a href="${erpUrl}" target="_blank" style="display:inline-block;padding:16px 40px;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:12px;letter-spacing:0.5px;">
                      Access My BloomAudit ERP →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#3a5a75;">
                Or copy this link: <a href="${erpUrl}" style="color:${planInfo.colorLight};word-break:break-all;">${erpUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(0,203,169,0.2),transparent);"></div></td></tr>

          <!-- ── What's included ── -->
          <tr>
            <td style="padding:28px 40px;background-color:#071426;">
              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:2px;text-transform:uppercase;">What's Included in Your ${planInfo.displayName} Plan</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${featureRows}
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(0,203,169,0.2),transparent);"></div></td></tr>

          <!-- ── Getting started steps ── -->
          <tr>
            <td style="padding:28px 40px;background-color:#071426;">
              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:2px;text-transform:uppercase;">Getting Started in 4 Steps</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${stepRows}
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(0,203,169,0.2),transparent);"></div></td></tr>

          <!-- ── Support box ── -->
          <tr>
            <td style="padding:24px 40px;background-color:#071426;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#091e38;border:1px solid rgba(0,203,169,0.15);border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#e2edf7;">Need Help? We're Here.</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#5a7a95;line-height:1.6;">
                      Our support team is available to help you get started. Use the live chat widget inside the ERP, or email us at
                      <a href="mailto:support@bloomaudit.com" style="color:#00cba9;text-decoration:none;">support@bloomaudit.com</a>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#040d1c 0%,#061525 100%);padding:24px 40px;border-top:1px solid rgba(0,203,169,0.1);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:linear-gradient(135deg,#00cba9,#0099ff);border-radius:6px;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;font-weight:bold;color:#fff;vertical-align:middle;">B</td>
                        <td style="padding-left:8px;vertical-align:middle;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;">Bloom<span style="color:#00cba9;">Audit</span></td>
                      </tr>
                    </table>
                    <p style="margin:10px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#2a4a65;line-height:1.6;">
                      Complete Business ERP — Accounting, HR, Inventory, Projects & More.<br>
                      © ${new Date().getFullYear()} BloomAudit. All rights reserved.
                    </p>
                  </td>
                  <td align="right" valign="bottom">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#1e3a55;">
                      You're receiving this because you registered at bloomaudit.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Email card -->

      </td>
    </tr>
  </table>

</body>
</html>`;
};

const sendWelcomeEmail = async ({ name, email, plan, billingCycle, companyType }) => {
  if (!process.env.RESEND_API_KEY) {
    console.log('RESEND_API_KEY not configured — skipping welcome email for', email);
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const erpUrl = process.env.ERP_URL || 'https://adaptable-connection-production.up.railway.app/';

  const planKey = (plan || 'starter').toLowerCase();
  const planInfo = PLAN_DETAILS[planKey] || PLAN_DETAILS.starter;
  const features = PLAN_FEATURES[planKey] || PLAN_FEATURES.starter;
  const billingLabel = billingCycle === 'yearly' ? 'Annual' : 'Monthly';

  const html = buildWelcomeEmailHtml({ name, planInfo, features, billingLabel, erpUrl });
  const fromAddress = process.env.FROM_EMAIL || 'BloomAudit <onboarding@resend.dev>';

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: `Welcome to BloomAudit — Your ${planInfo.displayName} Plan Is Active`,
      html,
    });

    if (error) {
      console.error('Resend API error sending welcome email:', error);
    } else {
      console.log(`Welcome email sent to ${email} (id: ${data.id})`);
    }
  } catch (err) {
    console.error('Failed to send welcome email:', err.message);
  }
};

const buildPackageUpdateEmailHtml = ({ name, planInfo, features, billingLabel, erpUrl, oldPlanName }) => {
  const featureRows = features.map(f => `
    <tr>
      <td style="padding:7px 0;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="28" valign="top" style="padding-top:1px;">
              <div style="width:20px;height:20px;background:${planInfo.color}22;border:1px solid ${planInfo.color}55;border-radius:50%;text-align:center;line-height:20px;font-size:11px;color:${planInfo.colorLight};">✓</div>
            </td>
            <td style="font-family:Arial,sans-serif;font-size:14px;color:#c8d8e8;line-height:1.5;">${f}</td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');

  const oldPlanRow = oldPlanName ? `
    <tr>
      <td style="padding:10px 0 4px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="font-family:Arial,sans-serif;font-size:13px;color:#4a6a85;">
              Previous plan: <span style="color:#7a9bb5;text-decoration:line-through;">${oldPlanName}</span>
              &nbsp;→&nbsp;
              <span style="color:${planInfo.colorLight};font-weight:bold;">${planInfo.displayName}</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  ` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BloomAudit — Plan Updated</title>
</head>
<body style="margin:0;padding:0;background-color:#04090f;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#04090f;min-height:100vh;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#071426;border-radius:16px;overflow:hidden;border:1px solid ${planInfo.color}40;box-shadow:0 0 80px ${planInfo.color}08,0 24px 80px rgba(0,0,0,0.7);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#071e38 0%,#0a2a4a 50%,#071e38 100%);padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="height:3px;background:linear-gradient(90deg,transparent,${planInfo.color},#00cba9,transparent);"></td></tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:36px 40px 32px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="background:linear-gradient(135deg,#00cba9,#0099ff);border-radius:10px;width:42px;height:42px;text-align:center;line-height:42px;font-size:20px;font-weight:bold;color:#fff;vertical-align:middle;">B</td>
                              <td style="padding-left:12px;vertical-align:middle;font-family:Arial,sans-serif;font-size:22px;font-weight:bold;color:#ffffff;">Bloom<span style="color:#00cba9;">Audit</span></td>
                            </tr>
                          </table>
                        </td>
                        <td align="right" valign="middle">
                          <div style="display:inline-block;background:${planInfo.color}22;border:1px solid ${planInfo.color}55;border-radius:20px;padding:6px 16px;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1px;text-transform:uppercase;">${planInfo.displayName} Plan</div>
                        </td>
                      </tr>
                    </table>
                    <!-- Icon + headline -->
                    <div style="margin:28px 0 12px;width:52px;height:52px;background:linear-gradient(135deg,${planInfo.color}33,${planInfo.color}11);border:1px solid ${planInfo.color}55;border-radius:50%;text-align:center;line-height:52px;font-size:24px;">✦</div>
                    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:#00cba9;letter-spacing:3px;text-transform:uppercase;">Plan Updated</p>
                    <h1 style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:30px;font-weight:900;color:#ffffff;line-height:1.2;">
                      Your plan is now<br><span style="color:${planInfo.colorLight};">${planInfo.displayName}</span>, ${name.split(' ')[0]}!
                    </h1>
                    ${oldPlanRow}
                    <p style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:15px;color:#7a9bb5;line-height:1.6;">
                      Your BloomAudit subscription has been successfully updated. All new features are live in your ERP dashboard right now.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Plan summary strip -->
          <tr>
            <td style="background:${planInfo.color}18;border-top:1px solid ${planInfo.color}30;border-bottom:1px solid ${planInfo.color}30;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding:0;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:14px 24px;text-align:center;border-right:1px solid ${planInfo.color}25;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">New Plan</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${planInfo.displayName}</p>
                        </td>
                        <td style="padding:14px 24px;text-align:center;border-right:1px solid ${planInfo.color}25;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Price</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${planInfo.price}</p>
                        </td>
                        <td style="padding:14px 24px;text-align:center;border-right:1px solid ${planInfo.color}25;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Billing</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${billingLabel}</p>
                        </td>
                        <td style="padding:14px 24px;text-align:center;">
                          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:1.5px;text-transform:uppercase;">Users</p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">${planInfo.users}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:32px 40px 24px;background-color:#071426;">
              <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;color:#7a9bb5;line-height:1.6;">
                All your new features are immediately available. Log in to your ERP dashboard to explore everything included in your ${planInfo.displayName} plan.
              </p>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="border-radius:12px;background:linear-gradient(135deg,${planInfo.color},#00cba9);box-shadow:0 0 30px ${planInfo.color}50;">
                    <a href="${erpUrl}" target="_blank" style="display:inline-block;padding:16px 40px;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:12px;letter-spacing:0.5px;">
                      Open My Dashboard →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#3a5a75;">
                Or visit: <a href="${erpUrl}" style="color:${planInfo.colorLight};word-break:break-all;">${erpUrl}</a>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(0,203,169,0.2),transparent);"></div></td></tr>

          <!-- What's included -->
          <tr>
            <td style="padding:28px 40px;background-color:#071426;">
              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;color:${planInfo.colorLight};letter-spacing:2px;text-transform:uppercase;">What's Included in ${planInfo.displayName}</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">${featureRows}</table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(90deg,transparent,rgba(0,203,169,0.2),transparent);"></div></td></tr>

          <!-- Support -->
          <tr>
            <td style="padding:24px 40px;background-color:#071426;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#091e38;border:1px solid rgba(0,203,169,0.15);border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#e2edf7;">Questions about your plan?</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#5a7a95;line-height:1.6;">
                      Contact our support team via live chat in the ERP or at
                      <a href="mailto:support@bloomaudit.com" style="color:#00cba9;text-decoration:none;">support@bloomaudit.com</a>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#040d1c 0%,#061525 100%);padding:24px 40px;border-top:1px solid rgba(0,203,169,0.1);">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:linear-gradient(135deg,#00cba9,#0099ff);border-radius:6px;width:24px;height:24px;text-align:center;line-height:24px;font-size:12px;font-weight:bold;color:#fff;vertical-align:middle;">B</td>
                        <td style="padding-left:8px;vertical-align:middle;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;">Bloom<span style="color:#00cba9;">Audit</span></td>
                      </tr>
                    </table>
                    <p style="margin:10px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#2a4a65;line-height:1.6;">
                      Complete Business ERP — Accounting, HR, Inventory, Projects & More.<br>
                      © ${new Date().getFullYear()} BloomAudit. All rights reserved.
                    </p>
                  </td>
                  <td align="right" valign="bottom">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#1e3a55;">You're receiving this because you have a BloomAudit account.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

const sendPackageUpdateEmail = async ({ name, email, newPlan, oldPlan, billingCycle }) => {
  if (!process.env.RESEND_API_KEY) {
    console.log('RESEND_API_KEY not configured — skipping package update email for', email);
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const erpUrl = process.env.ERP_URL || 'https://adaptable-connection-production.up.railway.app/';

  const planKey = (newPlan || 'starter').toLowerCase();
  const planInfo = PLAN_DETAILS[planKey] || PLAN_DETAILS.starter;
  const features = PLAN_FEATURES[planKey] || PLAN_FEATURES.starter;
  const billingLabel = billingCycle === 'yearly' ? 'Annual' : 'Monthly';
  const fromAddress = process.env.FROM_EMAIL || 'BloomAudit <onboarding@resend.dev>';

  const html = buildPackageUpdateEmailHtml({ name, planInfo, features, billingLabel, erpUrl, oldPlanName: oldPlan || null });

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: `BloomAudit — Your Plan Has Been Updated to ${planInfo.displayName}`,
      html,
    });

    if (error) {
      console.error('Resend API error sending package update email:', error);
    } else {
      console.log(`Package update email sent to ${email} (id: ${data.id})`);
    }
  } catch (err) {
    console.error('Failed to send package update email:', err.message);
  }
};

module.exports = { sendWelcomeEmail, sendPackageUpdateEmail };
