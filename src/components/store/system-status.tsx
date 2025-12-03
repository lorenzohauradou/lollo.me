"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

const stats = [
    {
        id: "api",
        label: "api_requests_today",
        value: 14203,
        suffix: "",
        color: "#00ff41",
    },
    {
        id: "code",
        label: "lines_shipped",
        value: 24847,
        suffix: "",
        color: "#00ff41",
    },
    {
        id: "uptime",
        label: "system_uptime",
        value: 99.9,
        suffix: "%",
        color: "#00ff41",
    },
    {
        id: "coffee",
        label: "coffee_level",
        value: 0,
        suffix: "",
        special: "CRITICAL",
        color: "#ff5f57",
    },
]

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const spring = useSpring(0, { stiffness: 50, damping: 20 })
    const display = useTransform(spring, (current) => {
        if (suffix === "%") return current.toFixed(1) + suffix
        return Math.round(current).toLocaleString() + suffix
    })

    useEffect(() => {
        spring.set(value)
    }, [spring, value])

    return <motion.span>{display}</motion.span>
}

export default function SystemStatus() {
    const [mounted, setMounted] = useState(false)
    const [apiCount, setApiCount] = useState(14203)

    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            setApiCount(prev => prev + Math.floor(Math.random() * 3))
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    if (!mounted) return null

    return (
        <section className="relative py-16 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="border border-[#1a1a1a] rounded bg-[#0a0a0a]/80 overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1a1a1a] bg-[#0f0f0f]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">system_status</span>
                            <span className="text-[10px] font-mono text-white/20 ml-auto">live</span>
                        </div>

                        <div className="p-5">
                            <div className="font-mono text-sm mb-4">
                                <span className="text-[#00ff41]">$</span>
                                <span className="text-white/50 ml-2">./status.sh --realtime</span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="p-4 rounded border border-[#1a1a1a] bg-[#0f0f0f]/50"
                                    >
                                        <div className="text-[10px] font-mono text-white/30 uppercase mb-2">
                                            {stat.label}
                                        </div>
                                        <div
                                            className="text-2xl font-mono font-bold"
                                            style={{ color: stat.color }}
                                        >
                                            {stat.special ? (
                                                <motion.span
                                                    animate={{ opacity: [1, 0.4, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                >
                                                    {stat.special}
                                                </motion.span>
                                            ) : stat.id === "api" ? (
                                                <AnimatedNumber value={apiCount} suffix={stat.suffix} />
                                            ) : (
                                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-[#1a1a1a] flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                                <span className="text-[10px] font-mono text-white/30">all systems operational</span>
                                <span className="text-[10px] font-mono text-white/20 ml-auto">updated: now</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
