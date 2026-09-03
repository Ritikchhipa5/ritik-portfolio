const SITE_URL = "https://www.ritikchhipa.xyz";
const CALENDLY_URL = "https://calendly.com/ritikchhipa5";
const WHATSAPP_URL = "https://wa.me/919001586400";
const LINKEDIN_URL = "https://www.linkedin.com/in/ritikchhipa5/";
const UPWORK_URL = "https://www.upwork.com/freelancers/~01567a14a1df3e84cd";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wordmark() {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right:8px;">
          <div style="width:8px;height:8px;border-radius:50%;background:#a3e635;"></div>
        </td>
        <td>
          <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;font-size:20px;color:#0a0a0a;">Ritik Chhipa</span>
        </td>
      </tr>
    </table>
  `;
}

function shell(bodyHtml: string) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ritik Chhipa</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f5;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e5e5e5;">
            <tr>
              <td style="padding:32px 40px 0 40px;">${wordmark()}</td>
            </tr>
            <tr>
              <td style="padding:24px 40px 40px 40px;">
                ${bodyHtml}
              </td>
            </tr>
          </table>
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;">
            <tr>
              <td style="padding:24px 8px;text-align:center;">
                <a href="mailto:ritikchhipa5@gmail.com" style="color:#a3a3a3;font-size:12px;text-decoration:none;">Email</a>
                <span style="color:#d4d4d4;font-size:12px;"> &middot; </span>
                <a href="${WHATSAPP_URL}" style="color:#a3a3a3;font-size:12px;text-decoration:none;">WhatsApp</a>
                <span style="color:#d4d4d4;font-size:12px;"> &middot; </span>
                <a href="${LINKEDIN_URL}" style="color:#a3a3a3;font-size:12px;text-decoration:none;">LinkedIn</a>
                <span style="color:#d4d4d4;font-size:12px;"> &middot; </span>
                <a href="${UPWORK_URL}" style="color:#a3a3a3;font-size:12px;text-decoration:none;">Upwork</a>
                <div style="margin-top:8px;color:#d4d4d4;font-size:12px;">Ritik Chhipa &mdash; Full-Stack Developer</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function pillButton(label: string, href: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="border-radius:999px;background:#0a0a0a;">
          <a href="${href}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:500;color:#ffffff;text-decoration:none;border-radius:999px;">${escapeHtml(
            label
          )}</a>
        </td>
      </tr>
    </table>
  `;
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-top:1px solid #e5e5e5;">
        <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#a3a3a3;margin-bottom:4px;">${escapeHtml(
          label
        )}</div>
        <div style="font-size:14px;color:#0a0a0a;">${value}</div>
      </td>
    </tr>
  `;
}

export type ContactSubmission = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
};

export function renderAdminEmail(data: ContactSubmission) {
  const rows = [
    fieldRow("Name", escapeHtml(data.name)),
    fieldRow(
      "Email",
      `<a href="mailto:${escapeHtml(data.email)}" style="color:#0a0a0a;">${escapeHtml(
        data.email
      )}</a>`
    ),
  ];
  if (data.company) rows.push(fieldRow("Company", escapeHtml(data.company)));
  if (data.projectType)
    rows.push(fieldRow("Project Type", escapeHtml(data.projectType)));
  if (data.budget) rows.push(fieldRow("Budget", escapeHtml(data.budget)));

  const body = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
      <tr>
        <td>
          <span style="display:inline-block;background:#a3e635;color:#0a0a0a;font-size:11px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;padding:4px 10px;border-radius:999px;">New Inquiry</span>
        </td>
      </tr>
    </table>
    <h1 style="margin:0 0 20px 0;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;font-size:26px;color:#0a0a0a;">New project inquiry</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
      ${rows.join("")}
    </table>
    <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#a3a3a3;margin-bottom:8px;">Message</div>
    <div style="font-size:14px;line-height:1.6;color:#404040;background:#f5f5f5;border-radius:16px;padding:16px 20px;margin-bottom:28px;white-space:pre-wrap;">${escapeHtml(
      data.message
    )}</div>
    ${pillButton(`Reply to ${data.name}`, `mailto:${data.email}`)}
  `;

  return shell(body);
}

export function renderClientEmail(data: ContactSubmission) {
  const firstName = data.name.trim().split(/\s+/)[0] || data.name;

  const recapParts: string[] = [];
  if (data.projectType) recapParts.push(escapeHtml(data.projectType));
  if (data.budget) recapParts.push(escapeHtml(data.budget));
  const recapLine = recapParts.length
    ? `<div style="font-size:14px;color:#0a0a0a;margin-bottom:12px;">${recapParts.join(
        " &middot; "
      )}</div>`
    : "";

  const body = `
    <h1 style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;font-size:28px;color:#0a0a0a;">Thanks for reaching out, ${escapeHtml(
      firstName
    )}</h1>
    <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:#404040;">
      I've received your message and will get back to you within 24 hours. Here's a quick recap of what you sent:
    </p>
    <div style="background:#f5f5f5;border-radius:16px;padding:16px 20px;margin-bottom:28px;">
      ${recapLine}
      <div style="font-size:14px;line-height:1.6;color:#404040;white-space:pre-wrap;">${escapeHtml(
        data.message
      )}</div>
    </div>
    <p style="margin:0 0 20px 0;font-size:15px;line-height:1.6;color:#404040;">
      Want to talk it through sooner? Grab a slot on my calendar &mdash; no pitch, just a quick chat about your project.
    </p>
    ${pillButton("Book a Call", CALENDLY_URL)}
  `;

  return shell(body);
}
