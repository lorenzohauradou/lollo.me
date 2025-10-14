"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { ArrowRight, Code } from "lucide-react"
import { Badge } from "@/src/components/ui/badge"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f5f5]">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="noise-bg"></div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              <Code className="h-4 w-4 mr-2 text-accent-blue" />
              Freelancer
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight text-balance tracking-tight"
          >
            Trasformo le tue <span className="gradient-text">idee</span> in{" "}
            <span className="italic font-serif">prodotti digitali</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Aiuto startup, professionisti e aziende a creare siti web, landing page, automazioni e strumenti
            personalizzati con un approccio pratico e orientato al business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/3394464650"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group bg-[#2563eb] hover:bg-[#2563eb]/90 transition-colors">
                Iniziamo a collaborare
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                Scopri i miei progetti
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y, opacity }} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="feature-card p-6 subtle-shadow card-hover"
          >
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sviluppo Web</h3>
            <p className="text-muted-foreground">
              Siti web, landing page e applicazioni web personalizzate con tecnologie moderne.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="feature-card p-6 subtle-shadow card-hover"
          >
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-accent-blue"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Automazioni</h3>
            <p className="text-muted-foreground">
              Strumenti e flussi di lavoro automatizzati per ottimizzare i processi aziendali.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="feature-card p-6 subtle-shadow card-hover"
          >
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-accent-blue"
              >
                <path d="M12 2v5" />
                <path d="M6 7h12" />
                <path d="m9 20 3-15 3 15" />
                <path d="M6 12h12" />
                <path d="M6 17h12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Consulenza</h3>
            <p className="text-muted-foreground">
              Supporto strategico per trasformare le tue idee in soluzioni digitali concrete.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent z-10" />
    </section>
  )
}
