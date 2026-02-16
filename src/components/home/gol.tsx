"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { AnimTarget } from "@/src/components/ui/anim-target"
import { AnimSpeed } from "@/src/components/ui/anim-speed"
import { AnimCompound } from "@/src/components/ui/anim-compound"
import { AnimFreedom } from "@/src/components/ui/anim-freedom"
import { CodeEditor } from "@/src/components/ui/code-editor"

const cycle = [
  { step: "01", name: "Identify", desc: "Spot a real problem from everyday work" },
  { step: "02", name: "Build", desc: "Ship an MVP with battle-tested tools" },
  { step: "03", name: "Expand", desc: "Integrations and advanced features" },
  { step: "04", name: "Grow", desc: "Organic marketing, SEO, community" },
  { step: "05", name: "Refine", desc: "User feedback, optimize, iterate" },
  { step: "06", name: "Decide", desc: "Keep, sell, or kill — no emotions" },
]

const cardBase =
  "relative rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/50 via-stone-50/30 to-amber-50/40 dark:from-muted/20 dark:via-muted/10 dark:to-muted/20 hover:border-border hover:shadow-lg hover:shadow-amber-900/5 dark:hover:shadow-none transition-all duration-300 overflow-hidden"

function BentoCard({
  children,
  className = "",
  index,
  isInView,
  onHover,
  onLeave,
}: {
  children: React.ReactNode
  className?: string
  index: number
  isInView: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className={`${cardBase} ${className}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-24 relative section-fade-top overflow-x-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-amber-50/20 to-background dark:from-background dark:via-muted/10 dark:to-background" />
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-30" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I build digital products in tight{" "}
            <span className="text-foreground font-medium">
              4-week development cycles
            </span>
            . Every project starts from a real problem, ships fast, and compounds
            into the next one
          </p>
        </motion.div>

        {/* Development Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-56 md:pb-16"
        >
          <h3 className="text-xs font-medium text-muted-foreground mb-6 mt-28 uppercase tracking-widest">
            The Cycle
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px rounded-xl overflow-hidden border border-border/60 bg-border/60">
            {cycle.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                className="bg-background p-5 hover:bg-amber-50/40 dark:hover:bg-muted/20 transition-colors duration-300 group"
              >
                <span className="text-xl font-light text-foreground/10 tabular-nums block mb-3 group-hover:text-foreground/20 transition-colors">
                  {item.step}
                </span>
                <span className="text-sm font-medium block mb-1 tracking-tight">
                  {item.name}
                </span>
                <span className="text-[11px] text-muted-foreground leading-relaxed block">
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/60 mt-3 italic">
            Cycles overlap — a new project starts as the previous one enters the
            feedback phases
          </p>
        </motion.div>

        {/* Principles - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xs font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Principles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Row 1: Real Problems (7) + Speed (5) */}
            <BentoCard
              className="md:col-span-7"
              index={0}
              isInView={isInView}
              onHover={() => setHovered(0)}
              onLeave={() => setHovered(null)}
            >
              <div className="flex flex-col sm:flex-row items-start">
                <div className="flex-1 p-7 pb-4 sm:pb-7">
                  <h4 className="text-base font-medium mb-3 tracking-tight">
                    Real Problems Only
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I build what I&apos;d use myself. Every project starts from a
                    genuine need — not trends, not speculation. If the problem
                    isn&apos;t real, the product won&apos;t survive
                  </p>
                </div>
                <div className="w-full sm:w-44 h-32 sm:h-auto sm:self-stretch shrink-0 p-4 sm:p-0 sm:pr-4 flex items-center justify-center">
                  <AnimTarget isHovered={hovered === 0} />
                </div>
              </div>
            </BentoCard>

            <BentoCard
              className="md:col-span-5"
              index={1}
              isInView={isInView}
              onHover={() => setHovered(1)}
              onLeave={() => setHovered(null)}
            >
              <div className="flex flex-col items-center p-7">
                <div className="w-full h-28 mb-4 flex items-center justify-center">
                  <AnimSpeed isHovered={hovered === 1} />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-medium mb-2 tracking-tight">
                    Speed Beats Perfection
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A working product in 4 weeks beats a perfect plan that never
                    ships. Validate with real users, learn from real data, iterate
                    fast
                  </p>
                </div>
              </div>
            </BentoCard>

            {/* Row 2: Compound - full width hero */}
            <BentoCard
              className="md:col-span-12"
              index={2}
              isInView={isInView}
              onHover={() => setHovered(2)}
              onLeave={() => setHovered(null)}
            >
              <div className="flex flex-col">
                {/* Title + description */}
                <div className="p-6 pb-3 md:p-7 md:pb-4">
                  <h4 className="text-lg font-medium mb-2 tracking-tight">
                    Compound Everything
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    Every module, every utility that works gets carried into the
                    next project. Reusable code, refined processes — what took
                    weeks now takes days.
                  </p>
                </div>

                {/* Code editor + Chart side by side */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-4 pt-2 md:p-7 md:pt-3">
                  {/* Code editor (left, narrower) */}
                  <div className="md:w-[52%] min-w-0 shrink-0">
                    <CodeEditor />
                  </div>
                  {/* Chart (right, bigger) */}
                  <div className="flex-1 flex flex-col items-center justify-center px-4 md:pl-8 md:pr-2">
                    <div className="w-full max-w-[280px] md:max-w-none h-48 md:h-56">
                      <AnimCompound isHovered={hovered === 2} />
                    </div>
                    <p className="text-[10px] text-muted-foreground/40 mt-2 text-center tracking-wider uppercase">
                      Standard vs Compounding growth
                    </p>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Row 3: Freedom (7) + 4w Callout (5) */}
            <BentoCard
              className="md:col-span-7"
              index={3}
              isInView={isInView}
              onHover={() => setHovered(3)}
              onLeave={() => setHovered(null)}
            >
              <div className="flex flex-col">
                <div className="p-6 pb-3 md:p-7 md:pb-3">
                  <h4 className="text-base font-medium mb-2 tracking-tight">
                    Freedom by Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No meetings, no clients dictating timelines, no investors
                    pressuring. Full control over time and work.
                  </p>
                </div>
                <div className="w-full h-48 sm:h-56 px-4 pb-5 md:px-6 md:pb-6 flex items-center justify-center">
                  <AnimFreedom isHovered={hovered === 3} />
                </div>
              </div>
            </BentoCard>

            <BentoCard
              className="md:col-span-5"
              index={4}
              isInView={isInView}
              onHover={() => setHovered(4)}
              onLeave={() => setHovered(null)}
            >
              <div className="flex flex-col items-center justify-center p-7 md:p-8 h-full text-center">
                <span className="text-5xl md:text-6xl font-semibold tracking-tighter block mb-2">
                  4 weeks
                </span>
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3">
                  One cycle. One product.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Every cycle feeds the next — better tools, cleaner code, faster
                  execution. The results don&apos;t add up, they{" "}
                  <em className="text-foreground font-medium not-italic">
                    compound
                  </em>
                </p>
              </div>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
