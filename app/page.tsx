import Footer from "@/components/footer"
import Hero from "@/components/hero"
import { CvSection, EducationSection, ExperienceSection, SkillsSection } from "@/components/resume"
import SectionRow from "@/components/section"
import CardContact from "@/components/ui/cardContact"

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <CvSection />
      <SectionRow id="contact" label="Contact" last>
        <CardContact />
      </SectionRow>
      <Footer />
    </main>
  )
}
