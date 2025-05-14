"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/lollo" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/lollo" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/lollo" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/lollo" },
  ]

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Servizi", href: "#services" },
    { label: "Chi sono", href: "#about" },
    { label: "Progetti", href: "#projects" },
    { label: "Abbonamento", href: "#subscription" },
    { label: "Contatti", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="industrial-bg text-white py-12 relative">
      <div className="noise-bg opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold font-heading mb-4"
              >
                <span className="gradient-text">lollo</span>
                <span className="text-white">.me</span>
              </motion.div>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Aiuto startup, professionisti e aziende a trasformare le loro idee in
              prodotti digitali concreti.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-blue hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Link Rapidi</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Informazioni</h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© {currentYear} lollo.me. Tutti i diritti riservati.</p>
          <p className="text-white/50 text-sm">
            Designed & Developed with <span className="text-accent-blue">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
