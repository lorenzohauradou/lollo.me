import type React from "react"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import type { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://lollo.me'),
  title: {
    default: "Lorenzo Hauradou | Freelance Developer",
    template: "%s | Lorenzo Hauradou"
  },
  description: "Freelance developer specializzato in sviluppo web, automazioni AI e consulenza digitale. Trasformo idee in prodotti digitali concreti per startup e aziende.",
  keywords: [
    "freelance developer",
    "sviluppo web",
    "Next.js",
    "React",
    "automazioni AI",
    "consulenza digitale",
    "Lorenzo Hauradou",
    "web developer Italia",
    "startup developer",
    "digital partner",
  ],
  authors: [{ name: "Lorenzo Hauradou", url: "https://lollo.me" }],
  creator: "Lorenzo Hauradou",
  publisher: "Lorenzo Hauradou",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://lollo.me",
    languages: {
      'it-IT': 'https://lollo.me',
      'en-US': 'https://lollo.me/en',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/lollo.ico",
    shortcut: "/lollo.ico",
    apple: "/lollo.ico",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://lollo.me",
    siteName: "Lorenzo Hauradou",
    title: "Lorenzo Hauradou | Developer",
    description: "Sviluppo web, automazioni AI e consulenza digitale",
    images: [
      {
        url: "https://lollo.me/logo.webp",
        width: 512,
        height: 512,
        alt: "Lorenzo Hauradou - Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TECHLOLLO",
    creator: "@TECHLOLLO",
    title: "Lorenzo Hauradou | Freelance Developer & Digital Partner",
    description: "Freelance developer specializzato in sviluppo web moderno, automazioni AI e consulenza digitale. Trasformo idee in prodotti digitali per startup e aziende in tutta Italia.",
    images: ["https://lollo.me/logo.webp"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lorenzo Hauradou",
    "url": "https://lollo.me",
    "image": "https://lollo.me/logo.webp",
    "jobTitle": "Freelance Developer & Digital Partner",
    "description": "Freelance developer specializzato in sviluppo web, automazioni AI e consulenza digitale",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "sameAs": [
      "https://twitter.com/TECHLOLLO",
      "https://instagram.com/lorenzooradu",
      "https://linkedin.com/in/lorenzohauradou",
      "https://github.com/lorenzohauradou"
    ],
    "knowsAbout": [
      "Web Development",
      "Next.js",
      "React",
      "AI Automation",
      "Digital Consulting"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sviluppo Web e Consulenza Digitale",
        "description": "Sviluppo siti web, landing page, applicazioni web e automazioni AI"
      }
    }
  }

  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

