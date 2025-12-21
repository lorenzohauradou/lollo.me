"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Header() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center pt-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-rose-50/30 dark:from-transparent dark:to-transparent" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl dark:opacity-0" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 rounded-full blur-3xl dark:opacity-0" />

            <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative w-16 h-16"
                        >
                            <Image
                                src="/emoji1.webp"
                                alt="Lorenzo Hauradou"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                        <div className="inline-flex items-center gap-2.5 text-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-foreground/70">Available for new projects</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                        Hey, I'm Lorenzo —
                        <br />
                        I build web stuff 👾
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed">
                        Indie dev helping startups turn ideas into real products — websites, apps, and AI automations
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors group"
                    >
                        <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                        Scroll to my projects
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
