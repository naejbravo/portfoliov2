import type { Metadata } from "next"
import { Inter_Tight, JetBrains_Mono } from "next/font/google"
import GridGuides from "@/components/grid-guides"
import { getProfile } from "@/content/profiles"
import { siteUrl } from "@/lib/site"
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

const profile = getProfile()

/**
 * Metadatos de PLANTILLA: se construyen desde el perfil activo, así que basta con editar
 * content/profiles para que título, descripción y datos estructurados sigan al contenido.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.brand.name} · ${profile.positioning}`,
    template: `%s · ${profile.brand.name}`,
  },
  description:
    "Full-stack .NET engineer building and running production systems end-to-end: ASP.NET Core and Blazor solutions, Docker containers published to a registry, cloud infrastructure with Terraform and CI/CD, plus applied AI (LLM integrations, RAG).",
  openGraph: {
    type: "website",
    url: "/",
    title: `${profile.brand.name} · ${profile.positioning}`,
    description:
      ".NET solutions, Docker container delivery through a registry, cloud infrastructure and applied AI. Template content.",
    locale: "en_US",
    siteName: profile.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.brand.name} · ${profile.brand.role}`,
    description:
      "Full-stack .NET engineer — .NET and Blazor solutions, Docker and container registry, cloud infrastructure, applied AI. Template content.",
  },
  keywords: [
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
    "Digital Signatures",
    "Document Automation",
  ],
  authors: [{ name: profile.brand.name }],
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
              "name": profile.brand.name,
              "url": siteUrl,
              "jobTitle": profile.brand.role,
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
              "knowsLanguage": ["Spanish", "English"],
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "addressLocality": "Madrid",
                  "addressCountry": "ES"
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
