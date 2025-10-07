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
    default: "Jean Bravo · Ingeniero de software",
    template: "%s · Jean Bravo",
  },
  description:
    "Desarrollador full-stack especializado en experiencias web escalables con Next.js, ASP.NET Core y PostgreSQL.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · Ingeniero de software",
    description:
      "Construyo productos digitales con foco en rendimiento, accesibilidad y experiencia de desarrolladores.",
    locale: "es_ES",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · Ingeniero de software",
    description:
      "Desarrollo plataformas web con Next.js, ASP.NET Core y PostgreSQL.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    "Desarrollador Full Stack",
    "Next.js",
    "ASP.NET Core",
    "Portafolio",
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
