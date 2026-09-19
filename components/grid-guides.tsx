/**
 * Retícula visible de 12 columnas: guiño a la Escuela Suiza y firma del diseño.
 * Va fija detrás del contenido (z-0) y desaparece por debajo de 900 px, igual que en
 * la propuesta. Se sirve como HTML estático, sin JS.
 */
export default function GridGuides() {
  return (
    <div className="gridlines" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
