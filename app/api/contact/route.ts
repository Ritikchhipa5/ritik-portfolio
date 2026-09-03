import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.email().trim().max(320),
  company: z.string().trim().max(200).optional(),
  projectType: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 }
    );
  }

  const { name, email, company, projectType, budget, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Portfolio Contact <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      projectType ? `Project Type: ${projectType}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
