"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Mail, Send } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Label } from "@/src/components/ui/label"
import { toast } from "sonner"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Message sent!", {
          description: "I'll get back to you within 24 hours.",
        })
          ; (e.target as HTMLFormElement).reset()
      } else {
        toast.error("Something went wrong", {
          description: "Please try again or email me directly.",
        })
      }
    } catch {
      toast.error("Connection error", {
        description: "Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socials = [
    { label: "Twitter", href: "https://twitter.com/TECHLOLLO" },
    { label: "GitHub", href: "https://github.com/lorenzohauradou" },
    { label: "LinkedIn", href: "https://linkedin.com/in/lorenzohauradou" },
    { label: "Instagram", href: "https://instagram.com/lorenzooradu" },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-50/40 via-transparent to-sky-50/30 dark:from-transparent dark:to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100/30 to-rose-100/20 rounded-full blur-3xl dark:opacity-0" />
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-indigo-100/20 to-cyan-100/20 rounded-full blur-3xl dark:opacity-0" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Let's work together
            </h2>

            <p className="text-foreground/60 mb-8 leading-relaxed">
              Have a project in mind? I'm always open to discussing new
              opportunities and ideas. Let's build something great
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-foreground/40 mb-2 uppercase tracking-widest">Email</p>
                <a
                  href="mailto:lorenzooradu@gmail.com"
                  className="inline-flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors group"
                >
                  <Mail className="h-4 w-4" />
                  lorenzooradu@gmail.com
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-foreground/40 mb-3 uppercase tracking-widest">Socials</p>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-foreground hover:text-foreground/70 transition-colors group"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest text-foreground/40">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-foreground/20 focus:bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-foreground/40">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-foreground/20 focus:bg-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest text-foreground/40">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-card/50 backdrop-blur-sm border-border/50 focus:border-foreground/20 focus:bg-card resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send message
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
