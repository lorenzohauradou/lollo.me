"use client"

import { motion } from "framer-motion"

const blocks = [
  { x: 24, y: 12, label: "mtg", dx: -22, dy: -16 },
  { x: 43, y: 12, label: "call", dx: 0, dy: -22 },
  { x: 62, y: 12, label: "ddl", dx: 22, dy: -16 },
  { x: 24, y: 31, label: "rpt", dx: -28, dy: 0 },
  { x: 62, y: 31, label: "rev", dx: 28, dy: 0 },
  { x: 24, y: 50, label: "sync", dx: -22, dy: 16 },
  { x: 43, y: 50, label: "upd", dx: 0, dy: 22 },
  { x: 62, y: 50, label: "chk", dx: 22, dy: 16 },
]

export function AnimFreedom({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 78" className="w-full h-full" fill="none">
      {blocks.map((block, i) => (
        <motion.g key={i}>
          <motion.rect
            x={block.x}
            y={block.y}
            width="15"
            height="15"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="0.7"
            fill="currentColor"
            className="text-foreground/[0.05]"
            animate={{
              x: isHovered ? block.x + block.dx : block.x,
              y: isHovered ? block.y + block.dy : block.y,
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.2 : 1,
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: "easeOut",
            }}
          />
          <motion.text
            x={block.x + 7.5}
            y={block.y + 9.5}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor"
            className="text-foreground"
            style={{
              fontSize: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
            }}
            animate={{
              x: isHovered ? block.x + 7.5 + block.dx : block.x + 7.5,
              y: isHovered ? block.y + 9.5 + block.dy : block.y + 9.5,
              opacity: isHovered ? 0 : 0.18,
            }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            {block.label}
          </motion.text>
        </motion.g>
      ))}

      <motion.circle
        cx="50"
        cy="39"
        r="5"
        fill="currentColor"
        className="text-foreground"
        animate={{
          scale: isHovered ? [0, 1.2, 1] : 0,
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      />

      <motion.circle
        cx="50"
        cy="39"
        r="10"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        className="text-foreground"
        animate={{
          scale: isHovered ? [1, 1.6, 1] : 0,
          opacity: isHovered ? [0.25, 0, 0.25] : 0,
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      <motion.text
        x="50"
        y="56"
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground"
        style={{
          fontSize: "5.5px",
          fontWeight: 500,
          letterSpacing: "0.15em",
        }}
        animate={{ opacity: isHovered ? 0.35 : 0 }}
        transition={{ duration: 0.3, delay: 0.45 }}
      >
        FOCUS
      </motion.text>
    </svg>
  )
}
