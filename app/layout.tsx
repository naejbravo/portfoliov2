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
    default: "Jean Bravo · B2B SaaS .NET Developer — Zürich 🇨🇭",
    template: "%s · Jean Bravo",
  },
  description:
    "Full-stack .NET developer relocating to Zürich. EU passport, no visa needed. Specialized in B2B SaaS, multi-tenant architectures, Blazor, ASP.NET Core, PostgreSQL, Azure/GCP. Open to roles in Switzerland.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · B2B SaaS .NET Developer — Zürich",
    description:
      "Full-stack .NET developer building B2B SaaS platforms. EU passport holder, relocating to Zürich in 2026.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · B2B SaaS .NET Developer",
    description:
      "Full-stack .NET developer — B2B SaaS, Blazor, PostgreSQL, Azure. Relocating to Zürich.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    ".NET Developer",
    "Full-stack Developer",
    "B2B SaaS",
    "Blazor",
    "ASP.NET Core",
    "Azure",
    "PostgreSQL",
    "Zürich",
    "Switzerland",
    "EU passport",
    ".NET Developer Switzerland",
    "Multi-tenant",
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
              "jobTitle": "Full-stack .NET Developer",
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
