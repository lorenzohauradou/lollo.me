import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import type { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://lollo.me'),
  title: {
    default: "Lorenzo Hauradou | Developer & Founder",
    template: "%s | Lorenzo Hauradou"
  },
  description: "Developer building digital products. Specializing in web development, AI automation, and turning ideas into reality.",
  keywords: [
    "developer",
    "founder",
    "web development",
    "Next.js",
    "React",
    "AI automation",
    "digital products",
    "Lorenzo Hauradou",
    "startup",
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
    locale: "en_US",
    url: "https://lollo.me",
    siteName: "Lorenzo Hauradou",
    title: "Lorenzo Hauradou | Developer & Founder",
    description: "Building digital products that matter.",
    images: [
      {
        url: "https://lollo.me/logo.webp",
        width: 512,
        height: 512,
        alt: "Lorenzo Hauradou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TECHLOLLO",
    creator: "@TECHLOLLO",
    title: "Lorenzo Hauradou | Developer & Founder",
    description: "Building digital products that matter.",
    images: ["https://lollo.me/logo.webp"],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

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
    "jobTitle": "Developer & Founder",
    "description": "Developer building digital products",
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
      "Python"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
