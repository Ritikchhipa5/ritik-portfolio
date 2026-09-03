import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { renderAdminEmail, renderClientEmail } from "@/lib/email-templates";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.email().trim().toLowerCase().max(320),
  company: z.string().trim().max(200).optional(),
  projectType: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Ritik Chhipa <${fromEmail}>`,
    to: toEmail,
    replyTo: data.email,
    subject: `New inquiry from ${data.name}`,
    html: renderAdminEmail(data),
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      data.projectType ? `Project Type: ${data.projectType}` : null,
      data.budget ? `Budget: ${data.budget}` : null,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 },
    );
  }

  // Best-effort confirmation email to the client — never fail the request over this.
  // Note: Resend's sandbox `onboarding@resend.dev` sender can only deliver to the
  // account's own verified address, so this will silently no-op until a real
  // domain is verified in Resend and CONTACT_FROM_EMAIL is switched over.
  try {
    await resend.emails.send({
      from: `Ritik Chhipa <${fromEmail}>`,
      to: data.email,
      replyTo: toEmail,
      subject: "Thanks for reaching out — I'll be in touch within 24 hours",
      html: renderClientEmail(data),
      text: `Thanks for reaching out, ${data.name}! I've received your message and will get back to you within 24 hours.`,
    });
  } catch (err) {
    console.error("Failed to send client confirmation email:", err);
  }

  return NextResponse.json({ success: true });
}
