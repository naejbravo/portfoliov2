"use client"

import { useState } from "react"
import Link from "next/link"

import SectionHeading from "@/components/section-heading"
import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Índice de proyectos: filas tabulares, no tarjetas. Cada fila se abre en el sitio
 * (sin navegar) para enseñar el detalle, y la primera arranca abierta para que el
 * patrón se entienda al primer vistazo.
 */
export default function ProjectIndex() {
  const [openIds, setOpenIds] = useState<string[]>([portfolio.projects[0].id])

  const toggle = (id: string) =>
    setOpenIds((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="03 — Projects"
          title="Selected work"
          note="Select a row to expand the case summary"
        />

        <ul className="mt-4 border-b border-border md:mt-8">
          {portfolio.projects.map((project) => {
            const isOpen = openIds.includes(project.id)
            const panelId = `project-${project.id}`

            return (
              <li key={project.id} className="border-t border-border first:border-t-0">
                <button
                  type="button"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group row-invert -mx-5 grid w-[calc(100%+2.5rem)] grid-cols-[2.6rem_1fr_4.2rem_1.5rem] items-baseline gap-x-4 gap-y-1 px-5 py-5 text-left sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 md:grid-cols-[3.5rem_1.35fr_2fr_5rem_2rem]"
                >
                  <span className="mono-label text-muted-foreground transition-colors group-hover:text-background/60">
                    {project.id}
                  </span>
                  <span className="display text-lg font-medium md:text-xl">{project.title}</span>
                  <span className="col-span-3 text-sm text-muted-foreground transition-colors group-hover:text-background/75 md:col-span-1 md:col-start-3">
                    {project.summary}
                  </span>
                  <span className="mono-label text-right text-muted-foreground transition-colors group-hover:text-brand md:col-start-4">
                    {project.year}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mono-label text-right text-brand md:col-start-5"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="border-l-2 border-brand pb-7 md:ml-14 md:pl-6"
                >
                  <p className="max-w-[62ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.detail}
                  </p>
                  <ul className="mono-label mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.62rem] text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech} className="border-b border-border pb-0.5">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mono-label mt-8 flex flex-wrap items-center justify-between gap-4 text-muted-foreground">
          <span>Template content · edit content/portfolio/placeholder.ts</span>
          <Link href="/work" className="text-foreground underline underline-offset-4 hover:text-brand">
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
