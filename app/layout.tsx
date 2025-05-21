import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Cursor from "@/components/cursor"
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://lollo.me'),
  title: "Lorenzo Hauradou – Freelance & Digital Partner",
  description:
    "Sviluppo web, automazioni, consulenza e soluzioni digitali su misura per startup, professionisti e aziende. Trasforma le tue idee in prodotti digitali concreti.",
  keywords: [
    "freelance",
    "sviluppo web",
    "Next.js",
    "React",
    "automazioni",
    "consulenza digitale",
    "digital partner",
    "Lorenzo Hauradou",
    "siti web",
    "startup",
    "agenzia digitale",
    "UI/UX",
    "web developer",
    "Italia",
  ],
  authors: [{ name: "Lorenzo Hauradou", url: "https://lollo.me" }],
  creator: "Lorenzo Hauradou",
  icons: {
    icon: "/lollo.ico",
    shortcut: "/lollo.ico",
    apple: "/lollo.ico",
  },
  openGraph: {
    title: "Lorenzo Hauradou – Freelance & Digital Partner",
    description:
      "Sviluppo web, automazioni, consulenza e soluzioni digitali su misura per startup, professionisti e aziende.",
    url: "https://lollo.me",
    siteName: "lollo.me",
    images: [
      {
        url: "/lollo.ico",
        width: 1200,
        height: 630,
        alt: "Lorenzo Hauradou – Freelance & Digital Partner",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Hauradou – Freelance & Digital Partner",
    description:
      "Sviluppo web, automazioni, consulenza e soluzioni digitali su misura per startup, professionisti e aziende.",
    creator: "@lollo_me",
    images: ["/lollo.ico"],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <Cursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

