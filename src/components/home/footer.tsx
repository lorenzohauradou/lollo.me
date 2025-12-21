"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { label: "GitHub", href: "https://github.com/lorenzohauradou" },
    { label: "Twitter", href: "https://twitter.com/TECHLOLLO" },
    { label: "LinkedIn", href: "https://linkedin.com/in/lorenzohauradou" },
  ]

  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <Link href="/" className="text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors">
                lollo.me
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Building digital products that matter
              </p>
            </div>

            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                >
                  {social.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Lorenzo Hauradou. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & built with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
