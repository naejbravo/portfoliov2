import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { portfolio } from "@/content/portfolio/placeholder"
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

/**
 * Caso de estudio como documento: encabezado, problema/rol en dos columnas,
 * decisiones y retos en filas con filete, stack en mono y métricas en celdas planas.
 */
export default async function ProjectPage({ params }: PageParams) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const {
    timeline,
    techStack,
    technicalDecisions = [],
    technicalChallenges = [],
    metrics = [],
  } = project

  return (
    <main className="mx-auto w-full max-w-[1100px] px-5 pb-24 pt-12 sm:px-8 md:pt-16">
      <Link
        href="/work"
        className="mono-label text-muted-foreground transition-colors hover:text-brand"
      >
        ← Back to projects
      </Link>

      <header className="mt-10 border-b border-foreground pb-8">
        <div className="mono-label flex flex-wrap gap-x-4 gap-y-1 text-brand">
          <span>{project.status}</span>
          <span>{timeline.stage}</span>
          {timeline.start ? <span>Since {timeline.start}</span> : null}
        </div>
        <h1 className="display mt-5 text-3xl font-medium md:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
      </header>

      <figure className="relative mt-10 aspect-[16/9] border border-border">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          className="object-contain p-8 md:p-16"
          sizes="(max-width: 768px) 100vw, 1100px"
          priority
        />
      </figure>

      <section className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="mono-label border-b border-foreground pb-3">Problem</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{project.businessProblem}</p>
        </div>
        <div>
          <h2 className="mono-label border-b border-foreground pb-3">Role</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{project.role}</p>
          {"description" in project && project.description ? (
            <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>
          ) : null}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mono-label border-b border-foreground pb-3">Solution</h2>
        <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-muted-foreground">
          {project.solutionOverview}
        </p>
      </section>

      {technicalDecisions.length > 0 && (
        <section className="mt-14">
          <h2 className="mono-label border-b border-foreground pb-3">Technical decisions</h2>
          <ul className="mt-4 border-b border-border">
            {technicalDecisions.map((item: string) => (
              <li
                key={`${project.slug}-decision-${item.slice(0, 30)}`}
                className="border-t border-border py-5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {technicalChallenges.length > 0 && (
        <section className="mt-14">
          <h2 className="mono-label border-b border-foreground pb-3">Technical challenges</h2>
          <ul className="mt-4 grid gap-x-12 gap-y-0 border-b border-border md:grid-cols-2">
            {technicalChallenges.map((item: string) => (
              <li
                key={`${project.slug}-challenge-${item.slice(0, 30)}`}
                className="border-t border-border py-5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="mono-label border-b border-foreground pb-3">Tech stack</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={`${project.slug}-cat-${category}`}>
              <h3 className="mono-label text-brand">{category.replace(/_/g, " / ")}</h3>
              <ul className="mt-3">
                {(items as string[]).map((item: string) => (
                  <li
                    key={`${project.slug}-tech-${item}`}
                    className="border-b border-border py-2 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {metrics.length > 0 && (
        <section className="mt-14">
          <h2 className="mono-label border-b border-foreground pb-3">Impact</h2>
          <div className="mt-6 grid gap-x-8 gap-y-0 border-b border-border md:grid-cols-3">
            {metrics.map((metric: string, i: number) => (
              <div key={`${project.slug}-metric-${i}`} className="border-t border-border py-5">
                <p className="text-sm leading-relaxed">{metric}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-16 bg-foreground px-6 py-10 text-background md:px-10 md:py-12">
        <h2 className="display max-w-[24ch] text-2xl font-medium md:text-3xl">
          Want to see this in your context?
        </h2>
        <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-background/75">
          {project.callToAction}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center border border-background bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:bg-brand hover:text-background"
          >
            Schedule a call
          </Link>
          <a
            href={`mailto:${portfolio.contact.email}`}
            className="inline-flex items-center border border-background/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-background hover:bg-background/10"
          >
            Email me
          </a>
        </div>
      </footer>
    </main>
  )
}
