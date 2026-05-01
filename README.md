# jeanbravo.dev — Portfolio

Full-stack .NET developer portfolio built with Next.js, TypeScript and Tailwind CSS.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4, tailwind-merge, class-variance-authority
- **Components:** Radix UI primitives, lucide-react icons
- **Forms:** react-hook-form, zod, @hookform/resolvers
- **Email:** Resend (contact form)
- **Content:** next-mdx-remote, gray-matter, remark-gfm
- **Carousel:** embla-carousel-react, keen-slider
- **Deployment:** Vercel (ISR with revalidation)

## Project structure

```
├── app/
│   ├── api/contact/        # Contact form API route (Resend)
│   ├── work/
│   │   ├── page.tsx         # Projects listing
│   │   └── [slug]/          # Case study pages (ISR)
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Home page
│   └── sitemap.ts           # Auto-generated sitemap
├── components/
│   ├── ui/                  # Shared UI primitives
│   ├── hero.tsx             # Hero section
│   ├── projects.tsx         # Featured projects slider
│   ├── project-card.tsx     # Project card component
│   ├── ctaFinal.tsx         # Contact section
│   └── ...
├── content/projects/
│   └── details.json         # Project data (case studies)
├── lib/
│   ├── projects.ts          # Project data transformations
│   ├── mdx.ts               # MDX processing
│   ├── isr.ts               # ISR configuration
│   └── utils.ts             # cn() utility
├── cv/                      # CVs in multiple languages (Markdown)
└── public/                  # Static assets
```

## Development

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build (Turbopack)
npm run lint     # ESLint
```

## Deployment

Deployed on Vercel with ISR. The contact form uses Resend for email delivery. Project pages are statically generated at build time and revalidated on demand.

## Author

Jean Bravo — [jeanbravo.dev](https://jeanbravo.dev) — [github.com/naejbravo](https://github.com/naejbravo)
