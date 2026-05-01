import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-neutral-800/60 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="flex items-center">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Jean Bravo
        </span>
      </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link className="hover:opacity-80" href="/#projects">
              Projects
            </Link>
            <Link className="hover:opacity-80" href="/#contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/naejbravo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/jean-bravo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="/cv_eng_jean_2026.pdf"
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
              aria-label="CV"
            >
              <FileText className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
