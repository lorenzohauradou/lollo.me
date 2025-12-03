"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function DarkPortalButton() {
    const [isHovered, setIsHovered] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document.getElementById("portal-btn")?.getBoundingClientRect()
            if (rect) {
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2
                setMousePosition({ x: x * 0.1, y: y * 0.1 })
            }
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <Link href="/store" className="fixed bottom-8 right-8 z-50 block">
            <motion.div
                id="portal-btn"
                className="relative cursor-pointer"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    delay: 2
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    x: isHovered ? mousePosition.x : 0,
                    y: isHovered ? mousePosition.y : 0,
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
                    }}
                    animate={{
                        background: isHovered
                            ? "linear-gradient(135deg, #000000 0%, #0a1f0a 50%, #000000 100%)"
                            : "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
                        boxShadow: isHovered
                            ? "0 0 20px rgba(0, 255, 65, 0.4), 0 0 40px rgba(0, 255, 65, 0.2), inset 0 0 10px rgba(0, 255, 65, 0.1)"
                            : "0 0 20px rgba(139, 92, 246, 0.15), 0 0 40px rgba(139, 92, 246, 0.05)",
                    }}
                    transition={{ duration: 0.4 }}
                />

                <motion.div
                    className="absolute -inset-[1px] rounded-2xl opacity-60"
                    style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #8b5cf6, #6366f1)",
                        backgroundSize: "200% 200%",
                    }}
                    animate={{
                        background: isHovered
                            ? "linear-gradient(135deg, #00ff41, #003300, #00ff41, #003300, #00ff41)"
                            : "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #8b5cf6, #6366f1)",
                        backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
                        opacity: isHovered ? 1 : 0.4,
                    }}
                    transition={{
                        backgroundPosition: { duration: 0.2, repeat: Infinity, repeatType: "reverse" },
                        opacity: { duration: 0.3 }
                    }}
                />

                <div className="relative px-5 py-3 rounded-2xl bg-[#0a0a0a]/90 border border-white/10 flex items-center gap-3">
                    <motion.div
                        className="relative w-10 h-10 flex items-center justify-center"
                        animate={{
                            scale: isHovered ? [1, 1.15, 1] : 1,
                            x: isHovered ? [0, -1, 1, -1, 0] : 0,
                        }}
                        transition={{
                            scale: { duration: 0.5, ease: "easeInOut" },
                            x: { duration: 0.2, repeat: Infinity }
                        }}
                    >
                        <Image
                            src="/emoji1.png"
                            alt="Store"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </motion.div>

                    <div className="flex flex-col">
                        <motion.span
                            className="text-xs font-mono uppercase tracking-wider"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                color: isHovered ? "#00ff41" : "rgba(255,255,255,0.4)"
                            }}
                            transition={{ delay: 2.3 }}
                        >
                            Store
                        </motion.span>
                        <motion.span
                            className="text-sm font-semibold"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                color: isHovered ? "#00ff41" : "#ffffff",
                                textShadow: isHovered ? "0 0 8px rgba(0,255,65,0.5)" : "none"
                            }}
                            transition={{ delay: 2.4 }}
                        >
                            Dev Kits
                        </motion.span>
                    </div>

                    <motion.div
                        className="ml-1"
                        animate={{ x: isHovered ? 3 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={isHovered ? "#00ff41" : "#a855f7"}
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-full h-full rounded-full"
                        animate={{ backgroundColor: isHovered ? "#00ff41" : "#a855f7" }}
                    />
                </motion.div>
            </motion.div>
        </Link>
    )
}
