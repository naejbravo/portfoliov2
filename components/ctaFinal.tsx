import CardContact from "./ui/cardContact";

export default function CtaFinal() {
    return (
      <section className="mx-auto max-w-6xl px-4 pb-24" id="contact">

        {/* <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-10 bg-neutral-50/60 dark:bg-neutral-900"> */}
          {/* <h3 className="text-xl md:text-2xl font-semibold">Do you have a challenge? Then let&apos;s talk</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-prose">Available to collaborate on frontend and full-stack projects, create MVPs, and optimize performance/UX.</p>
          <div className="mt-5">
            <a href="/contact" className="inline-flex items-center rounded-2xl px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">Contact with me here!</a>
          </div> */}
              <CardContact />
        {/* </div> */}
      </section>
  
    )
}