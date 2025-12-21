"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/src/components/ui/button"
import { useMobile } from "@/src/hooks/use-mobile"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        } bg-background/80 backdrop-blur-lg`}
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="max-w-5xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors">
            lorenzo.hauradou
          </Link>

          {!isMobile ? (
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {link.label}
                </Link>
              ))}

              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-muted/80 transition-all duration-200 active:scale-95"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}
            </nav>
          ) : (
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-muted/80 transition-all duration-200 active:scale-95"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
              )}
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          )}
        </div>
      </div>

      {isOpen && isMobile && (
        <div className="bg-background/98 backdrop-blur-lg relative">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
