import type { Profile } from "@/content/profiles/types"

/**
 * Stack en tres columnas: cabecera monoespaciada con filete de tinta, filas
 * tecnología / nivel separadas por filetes finos y el nivel siempre en el acento.
 */
export default function Stack({ profile }: { profile: Profile }) {
  return (
    <section className="blk" id="stack">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-num">02 — Stack</div>
          <h2 className="h2">
            Tools I work with every day
            <small className="h2-note">Last reviewed · August 2026</small>
          </h2>
        </div>

        <div className="cols3">
          {profile.stack.map((group) => (
            <div key={group.title}>
              <h3 className="col-h3">{group.title}</h3>
              <ul className="col-list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.name} <span className="lvl">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
