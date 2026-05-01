import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resendApiKey = process.env.RESEND_API_KEY || "re_KrAaZ44J_PMREztiritbE8V7sh3FiXfmV"
const contactRecipient = process.env.CONTACT_EMAIL || "naejbravo@gmail.com"
const contactFrom = process.env.CONTACT_FROM || "Portfolio <noreply@webrrhhprodev.es>"

const resend = resendApiKey ? new Resend(resendApiKey) : null

const BodySchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  botField: z.string().optional(),
})

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[m]!))
}

export async function POST(req: Request) {
  try {
    if (!resend || !contactRecipient || !contactFrom) {
      console.error("[contact] Missing config", {
        hasApiKey: Boolean(resendApiKey),
        hasRecipient: Boolean(contactRecipient),
        hasFrom: Boolean(contactFrom),
      })

      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const json = await req.json()
    const parsed = BodySchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      )
    }

    const { email, message, botField } = parsed.data

    if (botField) {
      return NextResponse.json({ success: true })
    }

    const { data, error } = await resend.emails.send({
      from: contactFrom,
      to: [contactRecipient],
      replyTo: email,
      subject: "New message from your portfolio",
      text: `Email: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif;">
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    if (error) {
      console.error("[contact] Resend error:", error)

      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    console.info("[contact] Email sent:", data)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] Server error:", err)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}