import Image from "next/image"
import Link from "next/link"

import type { Profile } from "@/content/profiles/types"

/** Etiqueta corta para un enlace: quita el protocolo y el www. */
export function linkLabel(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
}

/**
 * Hero del sistema editorial: declaración tipográfica a gran escala, retícula de tres
 * columnas bajo un filete fino y la foto reducida a un apunte en la columna de metadatos.
 * Todo el contenido llega por props: el perfil activo decide qué se cuenta.
 */
export default function Hero({ profile }: { profile: Profile }) {
  const { contact, meta, photo, statement } = profile

  return (
    <div className="hero-blk" id="profile">
      <div className="shell">
        <div className="kicker">
          {profile.availability} · {profile.availabilityNote}
        </div>

        <h1 className="h1 mt-10">
          {statement.lead} <span className="thin">{statement.light}</span>{" "}
          <span className="mark">{statement.marked}</span>.
        </h1>

        <div className="hero-foot">
          <div>
            <p className="lead">{profile.intro}</p>

            <div className="stat-strip">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  {stat.label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={260}
              height={320}
              priority
              unoptimized
              className="h-24 w-auto border border-rule object-contain"
            />
            <dl className="kv mt-6">
              <dt>Location</dt>
              <dd>{meta.location}</dd>
              <dt>Modality</dt>
              <dd>{meta.modality}</dd>
              <dt>Languages</dt>
              <dd>{meta.languages}</dd>
            </dl>
          </div>

          <div>
            <Link href="/work" className="btn">
              View projects
            </Link>
            <div className="h-[.6rem]" />
            <a href={contact.cvEn} className="btn btn-ghost">
              Download CV
            </a>
            <dl className="kv mt-7">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
              <dt>GitHub</dt>
              <dd>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  {linkLabel(contact.github)}
                </a>
              </dd>
              <dt>LinkedIn</dt>
              <dd>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  {linkLabel(contact.linkedin)}
                </a>
              </dd>
              <dt>Lebenslauf</dt>
              <dd>
                <a href={contact.cvDe}>German (PDF)</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
