"use client"

import Link from "next/link"

import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

const featuredProjects = projects.slice(0, 3)

export default function ProjectsSection() {
  const useSlider = featuredProjects.length > 2

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24" id="projects">
      <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <h2 className="text-2xl font-semibold md:text-3xl md:text-left">Proyectos destacados</h2>
        <Link href="/work" className="text-sm underline underline-offset-4 hover:opacity-80">
          Ver todos
        </Link>
      </div>

      {useSlider ? (
        <div className="keen-slider mt-8 md:mt-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} className="keen-slider__slide" />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
