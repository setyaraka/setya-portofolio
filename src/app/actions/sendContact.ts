"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Optional: harden a bit */
const MAX_LEN = { name: 80, email: 120, message: 3000 };

export async function sendContact(
  _prevState: { ok: boolean; message?: string },
  formData: FormData
) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "");

  if (honeypot) {
    return { ok: true, message: "Thanks!" };
  }

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill all fields." };
  }

  if (
    name.length > MAX_LEN.name ||
    email.length > MAX_LEN.email ||
    message.length > MAX_LEN.message
  ) {
    return { ok: false, message: "Input too long." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <noreply@vaultiva.cloud>",
      to: process.env.EMAIL_TO!,
      subject: `[Portfolio] New message from ${name}`,
      replyTo: email,
      html: `
         <div style="font-family: Inter, system-ui, Arial, sans-serif; max-width:600px; margin:20px auto; border:1px solid #eee; border-radius:8px; overflow:hidden">
            <div style="background:#ef4444; color:white; padding:16px; font-size:18px; font-weight:bold">
                New Portfolio Message
            </div>
            <div style="padding:20px; background:white;">
            <p style="margin:0 0 12px 0"><b>Name:</b> ${name}</p>
            <p style="margin:0 0 12px 0"><b>Email:</b> <a href="mailto:${email}" style="color:#2563EB">${email}</a></p>
            <p style="margin:0"><b>Message:</b></p>
            <div style="margin-top:8px; padding:12px; background:#f9fafb; border-radius:6px; white-space:pre-wrap; line-height:1.5">
                ${message}
            </div>
            </div>
            <div style="background:#f3f4f6; padding:12px; font-size:12px; color:#6b7280; text-align:center">
            This message was sent from your <b>Portfolio Contact Form</b>.
            </div>
        </div>
      `,
    });

    return { ok: true, message: "Message sent. I’ll get back to you soon." };
  } catch (err) {
    console.error(err);
    return { ok: false, message: "Failed to send. Please try again later." };
  }
}
