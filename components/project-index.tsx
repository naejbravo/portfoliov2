"use client"

import { useState } from "react"
import Link from "next/link"

import { projects } from "@/lib/projects"

/**
 * Índice de proyectos: filas tabulares con inversión a tinta de abajo arriba al pasar
 * el cursor, y detalle que se abre en la propia fila. Misma mecánica que la propuesta.
 *
 * Las filas salen de los casos reales (content/projects/details.json) más una fila de
 * pipeline de contenedores, que es práctica propia y no está documentada en ningún caso.
 */

type Row = {
  id: string
  title: string
  summary: string
  meta: string
  detail: string
  tech: string[]
  href?: string
}

const ORDER = [
  "webrrhhpro-hr-saas-multi-tenant-platform",
  "webcaepro-cae-management-platform",
  "hermes",
]

const pipelineRow: Row = {
  id: "",
  title: "Container delivery pipeline",
  summary:
    "Images built in CI, published to GHCR and deployed with health-checked automatic rollback.",
  meta: "2026",
  detail:
    "Multi-architecture images built and pushed to the GitHub Container Registry (GHCR), then released with Docker Compose behind a reverse proxy. Every release verifies service health before switching traffic and reverts automatically on failure, with a pre-flight database backup and controlled migrations.",
  tech: ["Docker", "GHCR", "GitHub Actions", "Compose"],
}

function trim(text: string, max: number) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

const realRows: Row[] = ORDER.flatMap((slug) => {
  const project = projects.find((candidate) => candidate.slug === slug)
  if (!project) return []

  return [
    {
      id: "",
      title: project.title,
      summary: trim(project.tagline, 104),
      meta: project.timeline.start ?? "",
      detail: project.solutionOverview,
      tech: project.techKeywords.slice(0, 5),
      href: `/work/${project.slug}`,
    },
  ]
})

const rows: Row[] = [...realRows, pipelineRow].map((row, index) => ({
  ...row,
  id: String(index + 1).padStart(2, "0"),
}))

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
          {rows.map((row) => {
            const isOpen = openIds.includes(row.id)
            const panelId = `project-${row.id}`

            return (
              <div key={row.id}>
                <button
                  type="button"
                  onClick={() => toggle(row.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={`row ${isOpen ? "row-open" : ""}`}
                >
                  <span className="r-idx">{row.id}</span>
                  <span className="r-title">{row.title}</span>
                  <span className="r-desc">{row.summary}</span>
                  <span className="r-year">{row.meta}</span>
                </button>

                <div id={panelId} hidden={!isOpen} className="row-detail">
                  {row.detail}
                  <ul className="r-tags">
                    {row.tech.map((tech) => (
                      <li key={tech}>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  {row.href ? (
                    <p className="mt-4 text-[0.92rem]">
                      <Link
                        href={row.href}
                        className="underline underline-offset-4 hover:text-brand-text"
                      >
                        Case study ↗
                      </Link>
                    </p>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>

        <div className="ft-note mt-8 flex flex-wrap items-center justify-between gap-4 text-ink-soft">
          <span>.NET solutions · Docker &amp; GHCR · Cloud engineering · Full-stack</span>
          <Link href="/work" className="underline underline-offset-4 hover:text-brand-text">
            View all case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
