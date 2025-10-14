import type { Metadata } from "next"
import Navbar from "@/src/components/home/navbar"
import Cursor from "@/src/components/ui/cursor"
import Hero from "@/src/components/home/hero"
import About from "@/src/components/home/about"
import Projects from "@/src/components/home/projects"
import Contact from "@/src/components/home/contact"
import Footer from "@/src/components/home/footer"
import LogoMarquee from "@/src/components/ui/logo-marquee"
import { Toaster } from "@/src/components/ui/sonner"

export const metadata: Metadata = {
  title: "Lollo.me | Sviluppo web, automazioni, consulenza e soluzioni digitali su misura",
  description:
    "Trasformo idee in prodotti digitali concreti: siti web, landing page, automazioni e strumenti personalizzati.",
}

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen relative overflow-x-hidden">
        <Hero />
        <LogoMarquee />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </>
  )
}
