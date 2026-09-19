import SectionHeading from "@/components/section-heading"
import { portfolio } from "@/content/portfolio/placeholder"

const levelTone: Record<string, string> = {
  advanced: "text-brand",
  solid: "text-foreground",
  "working knowledge": "text-muted-foreground",
}

/**
 * Stack en tres columnas: cabecera monoespaciada, una línea de contexto y filas
 * tecnología / nivel. El nivel alto se marca en rojo — el único acento del sistema.
 */
export default function Stack() {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="02 — Stack"
          title="Tools I work with every day"
          note="Last reviewed · August 2026"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {portfolio.stack.map((group) => (
            <div key={group.title}>
              <h3 className="mono-label border-b border-foreground pb-3">{group.title}</h3>
              <p className="mt-4 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">
                {group.intro}
              </p>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-2.5 text-sm"
                  >
                    <span className="min-w-0">{item.name}</span>
                    <span
                      className={`mono-label shrink-0 whitespace-nowrap text-[0.6rem] ${levelTone[item.level] ?? "text-muted-foreground"}`}
                    >
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
