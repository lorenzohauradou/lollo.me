"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    "Sviluppo Web (Next.js, React)",
    "Automazioni e Integrazioni (API, Webhooks)",
    "UI/UX Design",
    "Consulenza Strategica",
    "Ottimizzazione Performance e SEO",
    "Soluzioni Personalizzate",
    "Sviluppo Software"
  ]

  return (
    <section id="about" className="py-20 relative bg-[#f5f5f5]">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="noise-bg" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            CHI SONO
          </Badge>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 md:mb-28 scale-50">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 blur-3xl opacity-50" />
              <Image
                src="/emoji1.png"
                alt="Descrizione dell'emoji"
                fill
                className="object-contain rounded-2xl"
                priority
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white border border-border rounded-lg p-4 shadow-md"
              >
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Anni di esperienza</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading tracking-tight">
              Chi <span className="gradient-text">Sono</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sono un freelancer con una forte passione per lo sviluppo web e software. Aiuto
              startup, professionisti e aziende a trasformare le loro idee in prodotti digitali concreti.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Il mio approccio è pratico e orientato al business — lavoro solo su soluzioni che generano impatto reale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-accent-blue mr-2" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="group bg-accent-blue hover:bg-accent-blue/90">
              Scopri di più
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
