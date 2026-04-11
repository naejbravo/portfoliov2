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
    default: "Jean Bravo · Software Engineer",
    template: "%s · Jean Bravo",
  },
  description:
    "Full-stack .NET developer specialized in Blazor, Razor, MVC, cloud infrastructure (GCP, Azure), Terraform, and AI-powered OCR document management.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · Software Engineer",
    description:
      "Full-stack .NET developer building scalable web applications with ASP.NET Core, Blazor, cloud infrastructure and AI-powered document processing.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · Software Engineer",
    description:
      "Full-stack .NET developer — Blazor, MVC, GCP, Azure, Terraform, AI/OCR document management.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    "Full Stack .NET Developer",
    "Blazor",
    "ASP.NET Core",
    "Terraform",
    "GCP",
    "Azure",
    "AI",
    "OCR",
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
