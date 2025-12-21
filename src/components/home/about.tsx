"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    "Next.js / React",
    "Python",
    "AI & Automation",
    "UI/UX Design",
    "API Development",
    "SEO",
  ]

  return (
    <section id="about" className="py-24 bg-muted/40 dark:bg-muted/20 section-fade-top relative" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-medium tracking-tight">About</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="italic border-l-2 border-border pl-4">
                I was born in Guadeloupe '99 during the wet season 🌴
              </p>

              <p>
                I spend most of my time in front of a computer — building things,
                solving problems, and learning what's new.
              </p>

              <p>
                I help startups, professionals, and companies turn their ideas into
                real digital products. I only work on projects that solve real
                problems and have high potential for impact
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-medium text-muted-foreground mb-6 uppercase tracking-widest">
              What I work with
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 group-hover:bg-foreground transition-colors" />
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-medium tracking-tight">5+</span>
                <span className="text-muted-foreground">years of experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
