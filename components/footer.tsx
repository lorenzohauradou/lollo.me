"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/TECHLOLLO" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/lorenzooradu" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/lorenzohauradou" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/lorenzohauradou" },
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
          <div className="lg:col-span-2 md:text-left text-center">
            <Link href="/" className="inline-flex items-center justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center text-2xl font-bold font-heading mb-4"
              >
                <Image
                  src="/logo.webp"
                  alt="Logo lollo.me"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <div>
                  <span className="gradient-text">lollo</span>
                  <span className="text-white">.me</span>
                </div>
              </motion.div>
            </Link>
            <p className="text-white/70 mb-6 max-w-md mx-auto md:mx-0">
              Aiuto startup, professionisti e aziende a trasformare le loro idee in
              prodotti digitali concreti.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
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

          <div className="md:text-left text-center">
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

          <div className="md:text-left text-center">
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

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white/50 text-sm mb-4 md:mb-0">© {currentYear} lollo.me. Tutti i diritti riservati. P.IVA 02463360566</p>
          <p className="text-white/50 text-sm">
            Designed & Developed by <span className="font-bold">Lorenzo Hauradou</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
