import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'smartsolutions870@gmail.com',
    pass: process.env.SMTP_PASS || '',
  },
});

const DEFAULT_FROM = process.env.EMAIL_FROM || 'smartsolutions870@gmail.com';
const DEFAULT_TO = process.env.EMAIL_TO || 'smartsolutions870@gmail.com';

export async function sendEmail({
  to,
  subject,
  html,
  from = DEFAULT_FROM,
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  try {
    const info = await transporter.sendMail({ from, to, subject, html });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: String(error) };
  }
}

export async function sendToAdmin(subject: string, html: string) {
  return sendEmail({ to: DEFAULT_TO, subject, html });
}

export async function sendToClient(to: string, subject: string, html: string) {
  return sendEmail({ to, subject, html });
}
