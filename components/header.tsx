import Link from "next/link"

import { portfolio } from "@/content/portfolio/placeholder"

const sections = [
  { index: "01", label: "Profile", href: "/#profile" },
  { index: "02", label: "Stack", href: "/#stack" },
  { index: "03", label: "Projects", href: "/#projects" },
  { index: "04", label: "Experience", href: "/#experience" },
  { index: "05", label: "Contact", href: "/#contact" },
]

/**
 * Cabecera editorial: identidad en monoespaciada, índice numerado de secciones
 * y enlaces directos. Sin iconos de relleno ni degradados: la jerarquía la marca
 * la tipografía y el filete inferior.
 */
export default function Header() {
  const { contact, brand } = portfolio

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
        <Link href="/" className="mono-label text-foreground">
          {brand.name}
          <span className="hidden text-muted-foreground sm:inline"> / {brand.role}</span>
        </Link>

        <nav
          aria-label="Sections"
          className="order-3 -mx-5 w-full overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:order-2 md:mx-0 md:w-auto md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex items-center gap-5 whitespace-nowrap md:gap-6">
            {sections.map((section) => (
              <li key={section.index}>
                <Link
                  href={section.href}
                  className="mono-label text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="text-brand">{section.index}</span> {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="order-2 flex items-center gap-4 md:order-3">
          <li>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-muted-foreground transition-colors hover:text-brand"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label text-muted-foreground transition-colors hover:text-brand"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              href={contact.cvEn}
              className="mono-label text-muted-foreground transition-colors hover:text-brand"
            >
              CV ↓
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
