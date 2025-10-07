import Image from "next/image"
import Link from "next/link"

import type { Project } from "@/lib/projects"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  project: Project
  className?: string
  headingLevel?: "h2" | "h3"
}

export function ProjectCard({ project, className, headingLevel = "h3" }: ProjectCardProps) {
  const HeadingTag = headingLevel

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group block overflow-hidden rounded-3xl border border-neutral-200 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700",
        className
      )}
    >
      <div className="relative aspect-[16/9] bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <HeadingTag className="text-lg font-semibold group-hover:opacity-90">{project.title}</HeadingTag>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {project.timeline.stage ?? project.status}
          </span>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.tagline}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.techKeywords.map((tag) => (
            <li
              key={`${project.slug}-${tag}`}
              className="rounded-full border border-neutral-300/70 px-2.5 py-1 text-[11px] text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
