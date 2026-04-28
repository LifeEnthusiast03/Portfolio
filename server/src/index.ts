import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// ─── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// ─── OAuth2 Transporter ────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
}

// ─── Email Templates ───────────────────────────────────────────

/** Email sent TO the portfolio owner with full message details */
function ownerEmailHtml(name: string, email: string, subject: string, message: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Contact Message</title></head>
<body style="margin:0;padding:0;background:#0a0f1a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1525;border-radius:16px;overflow:hidden;border:1px solid #1e2d45;">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:32px 40px;">
          <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">📬 New Message via Portfolio</h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Someone reached out through your contact form</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding-bottom:20px;">
              <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">From</p>
              <p style="margin:0;color:#e2e8f0;font-size:16px;font-weight:600;">${name}</p>
              <a href="mailto:${email}" style="color:#3b82f6;font-size:14px;text-decoration:none;">${email}</a>
            </td></tr>
            <tr><td style="padding-bottom:20px;border-top:1px solid #1e2d45;padding-top:20px;">
              <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Subject</p>
              <p style="margin:0;color:#e2e8f0;font-size:15px;">${subject}</p>
            </td></tr>
            <tr><td style="padding-bottom:20px;border-top:1px solid #1e2d45;padding-top:20px;">
              <p style="margin:0 0 12px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <div style="background:#111827;border-left:3px solid #3b82f6;border-radius:0 8px 8px 0;padding:16px 20px;">
                <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </td></tr>
          </table>
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}"
             style="display:inline-block;margin-top:8px;padding:12px 28px;background:linear-gradient(135deg,#1d4ed8,#4f46e5);color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">
            ↩ Reply to ${name}
          </a>
        </td></tr>
        <tr><td style="padding:20px 40px;border-top:1px solid #1e2d45;">
          <p style="margin:0;color:#475569;font-size:12px;text-align:center;">Received · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/** Auto-reply email sent TO the person who filled the form */
function autoReplyHtml(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Thanks for reaching out!</title></head>
<body style="margin:0;padding:0;background:#0a0f1a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0d1525;border-radius:16px;overflow:hidden;border:1px solid #1e2d45;">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:36px 40px;text-align:center;">
          <div style="font-size:40px;margin-bottom:12px;">👋</div>
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">Hey ${name}, thanks for reaching out!</h1>
          <p style="margin:10px 0 0;color:rgba(255,255,255,0.75);font-size:15px;">I've received your message and will get back to you shortly.</p>
        </td></tr>
        <!-- Body -->
        <tr><td style="padding:40px 40px 24px;">
          <p style="margin:0 0 18px;color:#94a3b8;font-size:15px;line-height:1.7;">
            Thanks for taking the time to write to me. I usually respond within <strong style="color:#e2e8f0;">24 hours</strong> — 
            I'll review your message and get back to you as soon as possible.
          </p>
          <p style="margin:0 0 18px;color:#94a3b8;font-size:15px;line-height:1.7;">
            In the meantime, feel free to check out my work on GitHub or connect with me on LinkedIn.
          </p>
          <table cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr>
              <td style="padding-right:12px;">
                <a href="https://github.com/LifeEnthusiast03" style="display:inline-block;padding:11px 22px;background:#1e293b;border:1px solid #334155;color:#e2e8f0;text-decoration:none;border-radius:8px;font-size:14px;font-weight:500;">
                  🐙 GitHub
                </a>
              </td>
              <td>
                <a href="https://www.linkedin.com/in/sougatasaha/" style="display:inline-block;padding:11px 22px;background:#1d4ed8;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:500;">
                  💼 LinkedIn
                </a>
              </td>
            </tr>
          </table>
        </td></tr>
        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #1e2d45;text-align:center;">
          <p style="margin:0;color:#475569;font-size:13px;">— Sougata Saha · Full Stack Developer</p>
          <p style="margin:6px 0 0;color:#334155;font-size:12px;">sahasougata820@gmail.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Contact Endpoint ──────────────────────────────────────────
app.post('/api/contact', async (req: Request, res: Response): Promise<void> => {
  const { name, email, subject, message } = req.body as {
    name?: string; email?: string; subject?: string; message?: string;
  };

  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, error: 'All fields are required.' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, error: 'Invalid email address.' });
    return;
  }

  try {
    const transporter = createTransporter();

    // 1️⃣  Notify the owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: ownerEmailHtml(name, email, subject, message),
    });

    // 2️⃣  Auto-reply to the sender
    await transporter.sendMail({
      from: `"Sougata Saha" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Re: ${subject} — Thanks for reaching out!`,
      html: autoReplyHtml(name),
    });
    console.log("messsage send successful");
    

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('[Email Error]', err);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
});

// ─── Health Check ──────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`✅ Email server running on http://localhost:${PORT}`);
});
