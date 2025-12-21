import type { Metadata } from "next"
import Navbar from "@/src/components/home/navbar"
import Header from "@/src/components/home/header"
import About from "@/src/components/home/about"
import Projects from "@/src/components/home/projects"
import Contact from "@/src/components/home/contact"
import Footer from "@/src/components/home/footer"
import { Toaster } from "@/src/components/ui/sonner"

export const metadata: Metadata = {
  title: "Lorenzo Hauradou | Developer & Founder",
  description:
    "Building digital products that matter. Developer specializing in web development, AI automation, and turning ideas into reality.",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Header />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}
