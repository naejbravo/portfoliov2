import { Card } from "@/components/ui/card"
import { ContactForm } from "./contactForm"

/**
 * Bloque de contacto: texto y datos a la izquierda, formulario en una caja con filete a
 * la derecha. Sin sombras ni esquinas redondeadas — caja, filete y tipografía.
 */
export default function CardContact({ email }: { email: string }) {
  const descriptionId = "contact-section-description"

  const details = [
    {
      term: "Availability",
      value: "Remote or hybrid projects in Latam/EU.",
    },
    {
      term: "Response",
      value: "Contact me and I'll reply within 48 business hours.",
    },
    {
      term: "Specialty",
      value:
        ".NET solutions and REST APIs, container delivery with Docker and GHCR, cloud infrastructure with Terraform, and applied AI (LLM integrations, RAG with vector databases).",
    },
    {
      term: "Format",
      value: "Technical mentoring, architecture design or end-to-end execution.",
    },
  ]

  return (
    <div className="hero-foot mt-0 border-t-0 pt-0">
      <div className="md:col-span-2">
        <p id={descriptionId} className="lead max-w-[62ch] text-ink-soft">
          Tell me about your product or current processes. I can help with .NET solution design,
          containerised delivery, cloud infrastructure as code and applied AI — from architecture to
          production.
        </p>

        <dl className="mt-10 grid gap-x-10 gap-y-0 border-t border-rule sm:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.term} className="py-5">
              <dt className="kv uppercase tracking-[0.08em] text-[#8b8b84]">{detail.term}</dt>
              <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Card className="border border-rule p-6 shadow-none md:col-span-1">
        <ContactForm descriptionId={descriptionId} errorEmail={email} />
        <p className="kv mt-6">
          Or write directly to <a href={`mailto:${email}`}>{email}</a>
        </p>
      </Card>
    </div>
  )
}
