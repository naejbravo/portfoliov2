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
  metadataBase: new URL("https://jeanbravo.dev"),
  title: {
    default: "Jean Bravo · B2B SaaS .NET Developer",
    template: "%s · Jean Bravo",
  },
  description:
    "Full-stack .NET developer specialized in B2B SaaS platforms, document automation, digital signatures and multi-tenant systems. ASP.NET Core, Blazor, PostgreSQL, cloud infrastructure.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · B2B SaaS .NET Developer",
    description:
      "Full-stack .NET developer building B2B SaaS platforms for document workflows, digital signatures and operations automation.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · B2B SaaS .NET Developer",
    description:
      "Full-stack .NET developer — B2B SaaS, document automation, Blazor, PostgreSQL, GCP.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    ".NET Developer",
    "Full-stack Developer",
    "B2B SaaS",
    "Blazor",
    "ASP.NET Core",
    "Document Automation",
    "Digital Signatures",
    "Multi-tenant",
    "PostgreSQL",
    "GCP",
    "Portfolio",
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
        <Header />
        {children}
      </body>
    </html>
  )
}
