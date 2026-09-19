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
 * Índice de casos de estudio: filas de documento (número, metadatos, resumen, portada),
 * sin tarjetas ni sombras. Misma retícula que el resto del sitio.
 */
export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pb-24 pt-16 sm:px-8 md:pt-20">
      <p className="mono-label text-brand">Case studies</p>
      <h1 className="display mt-6 max-w-[26ch] text-3xl font-medium md:text-5xl">
        I turn complex processes into reliable backends, APIs and AI-powered systems.
      </h1>
      <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
        Each project combines scalable architecture, production operations and business metrics to
        guide decisions. Here&apos;s a recent sample.
      </p>

      <ul className="mt-16 border-b border-border">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-t border-border">
            <Link
              href={`/work/${project.slug}`}
              className="group grid gap-6 py-8 md:grid-cols-[3.5rem_1fr_18rem] md:gap-8"
            >
              <span className="mono-label pt-1 text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="mono-label flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                  <span>{project.status}</span>
                  <span>{project.timeline.stage}</span>
                  {project.timeline.start ? <span>Since {project.timeline.start}</span> : null}
                </div>
                <h2 className="display mt-3 text-xl font-medium transition-colors group-hover:text-brand md:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
                  {project.solutionOverview}
                </p>
                <ul className="mono-label mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.6rem] text-muted-foreground">
                  {project.techKeywords.slice(0, 5).map((tag) => (
                    <li key={`${project.slug}-${tag}`} className="border-b border-border pb-0.5">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mono-label mt-6 text-foreground transition-colors group-hover:text-brand">
                  View case study →
                </p>
              </div>

              <div className="relative aspect-[16/10] border border-border">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
