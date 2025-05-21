"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send, Instagram, Twitter, Linkedin, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    // Here you would normally handle the form submission
    alert("Grazie per il tuo messaggio! Ti risponderò al più presto.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-20 relative industrial-bg text-white">
      <div className="noise-bg opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-none">CONTATTI</Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-heading tracking-tight"
          >
            Parliamo del tuo <span className="gradient-text">Progetto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Hai un'idea o un progetto in mente? Contattami per discuterne insieme e trasformarla in realtà.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:text-left text-center"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Contattami</h3>
            <p className="text-white/70 mb-8 lg:mx-0 mx-auto max-w-md">
              Compila il modulo o contattami direttamente via email. Sono sempre disponibile per discutere nuovi
              progetti, idee creative o opportunità di collaborazione.
            </p>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-start max-w-md w-full">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent-blue" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-white/70">lorenzooradu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start max-w-md w-full">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-accent-blue" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Social</h4>
                  <div className="space-y-2 mt-2">
                    <a
                      href="https://instagram.com/lorenzooradu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 group"
                    >
                      <Instagram className="h-5 w-5 group-hover:text-accent-pink transition-colors duration-200" />
                      <span>lorenzooradu</span>
                    </a>
                    <a
                      href="https://twitter.com/TECHLOLLO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 group"
                    >
                      <Twitter className="h-5 w-5 group-hover:text-accent-blue transition-colors duration-200" />
                      <span>TECHLOLLO</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/lorenzohauradou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 group"
                    >
                      <Linkedin className="h-5 w-5 group-hover:text-accent-linkedin transition-colors duration-200" /> 
                      <span>lorenzohauradou</span>
                    </a>
                    <a
                      href="https://github.com/lorenzohauradou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 group"
                    >
                      <Github className="h-5 w-5 group-hover:text-gray-400 transition-colors duration-200" />
                      <span>lorenzohauradou</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10 lg:mx-0 mx-auto max-w-md">
              <h4 className="text-lg font-semibold mb-4">Orari di disponibilità</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Lunedì - Venerdì</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Sabato</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Domenica</span>
                  <span>Chiuso</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Il tuo nome"
                      required
                      className="bg-white/5 border-white/10 focus:border-accent-blue focus:ring-accent-blue/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="La tua email"
                      required
                      className="bg-white/5 border-white/10 focus:border-accent-blue focus:ring-accent-blue/20 text-white"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="subject">Tipo di progetto</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 focus:ring-accent-blue/20 text-white">
                      <SelectValue placeholder="Seleziona il tipo di progetto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Sito Web</SelectItem>
                      <SelectItem value="app">Applicazione Web</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="automation">Automazione</SelectItem>
                      <SelectItem value="consulting">Consulenza</SelectItem>
                      <SelectItem value="other">Altro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget indicativo</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/10 focus:ring-accent-blue/20 text-white">
                      <SelectValue placeholder="Seleziona il budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Meno di €5.000</SelectItem>
                      <SelectItem value="medium">€5.000 - €10.000</SelectItem>
                      <SelectItem value="large">€10.000 - €20.000</SelectItem>
                      <SelectItem value="enterprise">Più di €20.000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea
                    id="message"
                    placeholder="Descrivi il tuo progetto"
                    rows={5}
                    required
                    className="bg-white/5 border-white/10 focus:border-accent-blue focus:ring-accent-blue/20 text-white"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-accent-blue hover:bg-accent-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Invia messaggio
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
