import Link from "next/link"

import { getProfile } from "@/content/profiles"

const sections = [
  { index: "01", label: "Profile", href: "/#profile" },
  { index: "02", label: "Stack", href: "/#stack" },
  { index: "03", label: "Projects", href: "/#projects" },
  { index: "04", label: "Experience", href: "/#experience" },
  { index: "05", label: "Contact", href: "/#contact" },
]

/**
 * Cabecera del sistema editorial: filete de tinta, identidad en monoespaciada con la
 * barra en rojo y índice numerado de secciones. En móvil el índice se oculta, como en
 * la propuesta.
 */
export default function Header() {
  const { contact, brand } = getProfile()

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-white/[0.92] py-6 backdrop-blur">
      <div className="shell flex flex-wrap items-baseline justify-between gap-8">
        <Link href="/" className="brand">
          {brand.name} <em className="not-italic text-brand-text">/</em> {brand.role}
        </Link>

        <nav aria-label="Sections" className="toc-nav">
          {sections.map((section) => (
            <Link key={section.index} href={section.href}>
              <span>{section.index}</span>
              {section.label}
            </Link>
          ))}
        </nav>

        <ul className="toc">
          <li>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={contact.cvEn}>CV ↓</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
