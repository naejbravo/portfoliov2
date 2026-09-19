import Link from "next/link"

import { linkLabel } from "./hero"
import { getProfile } from "@/content/profiles"

/**
 * Footer en tinta: etiqueta en monoespaciada, email en grande con subrayado de acento y
 * columna de enlaces, tal como cierra la propuesta.
 */
export default function Footer() {
  const { contact, meta } = getProfile()

  return (
    <footer className="ft">
      <div className="shell ft-grid">
        <div>
          <div className="ft-note">Let&apos;s work together</div>
          <div className="big">
            <a className="mail" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
        </div>

        <div className="ft-note">
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub · {linkLabel(contact.github)}
          </a>
          <br />
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn · {linkLabel(contact.linkedin)}
          </a>
          <br />
          <a href={contact.cvEn}>CV — English (PDF)</a> · <a href={contact.cvDe}>Lebenslauf (DE)</a>
          <br />
          {meta.location} · {meta.timezone}
          <br />
          <span className="text-[#5a5a55]">Template content · edit content/profiles</span>
          <br />
          <Link href="/">Back to top ↑</Link>
        </div>
      </div>
    </footer>
  )
}
