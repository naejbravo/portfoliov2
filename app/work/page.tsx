import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Selección de plataformas y productos digitales en los que he liderado arquitectura, desarrollo y lanzamiento.",
}

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          Proyectos
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-center md:text-5xl">
          Transformo procesos complejos en productos digitales claros y medibles.
        </h1>
        <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 text-center">
          Cada proyecto combina descubrimiento con stakeholders, arquitectura escalable y métricas de negocio para guiar
          decisiones. Aquí tienes una muestra reciente.
        </p>
      </section>

      <div className="mt-16 space-y-16">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="grid gap-8 rounded-3xl border border-neutral-200 p-6 md:grid-cols-[1.05fr,0.95fr] md:p-10 dark:border-neutral-800"
          >
            <Link
              href={`/work/${project.slug}`}
              className="relative block overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-50 transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800/70 dark:bg-neutral-900"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </Link>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  <span>{project.status}</span>
                  <span>•</span>
                  <span>{project.timeline.stage}</span>
                  {project.timeline.start && (
                    <>
                      <span>•</span>
                      <span>Desde {project.timeline.start}</span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-semibold leading-tight">
                  <Link href={`/work/${project.slug}`} className="hover:underline">
                    {project.title}
                  </Link>
                </h2>
                <p className="text-sm italic text-neutral-500 dark:text-neutral-400">{project.tagline}</p>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300">{project.solutionOverview}</p>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Impacto
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {project.impactHighlights.map((result) => (
                    <li key={`${project.slug}-${result}`} className="flex gap-2">
                      <span aria-hidden="true" className="mt-1 inline-block size-1.5 rounded-full bg-neutral-400" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.techKeywords.map((tag) => (
                  <span
                    key={`${project.slug}-tag-${tag}`}
                    className="rounded-full border border-neutral-300/70 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80 dark:text-neutral-50"
                >
                  Ver caso de estudio →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
