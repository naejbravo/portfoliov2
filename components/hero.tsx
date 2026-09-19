import Image from "next/image"
import Link from "next/link"

import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Hero del sistema editorial: declaración tipográfica a gran escala, retícula de tres
 * columnas bajo un filete fino y la foto reducida a un apunte en la columna de metadatos
 * (única adición respecto a la propuesta, que no llevaba retrato).
 */
export default function Hero() {
  const { contact, meta, photo, statement } = portfolio

  return (
    <div className="hero-blk" id="profile">
      <div className="shell">
        <div className="kicker">
          {portfolio.availability} · {portfolio.availabilityNote}
        </div>

        <h1 className="h1 mt-10">
          {statement.lead} <span className="thin">{statement.light}</span>{" "}
          <span className="mark">{statement.marked}</span>.
        </h1>

        <div className="hero-foot">
          <div>
            <p className="lead">{portfolio.intro}</p>

            <div className="stat-strip">
              {portfolio.stats.map((stat) => (
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
                  github.com/naejbravo
                </a>
              </dd>
              <dt>LinkedIn</dt>
              <dd>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jean-bravo
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
