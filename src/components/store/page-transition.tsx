"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface PageTransitionProps {
    children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1600)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </>
    )
}

function LoadingScreen() {
    const [lines, setLines] = useState<string[]>([])

    const bootLines = [
        "initializing system...",
        "loading modules...",
        "connecting to database...",
        "authenticating...",
        "ready.",
    ]

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            if (currentIndex < bootLines.length) {
                setLines(prev => [...prev, bootLines[currentIndex]])
                currentIndex++
            } else {
                clearInterval(interval)
            }
        }, 250)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                }}
            />

            <div className="relative w-full max-w-md px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-[#1a1a1a] rounded bg-[#0a0a0a] overflow-hidden"
                >
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-[#1a1a1a] bg-[#0f0f0f]">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#ff5f57]/60" />
                            <div className="w-2 h-2 rounded-full bg-[#febc2e]/60" />
                            <div className="w-2 h-2 rounded-full bg-[#28c840]/60" />
                        </div>
                        <span className="text-[9px] font-mono text-white/30 ml-2">boot_sequence</span>
                    </div>

                    <div className="p-4 font-mono text-xs min-h-[140px]">
                        {lines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`${line === "ready." ? "text-[#00ff41]" : "text-white/40"} mb-1`}
                            >
                                <span className="text-[#00ff41] mr-2">&gt;</span>
                                {line}
                            </motion.div>
                        ))}
                        <motion.span
                            className="inline-block w-1.5 h-3 bg-[#00ff41]"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="mt-4 h-0.5 bg-[#1a1a1a] rounded overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="h-full bg-[#00ff41]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}
