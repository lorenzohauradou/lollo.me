"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import Link from "next/link"

function LandingPageIllustration({ isHovered }: { isHovered: boolean }) {
    return (
        <svg viewBox="0 0 80 48" className="w-32 h-25" fill="none">
            {/* Browser frame */}
            <motion.rect
                x="4" y="4" width="72" height="40" rx="3"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-foreground/20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isHovered ? 1 : 0.6 }}
                transition={{ duration: 0.6 }}
            />
            {/* Browser dots */}
            <motion.circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-foreground/30"
                animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.circle cx="16" cy="10" r="1.5" fill="currentColor" className="text-foreground/20"
                animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.circle cx="22" cy="10" r="1.5" fill="currentColor" className="text-foreground/15"
                animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            />
            {/* Content lines */}
            <motion.line x1="12" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="2" className="text-foreground/15"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isHovered ? 1 : 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.line x1="12" y1="26" x2="32" y2="26" stroke="currentColor" strokeWidth="1.5" className="text-foreground/10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isHovered ? 1 : 0.4 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            />
            {/* CTA button */}
            <motion.rect x="12" y="32" width="24" height="6" rx="1.5" fill="currentColor" className="text-foreground/20"
                animate={{ opacity: isHovered ? 1 : 0.5, x: isHovered ? 0 : -2 }}
                transition={{ duration: 0.4 }}
            />
            {/* Cursor */}
            <motion.path
                d="M52 28 L52 38 L56 35 L60 40 L62 39 L58 34 L63 33 Z"
                fill="currentColor"
                className="text-foreground/40"
                animate={{
                    x: isHovered ? [0, 4, 0] : 0,
                    y: isHovered ? [0, 2, 0] : 0,
                }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    )
}

