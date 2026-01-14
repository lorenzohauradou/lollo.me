import type { Metadata } from "next"
import Navbar from "@/src/components/home/navbar"
import TechMarquee from "@/src/components/home/tech-marquee"
import Header from "@/src/components/home/header"
import About from "@/src/components/home/about"
import Projects from "@/src/components/home/projects"
import Solutions from "@/src/components/home/solutions"
import Contact from "@/src/components/home/contact"
import Footer from "@/src/components/home/footer"
import { Toaster } from "@/src/components/ui/sonner"
import WhatsAppButton from "@/src/components/ui/whatsapp-button"

export const metadata: Metadata = {
  title: "Lorenzo Hauradou | Developer & Founder",
  description:
    "Building digital products that matter. Developer specializing in web development, AI automation, and turning ideas into reality.",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <TechMarquee />
      <main className="min-h-screen pt-8">
        <Header />
        <Projects />
        <About />
        <Solutions />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      <WhatsAppButton />
    </>
  )
}
