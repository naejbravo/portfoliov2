import { Card } from "@/components/ui/card"
import { ContactForm } from "./contactForm"

export default function CardContact() {
  const descriptionId = "contact-section-description"

  return (
    <Card className="mx-auto w-full max-w-6xl rounded-3xl border border-neutral-200/80 bg-neutral-50/70 p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-900 md:p-12">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold md:text-3xl">¿Tienes un reto en mente? Hablemos</h2>
          <p id={descriptionId} className="text-base text-neutral-600 dark:text-neutral-300">
            Cuéntame sobre tu producto o tus procesos actuales. Puedo sumarme desde la ideación hasta la puesta en
            producción, ayudando a alinear tecnología con métricas visibles para negocio.
          </p>
          <dl className="grid gap-3 text-sm text-neutral-600 dark:text-neutral-300 md:grid-cols-2">
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Disponibilidad</dt>
              <dd>Proyectos remotos o híbridos en Latam/EU.</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Respuesta</dt>
              <dd>Escríbeme y te responderé dentro de 48 horas hábiles.</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Especialidad</dt>
              <dd>Experiencias web con Next.js, ASP.NET Core y pipelines de datos.</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Formato</dt>
              <dd>Mentoría técnica, diseño de arquitectura o ejecución end-to-end.</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950">
          <ContactForm descriptionId={descriptionId} />
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
            También puedes escribirme directo a{" "}
            <a className="underline decoration-dotted underline-offset-4" href="mailto:jean@jeanbravo.dev">
              jean@jeanbravo.dev
            </a>
            .
          </p>
        </div>
      </div>
    </Card>
  )
}
