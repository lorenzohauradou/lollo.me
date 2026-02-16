"use client"

import { motion } from "framer-motion"

const cx = 50
const cy = 40
const r = 26
const circumference = 2 * Math.PI * r

const ticks = [0, 90, 180, 270].map((angle) => {
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x1: cx + (r - 4) * Math.cos(rad),
    y1: cy + (r - 4) * Math.sin(rad),
    x2: cx + (r + 4) * Math.cos(rad),
    y2: cy + (r + 4) * Math.sin(rad),
  }
})

const weekPositions = [0, 90, 180, 270].map((angle) => {
  const rad = ((angle - 90) * Math.PI) / 180
  const lr = r + 11
  return {
    x: cx + lr * Math.cos(rad),
    y: cy + lr * Math.sin(rad),
  }
})

export function AnimSpeed({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 82" className="w-full h-full" fill="none">
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-foreground/[0.06]"
      />

      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-foreground/35"
        strokeDasharray={circumference}
        style={{
          rotate: "-90deg",
          transformOrigin: `${cx}px ${cy}px`,
        }}
        animate={{
          strokeDashoffset: isHovered ? 0 : circumference,
          opacity: isHovered ? 0.5 : 0.1,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {ticks.map((tick, i) => (
        <motion.line
          key={i}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/15"
          animate={{ opacity: isHovered ? 0.4 : 0.12 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
        />
      ))}

      {["W1", "W2", "W3", "W4"].map((label, i) => (
        <motion.text
          key={label}
          x={weekPositions[i].x}
          y={weekPositions[i].y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          className="text-foreground"
          style={{ fontSize: "5px", fontWeight: 500 }}
          animate={{ opacity: isHovered ? 0.35 : 0.12 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          {label}
        </motion.text>
      ))}

      <motion.path
        d="M44 40 L48 44 L56 36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/50"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: isHovered ? 1 : 0,
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{ duration: 0.35, delay: isHovered ? 1.05 : 0 }}
      />
    </svg>
  )
}
