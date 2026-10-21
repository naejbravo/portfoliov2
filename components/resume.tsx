import { ScrollReveal } from "./ui/scroll-reveal"

const experience = [
  {
    role: "Backend .NET Developer",
    company: "HumanTech Software",
    period: "May 2025 – Present",
    bullets: [
      "Built a multi-tenant HR platform from scratch with .NET 10, Blazor and Clean Architecture, now in production.",
      "Maintained and extended a workforce management platform, delivering new features on a live production system.",
      "Integrated AI-powered document classification (OCR, field extraction, auto-categorization), cutting paper-based processes by 95%.",
      "Built GDPR-compliant digital signature workflows (OTP, click, certificate) with audit trail, reducing signature turnaround by 80%.",
      "Generated structured PDF documents for end users, such as time-tracking records and legal document templates.",
      "Containerized the full development workflow with Docker, with GitHub Actions CI/CD to Linux servers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Correcto · Startup",
    period: "May 2022 – May 2023",
    bullets: [
      "Built responsive web platforms with Angular and JavaScript in an agile startup environment.",
      "GCP deployments and cross-functional teamwork using Jira.",
    ],
  },
]

const education = [
  {
    title: "Full Stack Developer Program",
    school: "Upgrade Hub · Madrid, Spain",
    period: "2021 – 2022",
    description:
      "Intensive bootcamp in web development: JavaScript, React, Node.js, REST APIs, SQL and NoSQL databases and Git, with team projects in an agile workflow.",
  },
  {
    title: "Higher Technical Diploma in Network Systems Administration (ASIR)",
    school: "IES Fuengirola N°1 · Málaga, Spain",
    period: "2018 – 2020",
    description:
      "Two-year official vocational degree: Linux and Windows Server administration, networking, databases, web servers, virtualization and IT security.",
  },
]

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2" },
  { name: "German", level: "A1, learning" },
]

function Entry({ title, subtitle, period, children }: { title: string; subtitle: string; period: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="text-base font-semibold">{title}</h4>
        <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap">{period}</span>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>
      <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{children}</div>
    </div>
  )
}

export default function ResumeSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24" id="experience">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold md:text-3xl text-center">Experience</h2>
      </ScrollReveal>
      <div className="mt-10 grid gap-6">
        {experience.map((job) => (
          <ScrollReveal key={job.role}>
            <Entry title={job.role} subtitle={job.company} period={job.period}>
              <ul className="list-disc space-y-1 pl-5">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Entry>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)]">
        <div id="education">
          <ScrollReveal>
            <h3 className="text-xl font-semibold md:text-2xl">Education</h3>
          </ScrollReveal>
          <div className="mt-6 grid gap-6">
            {education.map((item) => (
              <ScrollReveal key={item.title}>
                <Entry title={item.title} subtitle={item.school} period={item.period}>
                  <p>{item.description}</p>
                </Entry>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div id="languages">
          <ScrollReveal>
            <h3 className="text-xl font-semibold md:text-2xl">Languages</h3>
          </ScrollReveal>
          <ScrollReveal className="mt-6 rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50">
            <dl className="grid gap-3 text-sm">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between gap-4">
                  <dt className="font-semibold">{lang.name}</dt>
                  <dd className="text-neutral-600 dark:text-neutral-300">{lang.level}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">EU passport — no work visa required in Switzerland or the EU.</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
