import CardContact from "./ui/cardContact"

/**
 * Cierre de página: la sección 05 en el mismo patrón que el resto
 * (número + titular + nota monoespaciada) con el formulario de contacto.
 */
export default function CtaFinal() {
  return (
    <section className="blk" id="contact">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-num">05 — Contact</div>
          <h2 className="h2">
            Do you have a challenge in mind? Let&apos;s talk
            <small className="h2-note">Reply within 48 business hours</small>
          </h2>
        </div>

        <CardContact />
      </div>
    </section>
  )
}
