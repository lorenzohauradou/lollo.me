import type { Metadata } from "next"
import Hero from "@/src/components/page/hero"
import Services from "@/src/components/page/services"
import About from "@/src/components/page/about"
import Projects from "@/src/components/page/projects"
//import Subscription from "@/components/subscription"
import Contact from "@/src/components/page/contact"
import Footer from "@/src/components/page/footer"
import LogoMarquee from "@/src/components/ui/logo-marquee"

import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Lollo.me | Sviluppo web, automazioni, consulenza e soluzioni digitali su misura",
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
      {/* <Subscription /> */}
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}