function AIAutomationIllustration({ isHovered }: { isHovered: boolean }) {
    return (
        <div className="relative w-44 h-16 flex items-center justify-center">
            {/* SVG nodes and connections */}
            <svg viewBox="0 0 176 64" className="absolute inset-0 w-full h-full" fill="none">
                {/* Left node - input */}
                <motion.rect
                    x="4" y="20" width="24" height="24" rx="6"
                    stroke="currentColor" strokeWidth="1.5"
                    className="text-foreground/20"
                    fill="none"
                    animate={{
                        strokeOpacity: isHovered ? 0.5 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                />
                {/* Input icon */}
                <motion.path
                    d="M11 28h10M11 32h7M11 36h10"
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
                    className="text-foreground/30"
                    animate={{ opacity: isHovered ? 0.6 : 0.3 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Right node - output */}
                <motion.rect
                    x="148" y="20" width="24" height="24" rx="6"
                    stroke="currentColor" strokeWidth="1.5"
                    className="text-foreground/20"
                    fill="none"
                    animate={{
                        strokeOpacity: isHovered ? 0.5 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                />
                {/* Output checkmark */}
                <motion.path
                    d="M156 32l3 3 6-6"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="text-foreground/30"
                    initial={{ pathLength: 0 }}
                    animate={{
                        pathLength: isHovered ? 1 : 0.5,
                        opacity: isHovered ? 0.7 : 0.3
                    }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                />

                {/* Connection line left */}
                <motion.path
                    d="M28 32 L56 32"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    className="text-foreground/10"
                    strokeDasharray="2 4"
                    animate={{
                        strokeOpacity: isHovered ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Connection line right */}
                <motion.path
                    d="M120 32 L148 32"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    className="text-foreground/10"
                    strokeDasharray="2 4"
                    animate={{
                        strokeOpacity: isHovered ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Data pulse 1 - left to center */}
                <motion.circle r="3" fill="#EA4B71"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: isHovered ? [28, 56] : 28,
                        cy: 32,
                        opacity: isHovered ? [0.8, 0] : 0,
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Data pulse 2 - left to center delayed */}
                <motion.circle r="2" fill="#EA4B71"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: isHovered ? [28, 56] : 28,
                        cy: 32,
                        opacity: isHovered ? [0.5, 0] : 0,
                    }}
                    transition={{ duration: 0.5, delay: 0.25, repeat: Infinity, ease: "easeOut" }}
                />

                {/* Data pulse 3 - center to right */}
                <motion.circle r="3" fill="#EA4B71"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: isHovered ? [120, 148] : 120,
                        cy: 32,
                        opacity: isHovered ? [0.8, 0] : 0,
                    }}
                    transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Data pulse 4 - center to right delayed */}
                <motion.circle r="2" fill="#EA4B71"
                    initial={{ opacity: 0 }}
                    animate={{
                        cx: isHovered ? [120, 148] : 120,
                        cy: 32,
                        opacity: isHovered ? [0.5, 0] : 0,
                    }}
                    transition={{ duration: 0.5, delay: 0.75, repeat: Infinity, ease: "easeOut" }}
                />
            </svg>

            {/* Glow behind logo */}
            <motion.div
                className="absolute w-14 h-14 rounded-2xl bg-[#EA4B71]/10 blur-xl"
                animate={{
                    opacity: isHovered ? 0.8 : 0,
                    scale: isHovered ? 1.2 : 0.8
                }}
                transition={{ duration: 0.4 }}
            />

            {/* n8n logo center with border */}
            <motion.div
                className="relative z-10 w-12 h-12 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-sm flex items-center justify-center"
                animate={{
                    borderColor: isHovered ? "rgba(234, 75, 113, 0.3)" : "hsl(var(--foreground) / 0.1)",
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src="/n8n.svg"
                    alt="n8n"
                    className="w-8 h-8"
                    animate={{
                        scale: isHovered ? [1, 1.08, 1] : 1,
                    }}
                    transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    )
}

function MVPLaunchpadIllustration({ isHovered }: { isHovered: boolean }) {
    return (
        <svg viewBox="0 0 80 48" className="w-32 h-20 mt-4" fill="none">
            {/* Rocket body */}
            <motion.path
                d="M40 8 L46 20 L46 32 L40 36 L34 32 L34 20 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-foreground/25"
                fill="none"
                animate={{ y: isHovered ? [0, -3, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Rocket tip */}
            <motion.path
                d="M40 4 L44 12 L36 12 Z"
                fill="currentColor"
                className="text-foreground/20"
                animate={{ y: isHovered ? [0, -3, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Fins */}
            <motion.path
                d="M34 28 L28 36 L34 32"
                stroke="currentColor" strokeWidth="1.5" className="text-foreground/15"
                animate={{ y: isHovered ? [0, -3, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M46 28 L52 36 L46 32"
                stroke="currentColor" strokeWidth="1.5" className="text-foreground/15"
                animate={{ y: isHovered ? [0, -3, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Flames */}
            <motion.path
                d="M37 36 Q40 44 43 36"
                stroke="currentColor" strokeWidth="2" className="text-foreground/30"
                animate={{
                    d: isHovered
                        ? ["M37 36 Q40 42 43 36", "M37 36 Q40 48 43 36", "M37 36 Q40 42 43 36"]
                        : "M37 36 Q40 40 43 36",
                    opacity: isHovered ? [0.5, 1, 0.5] : 0.3,
                }}
                transition={{ duration: 0.3, repeat: Infinity }}
            />
            {/* Smoke particles */}
            <motion.circle cx="36" cy="44" r="1.5" fill="currentColor" className="text-foreground/10"
                animate={{
                    y: isHovered ? [0, 4, 8] : 0,
                    opacity: isHovered ? [0.4, 0.2, 0] : 0.1,
                    x: isHovered ? [0, -2, -4] : 0,
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.circle cx="44" cy="44" r="1.5" fill="currentColor" className="text-foreground/10"
                animate={{
                    y: isHovered ? [0, 4, 8] : 0,
                    opacity: isHovered ? [0.4, 0.2, 0] : 0.1,
                    x: isHovered ? [0, 2, 4] : 0,
                }}
                transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
            />
            {/* Window */}
            <motion.circle cx="40" cy="18" r="3" stroke="currentColor" strokeWidth="1" className="text-foreground/20"
                animate={{ y: isHovered ? [0, -3, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    )
}

const illustrations = [LandingPageIllustration, AIAutomationIllustration, MVPLaunchpadIllustration]

const solutions = [
    {
        number: "01",
        title: "Landing Page",
        accent: "Conversion-First",
        target: "For freelancers and product launches",
        deliverables: [
            "Full custom design - Next.js",
            "Conversion-optimized copy",
            "Accessibility + SEO + 100% Performance",
        ],
        description: "A single-page website designed to convert visitors into customers. Includes contact forms, analytics tracking, mobile-first design, hosting setup...",
        timeline: "7 days",
        price: "1,500",
        cta: "Ready to launch?",
    },
    {
        number: "02",
        title: "AI Automation",
        accent: "n8n/code + AI",
        target: "For small businesses losing time on repetitive tasks",
        deliverables: [
            "Process analysis and mapping",
            "Custom workflow automation",
            "Team training included",
        ],
        description: "Automate emails, data entry, reports, and notifications. Connect your existing tools (CRM, sheets, email, whatsapp) and let AI handle the boring stuff.",
        timeline: "2-3 weeks",
        price: "2,000",
        suffix: "+ maintenance",
        cta: "Automate your biz",
    },
    {
        number: "03",
        title: "MVP Launchpad",
        accent: "Full Stack Product",
        target: "For founders who want to validate fast",
        deliverables: [
            "Scalable architecture API & Frontend",
            "Stripe payment integration",
            "User dashboard + Launch support",
        ],
        description: "Complete web app with user authentication, database, payment processing, admin panel, and your core business logic. Ready to accept paying customers",
        timeline: "3-4 weeks",
        price: "4,000",
        cta: "Build your MVP",
    },
]

// Single slot card component with 3D rotation
function SlotCard({
    solution,
    index,
    scrollYProgress,
    isActive,
    onHover,
    onLeave,
}: {
    solution: typeof solutions[0]
    index: number
    scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
    isActive: boolean
    onHover: () => void
    onLeave: () => void
}) {
    const totalCards = solutions.length

    // Each card occupies 1/3 of the scroll range
    const segmentSize = 1 / totalCards
    const cardStart = index * segmentSize
    const cardEnd = (index + 1) * segmentSize

    // Rotation: starts at 90deg (below), goes to 0 (visible), then to -90deg (above)
    const rotateX = useTransform(
        scrollYProgress,
        [
            cardStart - segmentSize * 0.5,
            cardStart,
            cardStart + segmentSize * 0.1,
            cardEnd - segmentSize * 0.1,
            cardEnd,
            cardEnd + segmentSize * 0.5
        ],
        [90, 90, 0, 0, -90, -90]
    )

    // Opacity for smooth transitions
    const opacity = useTransform(
        scrollYProgress,
        [
            cardStart - segmentSize * 0.3,
            cardStart,
            cardStart + segmentSize * 0.15,
            cardEnd - segmentSize * 0.15,
            cardEnd,
            cardEnd + segmentSize * 0.3
        ],
        [0, 0.3, 1, 1, 0.3, 0]
    )

    // Z-index based on visibility (active card on top)
    const zIndex = useTransform(
        scrollYProgress,
        [cardStart, cardStart + segmentSize * 0.1, cardEnd - segmentSize * 0.1, cardEnd],
        [0, 10, 10, 0]
    )

    // Slight Y translation for depth effect
    const translateY = useTransform(
        scrollYProgress,
        [cardStart, cardStart + segmentSize * 0.15, cardEnd - segmentSize * 0.15, cardEnd],
        [30, 0, 0, -30]
    )

    // Scale for depth
    const scale = useTransform(
        scrollYProgress,
        [cardStart, cardStart + segmentSize * 0.15, cardEnd - segmentSize * 0.15, cardEnd],
        [0.9, 1, 1, 0.9]
    )

    const Illustration = illustrations[index]

    return (
        <motion.div
            className="absolute inset-0 backface-hidden"
            style={{
                rotateX,
                opacity,
                zIndex,
                y: translateY,
                scale,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="h-full w-full bg-neutral-200/50 dark:bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-12">
                {/* Top border accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start h-full">
                    {/* Number + Title */}
                    <div className="lg:col-span-5">
                        {/* Mobile header */}
                        <div className="lg:hidden mb-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-light text-foreground/20 tabular-nums">
                                        {solution.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-medium tracking-tight">
                                            {solution.title}
                                        </h3>
                                        <span className="text-xs text-foreground/50 font-mono">
                                            {solution.accent}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-foreground/40 uppercase tracking-wider block">
                                        {solution.timeline}
                                    </span>
                                    <div className="flex items-baseline gap-0.5 justify-end">
                                        <span className="text-xl font-semibold tracking-tight">
                                            {solution.price}
                                        </span>
                                        <span className="text-sm font-medium text-foreground/60">€</span>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile illustration */}
                            <div className="flex justify-center scale-[0.55] origin-center -my-4">
                                <Illustration isHovered={isActive} />
                            </div>
                        </div>

                        {/* Desktop header */}
                        <div className="hidden lg:flex items-start gap-6">
                            <motion.span
                                className="text-7xl font-light text-foreground/10 tabular-nums leading-none select-none"
                                animate={{
                                    color: isActive
                                        ? "hsl(var(--foreground) / 0.2)"
                                        : "hsl(var(--foreground) / 0.1)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {solution.number}
                            </motion.span>

                            <div className="pt-2">
                                <h3 className="text-3xl font-medium tracking-tight mb-2">
                                    {solution.title}
                                </h3>
                                <span className="text-sm text-foreground/50 font-mono">
                                    {solution.accent}
                                </span>

                                {/* Animated illustration */}
                                <div className="mt-6">
                                    <Illustration isHovered={isActive} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-4">
                        <p className="text-xs text-foreground/40 uppercase tracking-wider mb-2">
                            {solution.target}
                        </p>
                        <ul className="space-y-2">
                            {solution.deliverables.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="text-sm text-foreground/70 flex items-start gap-3"
                                    initial={{ opacity: 0.7 }}
                                    animate={{ opacity: isActive ? 1 : 0.7 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    <svg
                                        className="w-4 h-4 mt-0.5 flex-shrink-0 text-foreground/30"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <motion.path
                                            d="M2 8h12M10 4l4 4-4 4"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: isActive ? 1 : 0.5 }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                        />
                                    </svg>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Simple explanation */}
                        <motion.p
                            className="mt-3 text-xs text-foreground/40 leading-relaxed border-t border-foreground/5 pt-3"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: isActive ? 0.7 : 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {solution.description}
                        </motion.p>

                        {/* CTA Button - mobile */}
                        <a
                            href="https://calendly.com/lorenzooradu/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lg:hidden mt-4 text-sm font-medium px-5 py-2 rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300 text-foreground/80 hover:text-foreground inline-flex items-center justify-center gap-2 w-full"
                        >
                            {solution.cta}
                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Price + CTA - desktop */}
                    <div className="hidden lg:flex lg:col-span-3 lg:text-right flex-col gap-5">
                        <div>
                            <span className="text-xs text-foreground/40 uppercase tracking-wider block mb-2">
                                {solution.timeline}
                            </span>
                            <div className="flex items-baseline gap-1 justify-end">
                                <span className="text-xs text-foreground/50">from</span>
                                <motion.span
                                    className="text-4xl font-semibold tracking-tight"
                                    animate={{ scale: isActive ? 1.02 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {solution.price}
                                </motion.span>
                                <span className="text-xl font-medium text-foreground/60">€</span>
                            </div>
                            {solution.suffix && (
                                <span className="text-xs text-foreground/40 mt-1 block">
                                    {solution.suffix}
                                </span>
                            )}
                        </div>

                        <a
                            href="https://calendly.com/lorenzooradu/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium px-5 py-2.5 rounded-full border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-300 text-foreground/70 hover:text-foreground inline-block text-center"
                        >
                            {solution.cta}
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Track which card is currently active based on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const segmentSize = 1 / solutions.length
        const newIndex = Math.min(
            solutions.length - 1,
            Math.floor(latest / segmentSize)
        )
        if (newIndex !== activeIndex && newIndex >= 0) {
            setActiveIndex(newIndex)
        }
    })

    // Header animation
    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 1])
    const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -20])

    // CTA opacity (appears after last card)
    const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1])

    return (
        <section
            id="solutions"
            ref={containerRef}
            className="relative"
            style={{ height: "300vh" }}
        >
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <div className="h-full flex flex-col justify-start pt-16 md:justify-center md:pt-0 max-w-5xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <motion.div
                        style={{ opacity: headerOpacity, y: headerY }}
                        className="mb-4 md:mb-12"
                    >
                        <div className="flex items-center gap-4 mb-3 md:mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                            <span className="text-xs tracking-[0.3em] text-foreground/40 uppercase">Services</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
                            How we can work together
                        </h2>
                    </motion.div>

                    {/* Slot machine container */}
                    <div
                        className="relative flex-1 max-h-[420px] md:max-h-[380px]"
                        style={{ perspective: "1200px" }}
                    >
                        {solutions.map((solution, index) => (
                            <SlotCard
                                key={solution.number}
                                solution={solution}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                isActive={hoveredIndex === index || (hoveredIndex === null && activeIndex === index)}
                                onHover={() => setHoveredIndex(index)}
                                onLeave={() => setHoveredIndex(null)}
                            />
                        ))}
                    </div>

                    {/* Progress indicators */}
                    <div className="hidden absolute top-36 md:top-16 xl:top-36 left-0 right-0 md:flex justify-center gap-2">
                        {solutions.map((_, index) => (
                            <motion.div
                                key={index}
                                className="h-1 rounded-full bg-foreground/10 overflow-hidden"
                                style={{ width: 40 }}
                            >
                                <motion.div
                                    className="h-full bg-foreground/40 rounded-full"
                                    initial={{ width: index === 0 ? "100%" : "0%" }}
                                    animate={{
                                        width: activeIndex === index ? "100%" :
                                            activeIndex > index ? "100%" : "0%"
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Custom CTA - appears at the end, desktop only */}
                    <motion.div
                        style={{ opacity: ctaOpacity }}
                        className="absolute bottom-16 md:bottom-8 xl:bottom-20 left-0 right-0"
                    >
                        <div className="flex flex-row items-center justify-center gap-6 py-6">
                            <p className="text-foreground/50 text-sm">
                                Got a different project in mind?
                            </p>

                            <Link
                                href="https://calendly.com/lorenzooradu/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 text-sm font-medium"
                            >
                                <span className="relative">
                                    Let&apos;s talk
                                    <motion.span
                                        className="absolute -bottom-0.5 left-0 h-px bg-foreground"
                                        initial={{ width: "100%" }}
                                        whileHover={{ width: "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </span>

                                <motion.svg
                                    className="w-4 h-4"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path
                                        d="M1 8h14M11 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
