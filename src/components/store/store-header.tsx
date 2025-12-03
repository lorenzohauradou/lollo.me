"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function StoreHeader() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a]"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2">
                        <motion.div
                            whileHover={{ x: -3 }}
                            className="flex items-center gap-2 text-white/40 hover:text-[#00ff41] transition-colors font-mono text-xs"
                        >
                            <span>cd ~/home</span>
                        </motion.div>
                    </Link>

                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                        <span className="font-mono text-sm text-white/80">
                            lollo<span className="text-[#00ff41]">.store</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/30">
                            <span>status:</span>
                            <span className="text-[#00ff41]">online</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
