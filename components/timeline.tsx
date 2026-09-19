import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Trayectoria como documento: periodo en monoespaciada a la izquierda, puesto y contexto
 * a la derecha, separados por filetes finos y con fondo claro al pasar el cursor.
 */
export default function Timeline() {
  return (
    <section className="blk" id="experience">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-num">04 — Experience</div>
          <h2 className="h2">
            Where I have worked
            <small className="h2-note">Most recent first</small>
          </h2>
        </div>

        <div>
          {portfolio.experience.map((entry) => (
            <div key={`${entry.period}-${entry.role}`} className="cv-row">
              <div className="when">{entry.period}</div>
              <div>
                <h3 className="text-[1.15rem] font-medium">{entry.role}</h3>
                <div className="cv-co">{entry.org}</div>
                <p className="cv-p">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
