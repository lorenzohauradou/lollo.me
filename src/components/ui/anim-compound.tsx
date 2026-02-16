"use client"

import { motion } from "framer-motion"

const dataPoints = [
  { x: 18, y: 56 },
  { x: 32, y: 53 },
  { x: 46, y: 46 },
  { x: 60, y: 34 },
  { x: 74, y: 18 },
  { x: 88, y: 4 },
]

export function AnimCompound({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 100 68" className="w-full h-full" fill="none">
      <motion.line
        x1="15"
        y1="4"
        x2="15"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-foreground"
        animate={{ opacity: isHovered ? 0.25 : 0.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="13"
        y1="58"
        x2="93"
        y2="58"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-foreground"
        animate={{ opacity: isHovered ? 0.25 : 0.1 }}
        transition={{ duration: 0.3 }}
      />

      {[18, 32, 46].map((y, i) => (
        <motion.line
          key={i}
          x1="15"
          y1={y}
          x2="92"
          y2={y}
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 4"
          className="text-foreground"
          animate={{ opacity: isHovered ? 0.12 : 0.04 }}
          transition={{ duration: 0.3 }}
        />
      ))}

      <motion.line
        x1="18"
        y1="56"
        x2="88"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isHovered ? 1 : 0.25,
          opacity: isHovered ? 0.2 : 0.08,
        }}
        transition={{ duration: 0.8 }}
      />

      <motion.path
        d="M 18 56 C 32 55, 42 50, 52 42 S 72 14, 88 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-foreground"
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: isHovered ? 1 : 0.15,
          opacity: isHovered ? 0.5 : 0.12,
        }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      {dataPoints.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="2.2"
          fill="currentColor"
          className="text-foreground"
          animate={{
            opacity: isHovered ? 0.5 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: isHovered ? 0.3 + i * 0.1 : 0,
          }}
        />
      ))}

      <motion.text
        x="54"
        y="66"
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground"
        style={{ fontSize: "5px", letterSpacing: "0.05em" }}
        animate={{ opacity: isHovered ? 0.3 : 0.1 }}
      >
        cycles
      </motion.text>

      <motion.text
        x="10"
        y="32"
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground"
        style={{
          fontSize: "4.5px",
          letterSpacing: "0.05em",
          writingMode: "vertical-rl",
        }}
        animate={{ opacity: isHovered ? 0.25 : 0.08 }}
      >
        results
      </motion.text>

      <motion.text
        x="90"
        y="38"
        textAnchor="end"
        fill="currentColor"
        className="text-foreground"
        style={{ fontSize: "4.5px" }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ delay: 0.6 }}
      >
        standard
      </motion.text>

      <motion.text
        x="80"
        y="10"
        textAnchor="end"
        fill="currentColor"
        className="text-foreground"
        style={{ fontSize: "5px", fontWeight: 600 }}
        animate={{ opacity: isHovered ? 0.45 : 0 }}
        transition={{ delay: 0.9 }}
      >
        compounding
      </motion.text>
    </svg>
  )
}
