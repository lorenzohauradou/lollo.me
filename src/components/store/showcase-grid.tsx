"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Play, ExternalLink, Monitor, Smartphone, Tablet, Maximize2 } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const showcaseItems = [
    {
        id: 1,
        type: "image",
        src: "/placeholder-showcase-1.png",
        alt: "Dashboard Desktop View",
        title: "Dashboard Analytics",
        tier: "SaaS Foundation",
        device: "desktop",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
    },
    {
        id: 2,
        type: "image",
        src: "/placeholder-showcase-2.png",
        alt: "Mobile Auth Screen",
        title: "Mobile Auth",
        tier: "SaaS Foundation",
        device: "iphone",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
    },
    {
        id: 3,
        type: "video",
        src: "/placeholder-showcase-3.mp4",
        thumbnail: "/placeholder-showcase-3-thumb.png",
        alt: "AI Generation Demo",
        title: "AI Workflow Builder",
        tier: "AI Stack",
        device: "desktop",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
    },
    {
        id: 4,
        type: "image",
        src: "/placeholder-showcase-4.png",
        alt: "Credit System Mobile",
        title: "Credit System",
        tier: "AI Stack",
        device: "iphone",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
    },
    {
        id: 5,
        type: "image",
        src: "/placeholder-showcase-5.png",
        alt: "Landing Page",
        title: "Landing Page",
        tier: "UI Shell",
        device: "desktop",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
    },
    {
        id: 6,
        type: "video",
        src: "/placeholder-showcase-6.mp4",
        thumbnail: "/placeholder-showcase-6-thumb.png",
        alt: "Stripe Checkout",
        title: "Payments Flow",
        tier: "SaaS Foundation",
        device: "tablet",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
    },
]

const tierColors: Record<string, string> = {
    "UI Shell": "bg-zinc-800 text-zinc-400 border-zinc-700",
    "SaaS Foundation": "bg-zinc-100/10 text-zinc-300 border-zinc-700",
    "AI Stack": "bg-purple-500/20 text-purple-300 border-purple-500/30",
}

const deviceIcons: Record<string, React.ReactNode> = {
    desktop: <Monitor className="w-3 h-3" />,
    iphone: <Smartphone className="w-3 h-3" />,
    tablet: <Tablet className="w-3 h-3" />,
}

export default function ShowcaseGrid() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

    return (
        <section ref={containerRef} className="relative py-32 bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    style={{ opacity, y }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-xs font-mono text-zinc-400">./preview_mode</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Interface <span className="text-white/40">Gallery</span>
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto text-lg">
                        A closer look at the production-ready components included in the bundles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[minmax(200px,auto)]">
                    {showcaseItems.map((item, index) => (
                        <ShowcaseCard
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ShowcaseCard({
    item,
    index,
}: {
    item: typeof showcaseItems[0]
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors ${item.colSpan} ${item.rowSpan}`}
        >
            {/* Device Frame / Content Area */}
            <div className="absolute inset-0 p-4 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 border border-white/5">
                            {deviceIcons[item.device]}
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-white leading-none mb-1">{item.title}</h3>
                            <p className="text-[10px] text-white/30 font-mono uppercase tracking-wider">{item.device}</p>
                        </div>
                    </div>
                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${tierColors[item.tier]}`}>
                        {item.tier}
                    </div>
                </div>

                {/* Visual Container */}
                <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/5 group-hover:border-white/20 transition-colors duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Placeholder Visualization */}
                        <div className="w-full h-full relative bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />

                            {/* Center Icon / Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all duration-300 bg-white/5 text-white/20 group-hover:bg-white/10 group-hover:text-white`}
                                >
                                    {item.type === 'video' ? <Play className="w-6 h-6 fill-current" /> : <Maximize2 className="w-6 h-6" />}
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="text-xs text-white/70 font-mono">View details</span>
                        <ExternalLink className="w-4 h-4 text-white/70" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
