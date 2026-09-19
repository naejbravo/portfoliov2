import { Card } from "@/components/ui/card"
import { ContactForm } from "./contactForm"
import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Bloque de contacto: texto y datos a la izquierda, formulario en un caja con filete
 * a la derecha. Sin sombras ni esquinas redondeadas grandes — caja, filete y tipografía.
 */
export default function CardContact() {
  const descriptionId = "contact-section-description"
  const { email } = portfolio.contact

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
        "Backend .NET and REST APIs, cloud infrastructure with Docker and Terraform, applied AI (LLM integrations, RAG with vector databases) and AI-powered document automation.",
    },
    {
      term: "Format",
      value: "Technical mentoring, architecture design or end-to-end execution.",
    },
  ]

  return (
    <div className="grid gap-12 md:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)] md:gap-16">
      <div>
        <p className="mono-label text-brand">05 — Contact</p>
        <h2 className="display mt-6 text-[1.7rem] font-medium md:text-3xl">
          Do you have a challenge in mind? Let&apos;s talk
        </h2>
        <p id={descriptionId} className="mt-5 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
          Tell me about your product or current processes. I can help with backend and API development,
          cloud infrastructure, IaC, and applied AI — LLM integrations, RAG and document automation — from
          ideation to production.
        </p>

        <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.term} className="border-t border-border pt-4">
              <dt className="mono-label text-[0.64rem] text-muted-foreground">{detail.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Card className="border border-border p-6 shadow-none md:p-8">
        <ContactForm descriptionId={descriptionId} />
        <p className="mono-label mt-6 text-[0.64rem] text-muted-foreground">
          Or write directly to{" "}
          <a className="text-foreground underline underline-offset-4 hover:text-brand" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </Card>
    </div>
  )
}
