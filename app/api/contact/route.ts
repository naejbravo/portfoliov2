import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

// Validación del payload (seguridad básica)
const BodySchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
  // Honeypot anti-bots opcional
  botField: z.string().optional(),
})

// Util para evitar inyecciones en el HTML del email
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
    const json = await req.json()
    const parsed = BodySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 })
    }

    const { email, message, botField } = parsed.data

    // Si el honeypot viene relleno, ignoramos silenciosamente
    if (botField) return NextResponse.json({ success: true })

    // IMPORTANTE:
    // - Para pruebas rápidas puedes usar "onboarding@resend.dev" como 'from'
    // - Para producción, verifica tu propio dominio en Resend y usa algo tipo "hola@tudominio.com"
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["naejbravo@gmail.com"], // <-- donde quieres recibir los mensajes
      reply_to: email,                  // así puedes contestar directo al remitente
      subject: "Nuevo mensaje desde tu portafolio",
      text: `Email: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif;">
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 })
  }
}
