import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Projects from "@/components/projects"
import Subscription from "@/components/subscription"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LogoMarquee from "@/components/logo-marquee"

import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Lollo.me | Freelance & Digital Entrepreneur",
  description:
    "Trasformo idee in prodotti digitali concreti: siti web, landing page, automazioni e strumenti personalizzati.",
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Hero />
      <LogoMarquee />
      <Services />
      <About />
      <Projects />
      <Subscription />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}
