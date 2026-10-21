import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bravojc.com"),
  title: {
    default: "Jean Bravo · Backend .NET & AI Engineer",
    template: "%s · Jean Bravo",
  },
  description:
    "Backend .NET engineer building web applications with .NET 8–10: REST APIs, MySQL and PostgreSQL, GitHub Actions CI/CD, Linux, Oracle Cloud and Azure, and AI integrated into production apps.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · Backend .NET & AI Engineer",
    description:
      "Backend .NET engineer — REST APIs, CI/CD, Linux and cloud, with AI integrated into production apps.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · Backend .NET & AI Engineer",
    description:
      "Backend .NET engineer — REST APIs, MySQL, PostgreSQL, Docker, CI/CD, cloud and applied AI.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    "Backend Engineer",
    "AI Engineer",
    ".NET Developer",
    "ASP.NET Core",
    "REST APIs",
    "C#",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Oracle Cloud",
    "Azure",
    "LLM Integrations",
    "Multi-tenant",
    "Zürich",
    "Málaga",
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
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jean Bravo",
              "url": "https://bravojc.com",
              "jobTitle": "Backend .NET & AI Engineer",
              "knowsLanguage": ["Spanish", "English", "German"],
              "sameAs": [
                "https://linkedin.com/in/jean-bravo",
                "https://github.com/naejbravo"
              ]
            })
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  )
}
