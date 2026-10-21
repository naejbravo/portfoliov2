import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

const navItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-bold tracking-tight">
          Jean Bravo
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} className="hover:text-swiss dark:hover:text-red-400" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/naejbravo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/jean-bravo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
