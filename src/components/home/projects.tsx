"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Appuntoai",
      description: "Turn hours of audio/video lectures into transcripts, mind maps, quizzes and AI oral interview",
      media: { type: "image" as const, src: "/appuntoai.webp" },
      tags: ["SaaS", "Next.js", "Python", "Live Kit", "Groq"],
      link: "https://appuntoai.com",
      status: "Running",
      statusEmoji: "🚴",
    },
    {
      title: "Swipe Carousel",
      description: "Transform competitor carousels into your unique brand style using AI",
      media: { type: "video" as const, src: "/swipe.mov" },
      tags: ["SaaS", "Next.js", "Python", "AI"],
      link: "https://swipecarousel.com",
      status: "Running",
      statusEmoji: "🚴",
    },
    {
      title: "Vittori Consulting",
      description: "Marketing agency website with modern design and smooth animations",
      media: { type: "image" as const, src: "/vittori.webp" },
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://vittoriconsulting.it",
      github: "https://github.com/lorenzohauradou/vittoriconsulting",
      status: "Shipped",
      statusEmoji: "🚀",
    },
    {
      title: "Waibe",
      description: "Transform your selfies into time-traveling trips through history",
      media: { type: "image" as const, src: "/waibe1.webp" },
      tags: ["Next.js", "Python", "AI"],
      link: "https://waibe.app",
      status: "Free",
    },
    {
      title: "OsFlumen",
      description: "Website for olive oil from Italy",
      media: { type: "image" as const, src: "/OsFlumen1.webp" },
      tags: ["React", "Tailwind"],
      link: "https://osflumen.com",
      github: "https://github.com/lorenzohauradou/osflumen",
      status: "Shipped",
      statusEmoji: "🚀",
    },
    {
      title: "MagicBox Roma",
      description: "Packaging and shipping company website with contact form integration",
      media: { type: "image" as const, src: "/magicboxroma.webp" },
      tags: ["Next.js", "Tailwind", "Resend"],
      link: "https://magicboxroma.it",
      github: "https://github.com/lorenzohauradou/magicboxroma",
      status: "Shipped",
      statusEmoji: "🚀",
    },
  ]

  return (
    <section id="projects" className="py-24 section-fade-top relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-6 mb-10"
        >
          <h2 className="text-2xl font-medium tracking-tight">Some Projects</h2>
        </motion.div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-16 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <article className="project-card bg-card border border-border rounded-xl overflow-hidden h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      {project.media.type === "video" ? (
                        <video
                          src={project.media.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={project.media.src}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-medium group-hover:text-muted-foreground transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground bg-muted/80 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs text-muted-foreground">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.github && (
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                window.open(project.github, "_blank")
                              }}
                              className="p-1.5 rounded-full hover:bg-muted transition-colors"
                              aria-label="View source code"
                            >
                              <Github className="h-4 w-4 text-muted-foreground" />
                            </button>
                          )}

                          <span className={`text-xs font-medium px-2 py-0.5 rounded-md flex items-center gap-1 ${project.status === "Running"
                            ? "bg-green-500/10 text-green-700 dark:text-green-400"
                            : project.status === "Free"
                              ? "bg-blue-500/10 text-blue-700 dark:text-blue-400"
                              : "bg-muted text-muted-foreground"
                            }`}>
                            {project.statusEmoji && <span>{project.statusEmoji}</span>}
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/lorenzohauradou"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="h-4 w-4" />
            View more on GitHub
            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
