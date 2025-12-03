"use client"

import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Spotlight, { GridBackground } from "./spotlight"
import { ArrowRight, Download, Check } from "lucide-react"

const TechIcon = ({ type }: { type: string }) => {
    const icons: Record<string, React.ReactNode> = {
        nextjs: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
            </svg>
        ),
        supabase: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z" />
            </svg>
        ),
        stripe: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
            </svg>
        ),
        workflow: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        ),
        openai: (
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
            </svg>
        ),
    }
    return icons[type] || null
}

const products = [
    {
        id: "ui-shell",
        name: "UI Shell",
        price: 29,
        tagline: "Frontend only",
        description: "Production-ready frontend. Next.js + Tailwind + Shadcn. Dark theme included.",
        techStack: ["nextjs", "supabase"],
        features: [
            "Next.js 15 + App Router",
            "Tailwind + Shadcn/UI",
            "Dark theme system",
            "Landing, Pricing, FAQ",
            "SEO optimized",
        ],
    },
    {
        id: "saas-foundation",
        name: "SaaS Foundation",
        price: 99,
        tagline: "Full stack",
        description: "Complete SaaS starter. Auth, payments, database. Ship in a weekend.",
        techStack: ["nextjs", "supabase", "stripe"],
        features: [
            "Everything in UI Shell",
            "Supabase Auth + OAuth",
            "Stripe payments",
            "Database schema",
            "User dashboard",
            "Protected routes",
        ],
        bonus: "Includes 1h onboarding call",
    },
    {
        id: "ai-stack",
        name: "AI Stack",
        price: 199,
        tagline: "AI-powered",
        description: "Full AI SaaS. Workflows, credits, API integrations. Production ready.",
        techStack: ["nextjs", "supabase", "stripe", "workflow", "openai"],
        features: [
            "Everything in SaaS Foundation",
            "n8n workflows",
            "Credit system",
            "OpenAI/Claude integration",
            "Queue + rate limiting",
            "Production architecture",
        ],
        featured: true,
        bonus: "Includes 1h onboarding call",
    },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
        >
            {product.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-3 py-1 bg-[#00ff41]/10 border border-[#00ff41]/30 text-[#00ff41] text-[10px] font-medium uppercase tracking-wider rounded-full">
                        Best seller
                    </div>
                </div>
            )}

            <div
                className="relative rounded-lg border transition-all duration-300 h-full"
                style={{
                    background: 'linear-gradient(180deg, #0c0c0c 0%, #080808 100%)',
                    borderColor: isHovered ? '#00ff4130' : '#1a1a1a',
                }}
            >
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <span className="text-[10px] text-white/30 uppercase tracking-wider">{product.tagline}</span>
                            <h3 className="text-xl font-semibold text-white mt-1">{product.name}</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-bold text-white">€{product.price}</span>
                            {product.bonus && (
                                <p className="text-[10px] text-[#00ff41] mt-1 font-medium">{product.bonus}</p>
                            )}
                        </div>
                    </div>

                    <p className="text-white/40 text-sm mb-5 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex items-center gap-2 mb-5 pb-5 border-b border-[#1a1a1a]">
                        {product.techStack.map((tech) => (
                            <div
                                key={tech}
                                className="w-7 h-7 rounded bg-[#141414] flex items-center justify-center text-white/40 hover:text-[#00ff41] transition-colors"
                            >
                                <TechIcon type={tech} />
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2.5 mb-6">
                        {product.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-sm">
                                <Check className="w-3.5 h-3.5 text-[#00ff41]/60 flex-shrink-0" />
                                <span className="text-white/50">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                        style={{
                            background: isHovered ? '#00ff41' : 'transparent',
                            border: '1px solid',
                            borderColor: isHovered ? '#00ff41' : '#252525',
                            color: isHovered ? '#000' : '#fff',
                        }}
                    >
                        <Download className="w-4 h-4" />
                        <span>Get access</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default function StoreHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-[#050505]"
        >
            <GridBackground />
            <Spotlight fill="#00ff41" />

            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <motion.div style={{ y, opacity }} className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a1a] bg-[#0a0a0a] mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                        <span className="text-xs text-white/40">3 packages available</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Steal my </span>
                        <span className="text-[#00ff41]">codebase</span>
                    </h1>

                    <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
                        I've already configured auth, payments, and workflows.
                        Download the source code and ship your product faster.
                    </p>

                    <div className="flex items-center justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2 text-xs text-white/30">
                            <Check className="w-3.5 h-3.5 text-[#00ff41]/60" />
                            <span>Instant download</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/30">
                            <Check className="w-3.5 h-3.5 text-[#00ff41]/60" />
                            <span>Full source code</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/30">
                            <Check className="w-3.5 h-3.5 text-[#00ff41]/60" />
                            <span>Lifetime updates</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-20" />
        </section>
    )
}
