"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { useMobile } from "@/src/hooks/use-mobile"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "#services", label: "Servizi" },
    { href: "#about", label: "Chi sono" },
    { href: "#projects", label: "Progetti" },
    { href: "#subscription", label: "Abbonamento" },
    { href: "#contact", label: "Contatti" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/logo.webp"
                alt="Logo lollo.me"
                width={32}
                height={32}
                className="mr-2"
              />
              <div className="text-2xl font-bold font-heading">
                <span className="gradient-text">lollo</span>
                <span>.me</span>
              </div>
            </motion.div>
          </Link>

          {!isMobile ? (
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link href={link.href} className="text-foreground/80 hover:text-accent-blue transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <a
                  href="https://wa.me/3394464650"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#2563eb] hover:bg-[#2563eb]/90">Parliamo</Button>
                </a>
              </motion.div>
            </motion.nav>
          ) : (
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-md shadow-md"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-foreground/80 hover:text-accent-blue transition-colors text-lg py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/3394464650"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <Button className="w-full bg-[#2563eb] hover:bg-[#2563eb]/90">
                    Parliamo
                  </Button>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
