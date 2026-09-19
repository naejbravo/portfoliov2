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
 * Caso de estudio como documento: encabezado con metadatos en mono, problema/rol en dos
 * columnas, decisiones y retos en filas con filete, stack en columnas y cierre en tinta.
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
    <main className="shell pb-24 pt-12 md:pt-16">
      <Link href="/work" className="ft-note text-[#8b8b84] transition-colors hover:text-brand-text">
        ← Back to projects
      </Link>

      <header className="mt-10 border-b border-ink pb-8">
        <div className="sec-num">
          {project.status} · {timeline.stage}
          {timeline.start ? ` · Since ${timeline.start}` : ""}
        </div>
        <h1 className="h2 mt-5">{project.title}</h1>
        <p className="lead mt-5 text-ink-soft">{project.tagline}</p>
      </header>

      <figure className="relative mt-10 aspect-[16/9] border border-rule">
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
          <h2 className="col-h3">Problem</h2>
          <p className="text-ink-soft">{project.businessProblem}</p>
        </div>
        <div>
          <h2 className="col-h3">Role</h2>
          <p className="text-ink-soft">{project.role}</p>
          {"description" in project && project.description ? (
            <p className="mt-3 text-[0.95rem] text-ink-soft">{project.description}</p>
          ) : null}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="col-h3">Solution</h2>
        <p className="lead max-w-[68ch] text-ink-soft">{project.solutionOverview}</p>
      </section>

      {technicalDecisions.length > 0 && (
        <section className="mt-14">
          <h2 className="col-h3">Technical decisions</h2>
          <ul className="border-b border-rule">
            {technicalDecisions.map((item: string) => (
              <li
                key={`${project.slug}-decision-${item.slice(0, 30)}`}
                className="border-t border-rule py-5 text-[0.95rem] leading-relaxed text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {technicalChallenges.length > 0 && (
        <section className="mt-14">
          <h2 className="col-h3">Technical challenges</h2>
          <ul className="grid gap-x-12 border-b border-rule md:grid-cols-2">
            {technicalChallenges.map((item: string) => (
              <li
                key={`${project.slug}-challenge-${item.slice(0, 30)}`}
                className="border-t border-rule py-5 text-[0.95rem] leading-relaxed text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="col-h3">Tech stack</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={`${project.slug}-cat-${category}`}>
              <h3 className="sec-num">{category.replace(/_/g, " / ")}</h3>
              <ul className="mt-3">
                {(items as string[]).map((item: string) => (
                  <li key={`${project.slug}-tech-${item}`} className="border-b border-rule py-2 text-[0.95rem]">
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
          <h2 className="col-h3">Impact</h2>
          <div className="mt-6 grid gap-x-8 border-b border-rule md:grid-cols-3">
            {metrics.map((metric: string, i: number) => (
              <div key={`${project.slug}-metric-${i}`} className="border-t border-rule py-5">
                <p className="text-[0.95rem] leading-relaxed">{metric}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="ft mt-16">
        <div className="grid gap-6 p-6 md:grid-cols-[1.4fr_1fr] md:items-end md:p-10">
          <div>
            <h2 className="big">Want to see this in your context?</h2>
            <p className="lead mt-4 max-w-[58ch] text-[#b9b9b3]">{project.callToAction}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/#contact"
              className="btn border-white bg-white text-ink hover:border-brand hover:bg-brand hover:text-white"
            >
              Schedule a call
            </Link>
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="btn btn-ghost border-white/60 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              Email me
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
