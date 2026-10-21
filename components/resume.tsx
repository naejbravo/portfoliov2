import SectionRow from "./section"

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

const skills = [
  { title: "Backend", items: "C#, .NET 8–10, ASP.NET Core, REST APIs, Entity Framework Core, Blazor, Clean Architecture, unit testing (xUnit)" },
  { title: "Databases", items: "MySQL, PostgreSQL" },
  { title: "DevOps & Cloud", items: "Git, GitHub Actions CI/CD, Docker, Linux, Oracle Cloud (OCI), Azure, GCP" },
  { title: "AI & Documents", items: "LLM integrations, OCR document classification, PDF generation (QuestPDF), digital signatures, GDPR" },
  { title: "Ways of working", items: "Scrum, code reviews" },
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

const cvFiles = [
  { href: "/Jean-Bravo-CV-EN.pdf", label: "English (PDF)" },
  { href: "/Jean-Bravo-CV-DE.pdf", label: "Deutsch (PDF)" },
  { href: "/Jean-Bravo-CV-ES.pdf", label: "Español (PDF)" },
]

function EntryHeader({ title, period, size = "lg" }: { title: string; period: string; size?: "lg" | "md" }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h3 className={size === "lg" ? "text-xl font-semibold md:text-2xl" : "text-lg font-semibold"}>{title}</h3>
      <span className="whitespace-nowrap text-neutral-600 dark:text-neutral-400">{period}</span>
    </div>
  )
}

function emphasizeMetrics(text: string) {
  return text.split(/(\d+%)/).map((part, i) => (/^\d+%$/.test(part) ? <b key={i}>{part}</b> : part))
}

export function ExperienceSection() {
  return (
    <SectionRow id="experience" label="Experience">
      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <article key={job.role} className="flex flex-col gap-2">
            <EntryHeader title={job.role} period={job.period} />
            <p className="text-neutral-600 dark:text-neutral-400">{job.company}</p>
            <ul className="mt-1 list-disc space-y-1.5 pl-5 leading-relaxed text-neutral-800 dark:text-neutral-200">
              {job.bullets.map((b) => (
                <li key={b}>{emphasizeMetrics(b)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionRow>
  )
}

export function SkillsSection() {
  return (
    <SectionRow id="skills" label="Skills">
      <dl className="grid gap-x-10 gap-y-7 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title}>
            <dt className="font-semibold">{group.title}</dt>
            <dd className="mt-1 leading-relaxed text-neutral-700 dark:text-neutral-300">{group.items}</dd>
          </div>
        ))}
      </dl>
    </SectionRow>
  )
}

export function EducationSection() {
  return (
    <SectionRow id="education" label="Education & languages">
      <div className="flex flex-col gap-8">
        {education.map((item) => (
          <article key={item.title} className="flex flex-col gap-1.5">
            <EntryHeader title={item.title} period={item.period} size="md" />
            <p className="text-neutral-600 dark:text-neutral-400">{item.school}</p>
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">{item.description}</p>
          </article>
        ))}
        <p>
          <b className="font-semibold">Languages:</b> Spanish (native) · English (B2) · German (A1, learning)
        </p>
      </div>
    </SectionRow>
  )
}

export function CvSection() {
  return (
    <SectionRow id="cv" label="CV">
      <div className="flex flex-wrap gap-3">
        {cvFiles.map((file) => (
          <a
            key={file.href}
            href={file.href}
            className="inline-flex min-h-11 items-center rounded-sm border border-neutral-900 px-5 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-100 dark:hover:bg-neutral-900"
          >
            {file.label}
          </a>
        ))}
      </div>
    </SectionRow>
  )
}
