import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bravojc.com"),
  title: {
    default: "Jean Bravo · Backend & AI Engineer — .NET, Cloud, Applied AI · Zürich",
    template: "%s · Jean Bravo",
  },
  description:
    "Backend engineer building production systems — REST APIs, multi-tenant SaaS backends and AI-powered pipelines. .NET, PostgreSQL, Docker, GCP/Azure, LLM integrations, RAG and agent infrastructure. Relocating to Zürich, EU passport.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · Backend & AI Engineer — Zürich",
    description:
      "Backend engineer building production systems — REST APIs, cloud infrastructure and applied AI (LLMs, RAG, agents). Relocating to Zürich, EU passport.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · Backend & AI Engineer",
    description:
      "Backend engineer — .NET, REST APIs, PostgreSQL, Docker, cloud and applied AI (LLMs, RAG, agents). Relocating to Zürich.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    "Backend Engineer",
    "AI Engineer",
    ".NET Developer",
    "ASP.NET Core",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "GCP",
    "Azure",
    "LLM Integrations",
    "RAG",
    "Vector Databases",
    "AI Agents",
    "Multi-tenant",
    "B2B SaaS",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jean Bravo",
              "url": "https://bravojc.com",
              "jobTitle": "Backend & AI Engineer",
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
        <Header />
        {children}
      </body>
    </html>
  )
}
