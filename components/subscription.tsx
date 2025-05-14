"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Smile } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Subscription() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partnerFeatures = [
    "1 richiesta attiva alla volta",
    "Consegna in 48 ore",
    "Brand illimitati",
    "Fino a 2 utenti",
    "Sviluppo web continuo",
    "Ottimizzazioni e automazioni",
    "Consulenza strategica",
    "1 call/mese",
    "Priorità normale",
  ]

  const agencyFeatures = [
    "2+ richieste attive alla volta",
    "Consegna in 24–48h",
    "Priorità alta",
    "Call illimitate (o 1/settimana)",
    "Integrazione con marketing team/collaboratore",
    "Slack o canale privato per comunicazioni dirette",
    "Sviluppo + consulenza marketing su funnel, email, CRO, etc.",
    "Supporto personalizzato su lancio campagne / tool no-code (Webflow, Zapier, MailerLite)",
    "Tutto ciò che è incluso in Partner Digitale",
  ]

  return (
    <section id="subscription" className="py-20 relative bg-[#f5f5f5]">
      <div className="absolute inset-0 grid-pattern opacity-70"></div>
      <div className="noise-bg"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            PRICING
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-heading tracking-tight"
          >
            Un abbonamento, <span className="italic font-serif">infinite possibilità</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Due modelli di collaborazione mensile: scegli tra supporto tecnico/strategico continuo o una vera e propria digital agency embedded nel tuo team.
          </motion.p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partner Digitale */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border border-border p-2 subtle-shadow"
            >
              <Card className="border-0 shadow-none h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Partner Digitale</CardTitle>
                      <CardDescription className="mt-1.5">Supporto tecnico e strategico continuo</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      BASE
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold">
                    €1.500<span className="text-lg font-normal text-muted-foreground">/mese</span>
                  </div>
                  <div className="space-y-2">
                    {partnerFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full group bg-accent-blue hover:bg-accent-blue/90">
                    Inizia ora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Digital Agency as a Service */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl border border-border p-2 subtle-shadow"
            >
              <Card className="border-0 shadow-none h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Digital Agency as a Service</CardTitle>
                      <CardDescription className="mt-1.5">Tech & Growth embedded nel tuo team</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      PREMIUM
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold">
                    €2.500<span className="text-lg font-normal text-muted-foreground">/mese</span>
                  </div>
                  <div className="space-y-2">
                    {agencyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full group bg-[#ff7849] hover:bg-[#ff7849]/90 text-white">
                    Inizia ora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Prezzo personalizzato in base alle tue esigenze specifiche. Nessun contratto vincolante a lungo termine.
            </p>
            <p className="mt-2">
              Hai domande?{" "}
              <a href="#contact" className="text-accent-blue hover:underline">
                Contattaci
              </a>{" "}
              per maggiori informazioni.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
