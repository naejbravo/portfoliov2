import type { Metadata } from "next"
import { Inter_Tight, JetBrains_Mono } from "next/font/google"
import GridGuides from "@/components/grid-guides"
import { getProfile } from "@/content/profiles"
import Header from "@/components/header"
import "./globals.css"

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bravojc.com"),
  title: {
    default: `${getProfile().brand.name} · ${getProfile().positioning} · Zürich`,
    template: "%s · Jean Bravo",
  },
  description:
    "Full-stack .NET engineer building and running production systems end-to-end: ASP.NET Core and Blazor solutions, Docker containers published to GHCR, cloud infrastructure on GCP, Azure and OCI with Terraform and CI/CD, plus applied AI (LLM integrations, RAG). Relocating to Zürich, EU passport.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · Full-stack .NET Engineer — Cloud & Containers",
    description:
      ".NET solutions, Docker and GHCR container delivery, cloud infrastructure (GCP, Azure, OCI) and applied AI. Relocating to Zürich, EU passport.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · Full-stack .NET Engineer",
    description:
      "Full-stack .NET engineer — .NET and Blazor solutions, Docker and GHCR, cloud infrastructure (GCP, Azure, OCI), applied AI. Relocating to Zürich.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    "Full-stack .NET Developer",
    ".NET Developer",
    "ASP.NET Core",
    "C#",
    "Blazor",
    "Docker",
    "Container Registry",
    "GitHub Container Registry",
    "GHCR",
    "Cloud Engineering",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "DevOps",
    "Azure",
    "GCP",
    "Oracle Cloud",
    "PostgreSQL",
    "SQL Server",
    "Multi-tenant",
    "B2B SaaS",
    "Applied AI",
    "LLM Integrations",
    "RAG",
    "Zürich",
    "Switzerland",
    "EU passport",
    ".NET Developer Switzerland",
    "Digital Signatures",
    "Document Automation",
  ],
  authors: [{ name: "Jean Bravo" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jean Bravo",
              "url": "https://bravojc.com",
              "jobTitle": "Full-stack .NET Engineer",
              "knowsAbout": [
                "C#",
                ".NET",
                "ASP.NET Core",
                "Blazor",
                "Docker",
                "Container Registry",
                "Cloud Engineering",
                "Terraform",
                "CI/CD",
                "Full-stack development",
                "Applied AI"
              ],
              "knowsLanguage": ["Spanish", "English", "German"],
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "addressLocality": "Zürich",
                  "addressCountry": "CH"
                }
              }
            })
          }}
        />
        <GridGuides />
        <Header />
        {children}
      </body>
    </html>
  )
}
