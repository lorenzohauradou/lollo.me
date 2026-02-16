"use client"

import { motion } from "framer-motion"

const noiseDots = [
  { cx: 18, cy: 12 },
  { cx: 72, cy: 18 },
  { cx: 30, cy: 58 },
  { cx: 78, cy: 52 },
  { cx: 12, cy: 38 },
  { cx: 62, cy: 65 },
  { cx: 85, cy: 30 },
  { cx: 40, cy: 20 },
  { cx: 22, cy: 68 },
]

const target = { cx: 50, cy: 40 }

export function AnimTarget({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
      {noiseDots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="1.5"
          fill="currentColor"
          className="text-foreground/20"
          animate={{
            opacity: isHovered ? 0.04 : 0.2,
            scale: isHovered ? 0.5 : 1,
          }}
          transition={{ duration: 0.4, delay: i * 0.02 }}
        />
      ))}

      <motion.circle
        cx={target.cx}
        cy={target.cy}
        r="3.5"
        fill="currentColor"
        className="text-foreground"
        animate={{
          opacity: isHovered ? [0.5, 0.8, 0.5] : 0.15,
          scale: isHovered ? [1, 1.15, 1] : 1,
        }}
        transition={{
          duration: 1.8,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      <motion.circle
        cx={target.cx}
        cy={target.cy}
        r="10"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        className="text-foreground"
        animate={{
          r: isHovered ? [10, 16, 10] : 10,
          opacity: isHovered ? [0.2, 0, 0.2] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />

      <motion.line
        y1={target.cy}
        y2={target.cy}
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-foreground"
        animate={{
          x1: isHovered ? target.cx - 20 : 5,
          x2: isHovered ? target.cx + 20 : 95,
          opacity: isHovered ? 0.35 : 0.06,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.line
        x1={target.cx}
        x2={target.cx}
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-foreground"
        animate={{
          y1: isHovered ? target.cy - 20 : 2,
          y2: isHovered ? target.cy + 20 : 78,
          opacity: isHovered ? 0.35 : 0.06,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.circle
        cx={target.cx}
        cy={target.cy}
        r="12"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.5, delay: 0.15 }}
      />

      <motion.circle
        cx={target.cx}
        cy={target.cy}
        r="7"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 0.2 : 0,
        }}
        transition={{ duration: 0.4, delay: 0.25 }}
      />
    </svg>
  )
}
