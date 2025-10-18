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
    "Full-stack developer specialized in scalable web experiences with Next.js, ASP.NET Core and PostgreSQL.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Jean Bravo · Software Engineer",
    description:
      "I build digital products with focus on performance, accessibility and developer experience.",
    locale: "en_US",
    siteName: "Jean Bravo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Bravo · Software Engineer",
    description:
      "I develop web platforms with Next.js, ASP.NET Core and PostgreSQL.",
    creator: "@jeanbravo",
  },
  keywords: [
    "Jean Bravo",
    "Full Stack Developer",
    "Next.js",
    "ASP.NET Core",
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
