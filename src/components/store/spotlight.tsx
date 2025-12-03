"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface SpotlightProps {
    className?: string
    fill?: string
}

export default function Spotlight({ className = "", fill = "white" }: SpotlightProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            mouseX.set(x)
            mouseY.set(y)
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        const container = containerRef.current
        if (container) {
            container.addEventListener("mousemove", handleMouseMove)
            container.addEventListener("mouseenter", handleMouseEnter)
            container.addEventListener("mouseleave", handleMouseLeave)
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove)
                container.removeEventListener("mouseenter", handleMouseEnter)
                container.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [mouseX, mouseY])

    const spotlightX = useTransform(mouseX, (x) => x - 400)
    const spotlightY = useTransform(mouseY, (y) => y - 400)

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute"
                style={{
                    x: spotlightX,
                    y: spotlightY,
                    width: 800,
                    height: 800,
                    background: `radial-gradient(circle, ${fill}15 0%, ${fill}08 25%, transparent 60%)`,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ opacity: { duration: 0.3 } }}
            />
        </div>
    )
}

export function BackgroundBeams() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <svg
                className="absolute w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {[...Array(6)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={`${10 + i * 15}%`}
                        y1="0%"
                        x2={`${30 + i * 15}%`}
                        y2="100%"
                        stroke="url(#beam-gradient)"
                        strokeWidth="1"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            pathLength: [0, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export function GridBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, #050505 70%)',
                }}
            />
        </div>
    )
}
