import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selection of platforms and digital products where I have led architecture, development and deployment.",
}

/**
 * Índice de casos de estudio con la misma retícula de filas que la portada:
 * número, título con metadatos, resumen y portada, separados por filetes finos.
 */
export default function WorkPage() {
  return (
    <main className="shell pb-24 pt-16 md:pt-20">
      <p className="sec-num">Case studies</p>
      <h1 className="h2 mt-6 max-w-[26ch]">
        I turn complex processes into reliable backends, APIs and AI-powered systems.
      </h1>
      <p className="lead mt-6 max-w-[62ch] text-ink-soft">
        Each project combines scalable architecture, production operations and business metrics to
        guide decisions. Here&apos;s a recent sample.
      </p>

      <div className="rows mt-16">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="row"
            style={{ gridTemplateColumns: "4rem 1.4fr 2fr 9rem" }}
          >
            <span className="r-idx">{String(index + 1).padStart(2, "0")}</span>

            <span>
              <span className="ft-note block">
                {project.status} · {project.timeline.stage}
                {project.timeline.start ? ` · Since ${project.timeline.start}` : ""}
              </span>
              <span className="r-title mt-2 block">{project.title}</span>
              <span className="r-tags">
                {project.techKeywords.slice(0, 4).map((tag) => (
                  <span key={`${project.slug}-${tag}`}>{tag}</span>
                ))}
              </span>
            </span>

            <span className="r-desc">{project.solutionOverview}</span>

            <span className="relative block aspect-[16/10] border border-rule">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                className="object-contain p-3"
                sizes="144px"
              />
            </span>
          </Link>
        ))}
      </div>

      <div className="ft-note mt-8 text-ink-soft">
        <Link href="/" className="hover:text-brand-text">
          ← Back to profile
        </Link>
      </div>
    </main>
  )
}
