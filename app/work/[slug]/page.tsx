import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getProjectBySlug, projects } from "@/lib/projects"

type PageParams = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: `${project.title} · Caso de estudio`,
    description: project.solutionOverview,
  }
}

export default async function ProjectPage({ params }: PageParams) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const {
    timeline,
    team,
    keyFeatures = [],
    techStack,
    dataFlow = [],
    observability,
    security,
    risksAndChallenges = [],
    nextIterations = [],
  } = project

  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-20">
      <Link href="/work" className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-50">
        ← Volver a proyectos
      </Link>

      <header className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
          <span>{project.status}</span>
          <span>•</span>
          <span>{timeline.stage}</span>
          {timeline.start && (
            <>
              <span>•</span>
              <span>Desde {timeline.start}</span>
            </>
          )}
          {timeline.end && (
            <>
              <span>•</span>
              <span>Hasta {timeline.end}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{project.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">{project.tagline}</p>
      </header>

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

      <section className="mt-10 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50 md:p-8">
        <h2 className="text-xl font-semibold">Ficha del proyecto</h2>
        <dl className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Rol</dt>
            <dd className="mt-1 text-neutral-800 dark:text-neutral-100">{project.role}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Equipo</dt>
            <dd className="mt-1 text-neutral-800 dark:text-neutral-100">
              {team.size === 1 ? "Individual" : `${team.size} personas`}
            </dd>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
              {team.composition.map((item) => (
                <li key={`${project.slug}-team-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Escenario</dt>
            <dd className="mt-1 text-neutral-800 dark:text-neutral-100">{project.businessProblem}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Stack destacado</dt>
            <dd className="mt-1 flex flex-wrap gap-2 text-xs">
              {project.techKeywords.map((tag) => (
                <span
                  key={`${project.slug}-stack-${tag}`}
                  className="rounded-full border border-neutral-300/70 px-3 py-1 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-12 space-y-8">
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold">Solución</h2>
          <p className="text-neutral-600 dark:text-neutral-300">{project.solutionOverview}</p>
        </article>

        {keyFeatures.length > 0 && (
          <article className="space-y-4">
            <h3 className="text-xl font-semibold">Características clave</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {keyFeatures.map((feature) => (
                <div
                  key={`${project.slug}-feature-${feature.name}`}
                  className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50"
                >
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{feature.name}</h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{feature.description}</p>
                  <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">{feature.value}</p>
                  {feature.highlights?.length ? (
                    <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 dark:text-neutral-300">
                      {feature.highlights.map((highlight) => (
                        <li key={`${project.slug}-feature-${feature.name}-${highlight}`} className="flex gap-2">
                          <span aria-hidden="true" className="mt-1 inline-block size-1.5 rounded-full bg-neutral-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </article>
        )}

        <article className="space-y-6">
          <h3 className="text-xl font-semibold">Arquitectura y stack</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 dark:border-neutral-800 dark:bg-neutral-950/50">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Estilo</h4>
              <p className="mt-2 text-neutral-700 dark:text-neutral-200">{project.architecture.style}</p>
              <h4 className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Capas</h4>
              <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                {project.architecture.layers.map((layer) => (
                  <li key={`${project.slug}-layer-${layer}`}>{layer}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 dark:border-neutral-800 dark:bg-neutral-950/50">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Integraciones
              </h4>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {project.architecture.integration.externalApi}
              </p>
              {project.architecture.integration.circuitBreaker.enabled && (
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  Circuit breaker configurado con umbral {project.architecture.integration.circuitBreaker.failureThreshold} y
                  reapertura en {project.architecture.integration.circuitBreaker.openSeconds} segundos.
                </p>
              )}
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                Endpoint de métricas: {project.architecture.integration.metricsEndpoint}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-950/50">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Stack completo
            </h4>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={`${project.slug}-stack-${category}`}>
                  <h5 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h5>
                  <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {items.map((item) => (
                      <li key={`${project.slug}-stack-${category}-${item}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>

        {dataFlow.length > 0 && (
          <article className="space-y-4">
            <h3 className="text-xl font-semibold">Flujo de datos</h3>
            <ol className="space-y-4">
              {dataFlow.map((step, index) => (
                <li
                  key={`${project.slug}-dataflow-${step.stage}`}
                  className="rounded-2xl border border-neutral-200 bg-white/70 p-5 dark:border-neutral-800 dark:bg-neutral-950/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white dark:bg-neutral-100 dark:text-neutral-900">
                      {index + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{step.stage}</h4>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    <span className="font-medium text-neutral-800 dark:text-neutral-100">Servicio:</span> {step.service}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    <span className="font-medium text-neutral-800 dark:text-neutral-100">Input:</span> {step.input}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    <span className="font-medium text-neutral-800 dark:text-neutral-100">Output:</span> {step.output}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        )}

        <article className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-950/50">
            <h3 className="text-xl font-semibold">Observabilidad</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{observability.logging}</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{observability.metrics}</p>
            {observability.adminScreens?.length ? (
              <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                {observability.adminScreens.map((screen) => (
                  <li key={`${project.slug}-observability-${screen}`}>{screen}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-950/50">
            <h3 className="text-xl font-semibold">Seguridad</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{security.identity}</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{security.authZ}</p>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{security.config}</p>
          </div>
        </article>

        {risksAndChallenges.length > 0 && (
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-600/40 dark:bg-amber-900/20">
            <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-200">Riesgos y mitigaciones</h3>
            <ul className="mt-3 space-y-2 text-sm text-amber-900 dark:text-amber-100">
              {risksAndChallenges.map((risk) => (
                <li key={`${project.slug}-risk-${risk}`} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1 inline-block size-1.5 rounded-full bg-amber-500" />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </article>
        )}

        <article className="rounded-2xl border border-neutral-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-950/50">
          <h3 className="text-xl font-semibold">Impacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            {project.impactHighlights.map((impactItem) => (
              <li key={`${project.slug}-impact-${impactItem}`} className="flex gap-2">
                <span aria-hidden="true" className="mt-1 inline-block size-1.5 rounded-full bg-neutral-400" />
                <span>{impactItem}</span>
              </li>
            ))}
          </ul>
        </article>

        {nextIterations.length > 0 && (
          <article className="rounded-2xl border border-neutral-200 bg-white/70 p-6 dark:border-neutral-800 dark:bg-neutral-950/50">
            <h3 className="text-xl font-semibold">Próximos pasos</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {nextIterations.map((iteration) => (
                <li key={`${project.slug}-next-${iteration}`} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1 inline-block size-1.5 rounded-full bg-neutral-400" />
                  <span>{iteration}</span>
                </li>
              ))}
            </ul>
          </article>
        )}
      </section>

      <footer className="mt-12 rounded-3xl border border-neutral-200 bg-white/80 p-6 text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60 dark:text-neutral-100 md:p-8">
        <h2 className="text-2xl font-semibold">¿Quieres ver este flujo en tu contexto?</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{project.callToAction}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900"
          >
            Agenda una llamada
          </Link>
          <a
            href="mailto:jean@jeanbravo.dev"
            className="inline-flex items-center rounded-2xl border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
          >
            Escríbeme por correo
          </a>
        </div>
      </footer>
    </main>
  )
}
