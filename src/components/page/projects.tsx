"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const projects = [
    {
      title: "Snap Screen",
      description: "Tool per creare demo di prodotti SaaS",
      image: "/snapscreen.png",
      tags: ["SaaS", "Next.js", "Remotion", "Python", "FastAPI"],
      link: "https://snapscreen.app",
      github: "https://github.com/lorenzohauradou",
    },
    {
      title: "Vibe Scaling",
      description: "Linkedin AI Agent to make you show up everyday",
      image: "/vibescaling_landing.png",
      tags: ["SaaS", "Next.js", "Shadcn", "Python", "FastAPI"],
      link: "https://vibescaling.app",
      github: "https://github.com/lorenzohauradou",
      status: "Running",
      statusEmoji: "🚴",
    },
    {
      title: "Appuntoai",
      description: "Software as a Service per estrarre solo i punti cruciali da un video/audio lezione o meeting",
      image: "/appuntoai.webp",
      tags: ["SaaS", "Next.js", "Stripe", "Shadcn", "Python"],
      link: "https://appuntoai.com",
      github: "https://github.com/lorenzohauradou/appuntoai-dashboard",
      status: "Running",
      statusEmoji: "🚴",
    },
    {
      title: "Vittori Consulting",
      description: "Sito web per marketing consulting",
      image: "/vittori.png",
      tags: ["Next.js", "Tailwind"],
      link: "https://vittoriconsulting.it",
      github: "https://github.com/lorenzohauradou/vittoriconsulting",
      status: "Shipped",
      statusEmoji: "🚀",
    },
    {
      title: "Past Reels",
      description: "Create Cinematic historical reels for social media",
      image: "/pastreelslanding.png",
      tags: ["SaaS", "Next.js", "Shadcn", "Python", "FastAPI"],
      link: "https://pastreels.com",
      github: "https://github.com/lorenzohauradou",
      status: "Running",
      statusEmoji: "🟢",
    },
    {
      title: "FAST ADS AI",
      description: "Tool per creare annunci pubblicitari per Social Media",
      image: "/ADSMAKER.png",
      tags: ["SaaS", "Next.js", "Shadcn", "Python", "FastAPI"],
      link: "https://fastadsai.com",
      github: "https://github.com/lorenzohauradou/appuntoai-dashboard",
      status: "Paused",
      statusEmoji: "🚧",
    },
    {
      title: "OsFlumen",
      description: "Sito web vetrina per azienda di olio extravergine d'oliva",
      image: "/OsFlumen1.webp",
      tags: ["React", "Tailwind"],
      link: "https://osflumen.com",
      github: "https://github.com/lorenzohauradou/osflumen",
      status: "Shipped",
      statusEmoji: "🚀",
    },
    {
      title: "Ali2bay",
      description: "Piattaforma per automatizzare il processo di vendita e pubblicazione prodotti su eBay",
      image: "/ali2bay.webp",
      tags: ["Next.js", "API", "Bot", "Python", "Flask"],
      link: "https://ali2bay.com",
      github: "https://github.com/lorenzohauradou/ali2bay",
      status: "Dead",
      statusEmoji: "💀",
    },
    {
      title: "MagicBoxRoma",
      description: "Sito web per azienda di imballaggio e spedizione",
      image: "/magicboxroma.webp",
      tags: ["Next.js", "Tailwind", "Shadcn", "Resend"],
      link: "https://magicboxroma.it",
      github: "https://github.com/lorenzohauradou/magicboxroma",
      status: "Shipped",
      statusEmoji: "🚀",
    },
  ]

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200])

  const transformValues = [y1, y2, y3, y4]

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            PROGETTI
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-heading tracking-tight"
          >
            I Miei <span className="gradient-text">Progetti</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Soluzioni digitali innovative che ho sviluppato per risolvere problemi reali e generare valore concreto.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
              <motion.div
                style={{ y: transformValues[index % 4] }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="project-card h-full border-0 shadow-none overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10" />
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-white/90 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.status && (
                        <Badge
                          variant={project.status === "Dead" ? "destructive" : project.status === "In Sviluppo" ? "outline" : "secondary"}
                          className="ml-2 text-xs whitespace-nowrap"
                        >
                          {project.statusEmoji && <span className="mr-1">{project.statusEmoji}</span>}
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-base mt-1">{project.description}</CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.github, "_blank", "noopener,noreferrer")
                        }}
                      >
                        <Github className="h-4 w-4" />
                        <span>Codice</span>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Button size="lg" variant="outline" className="group">
            <Github className="h-4 w-4" />
            <a href="https://github.com/lorenzohauradou" target="_blank" rel="noopener noreferrer">Visualizza tutti i progetti</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
