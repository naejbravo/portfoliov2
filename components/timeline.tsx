import SectionHeading from "@/components/section-heading"
import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Trayectoria como documento: periodo en mono a la izquierda, puesto y contexto a la derecha,
 * separados por filetes. Sin línea de tiempo decorativa ni iconos.
 */
export default function Timeline() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="04 — Experience"
          title="Where I have worked"
          note="Most recent first"
        />

        <ol className="mt-12 border-b border-border">
          {portfolio.experience.map((entry) => (
            <li
              key={`${entry.period}-${entry.role}`}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[9rem_1fr] md:gap-8 md:py-7"
            >
              <span className="mono-label pt-1 text-brand">{entry.period}</span>
              <div>
                <h3 className="text-lg font-medium md:text-xl">{entry.role}</h3>
                <p className="mono-label mt-2 text-muted-foreground">{entry.org}</p>
                <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
