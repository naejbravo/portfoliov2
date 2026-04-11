import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getProjectBySlug, projects } from "@/lib/projects"

type PageParams = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project not found" }
  }

  return {
    title: `${project.title} · Case study`,
    description: project.tagline,
  }
}

export default async function ProjectPage({ params }: PageParams) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const { timeline, techStack, highlights = [], metrics = [] } = project

  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-20">
      <Link
        href="/work"
        className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-50"
      >
        ← Back to projects
      </Link>

      {/* Header */}
      <header className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          <span>{project.status}</span>
          <span>•</span>
          <span>{timeline.stage}</span>
          {timeline.start && (
            <>
              <span>•</span>
              <span>Since {timeline.start}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{project.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">{project.tagline}</p>
      </header>

      {/* Cover image */}
      <figure className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative aspect-[16/9]">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-contain p-8 md:p-16"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </figure>

      {/* Overview card */}
      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Role</dt>
            <dd className="mt-1 text-neutral-800 dark:text-neutral-100">{project.role}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Scenario</dt>
            <dd className="mt-1 text-neutral-800 dark:text-neutral-100">{project.businessProblem}</dd>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item: string) => (
              <div
                key={`${project.slug}-highlight-${item.slice(0, 20)}`}
                className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50"
              >
                <p className="text-sm text-neutral-700 dark:text-neutral-200">{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="mt-12 rounded-2xl border border-neutral-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-950/50">
        <h2 className="text-xl font-semibold">Tech stack</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={`${project.slug}-cat-${category}`}>
              <h3 className="text-sm font-semibold capitalize text-neutral-800 dark:text-neutral-100">
                {category.replace(/_/g, " / ")}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {items.map((item: string) => (
                  <span
                    key={`${project.slug}-tech-${item}`}
                    className="rounded-full border border-neutral-300/70 px-2.5 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics */}
      {metrics.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Impact</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {metrics.map((metric: string, i: number) => (
              <div
                key={`${project.slug}-metric-${i}`}
                className="rounded-2xl border border-neutral-200 bg-white/70 p-5 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50"
              >
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{metric}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <footer className="mt-12 rounded-3xl border border-neutral-200 bg-white/80 p-6 text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100 md:p-8">
        <h2 className="text-2xl font-semibold">Want to see this in your context?</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{project.callToAction}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900"
          >
            Schedule a call
          </Link>
          <a
            href="mailto:naejbravo@gmail.com"
            className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            Email me
          </a>
        </div>
      </footer>
    </main>
  )
}
