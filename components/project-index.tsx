"use client"

import { useState } from "react"
import Link from "next/link"

import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Índice de proyectos: filas tabulares con inversión a tinta de abajo arriba al pasar
 * el cursor, y detalle que se abre en la propia fila. Misma mecánica que la propuesta.
 */
export default function ProjectIndex() {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggle = (id: string) =>
    setOpenIds((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )

  return (
    <section className="blk" id="projects">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-num">03 — Projects</div>
          <h2 className="h2">
            Selected work
            <small className="h2-note">Select a row to expand the case summary</small>
          </h2>
        </div>

        <div className="rows">
          {portfolio.projects.map((project) => {
            const isOpen = openIds.includes(project.id)
            const panelId = `project-${project.id}`

            return (
              <div key={project.id}>
                <button
                  type="button"
                  onClick={() => toggle(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`row ${isOpen ? "row-open" : ""}`}
                >
                  <span className="r-idx">{project.id}</span>
                  <span className="r-title">{project.title}</span>
                  <span className="r-desc">{project.summary}</span>
                  <span className="r-year">{project.year}</span>
                </button>

                <div id={panelId} hidden={!isOpen} className="row-detail">
                  {project.detail}
                  <ul className="r-tags">
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="ft-note mt-8 flex flex-wrap items-center justify-between gap-4 text-ink-soft">
          <span>Template content · edit content/portfolio/placeholder.ts</span>
          <Link href="/work" className="underline underline-offset-4 hover:text-brand-text">
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
