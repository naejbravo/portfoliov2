type SectionHeadingProps = {
  index: string
  title: string
  note?: string
}

/**
 * Cabecera de sección del sistema editorial: número de sección en mono + titular,
 * con un filete que cierra el bloque. Se usa en todas las secciones para que el
 * ritmo (número → titular → filete) sea idéntico de arriba a abajo.
 */
export default function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="grid gap-2 border-b border-foreground pb-6 md:grid-cols-[8rem_1fr] md:gap-8">
      <span className="mono-label pt-1 text-brand">{index}</span>
      <div>
        <h2 className="display text-[1.6rem] font-medium md:text-4xl">{title}</h2>
        {note ? <p className="mono-label mt-3 text-muted-foreground">{note}</p> : null}
      </div>
    </div>
  )
}
