"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Badge } from "@/src/components/ui/badge"
const technologies = [
  { name: "Next.js", logo: "/placeholder.svg?height=40&width=120" },
  { name: "React", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Supabase", logo: "/placeholder.svg?height=40&width=120" },
  { name: "HTML5", logo: "/placeholder.svg?height=40&width=120" },
  { name: "CSS3", logo: "/placeholder.svg?height=40&width=120" },
  { name: "JavaScript", logo: "/javascript.webp" },
  { name: "TypeScript", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Python", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Stripe", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Resend", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Tailwind CSS", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Framer Motion", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Vercel", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Node.js", logo: "/placeholder.svg?height=40&width=120" },
  { name: "PostgreSQL", logo: "/placeholder.svg?height=40&width=120" },
]

export default function LogoMarquee() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Duplicate the technologies array to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <section className="py-12 bg-[#f5f5f5] overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="noise-bg"></div>

      <div ref={ref} className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 text-center"
        >
          <Badge className="mb-4" variant="outline">TECNOLOGIE</Badge>
        </motion.div>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex space-x-12 py-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center group">
                <div className="bg-white px-6 py-3 rounded-lg border border-border subtle-shadow flex items-center justify-center min-w-[120px] h-[60px] transition-all duration-300 group-hover:border-accent-blue">
                  {/* Replace with actual logo images when available */}
                  <span className="font-medium text-foreground/80 group-hover:text-accent-blue transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
