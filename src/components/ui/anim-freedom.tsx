"use client"

import { motion } from "framer-motion"

const events = [
  { day: 0, startH: 0, dur: 1, label: "Standup", color: "#4285f4" },
  { day: 0, startH: 2, dur: 1.5, label: "Sprint Rev", color: "#34a853" },
  { day: 0, startH: 4.5, dur: 1, label: "Retro", color: "#9334e6" },
  { day: 1, startH: 0.5, dur: 2, label: "1:1 Meeting", color: "#9334e6" },
  { day: 1, startH: 3.5, dur: 1.5, label: "Code Rev", color: "#fa7b17" },
  { day: 2, startH: 0, dur: 1, label: "Standup", color: "#4285f4" },
  { day: 2, startH: 2, dur: 2, label: "All Hands", color: "#ea4335" },
  { day: 2, startH: 5, dur: 1, label: "Sync", color: "#4285f4" },
  { day: 3, startH: 1, dur: 1.5, label: "Design Rev", color: "#fa7b17" },
  { day: 3, startH: 3.5, dur: 1, label: "QA Sync", color: "#34a853" },
  { day: 4, startH: 0, dur: 1, label: "Standup", color: "#4285f4" },
  { day: 4, startH: 1.5, dur: 2.5, label: "Planning", color: "#34a853" },
  { day: 4, startH: 5, dur: 1, label: "Wrap-up", color: "#9334e6" },
]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
const times = ["9am", "10", "11", "12pm", "1", "2", "3"]

const GL = 18
const GT = 16
const CW = 26
const RH = 10

export function AnimFreedom({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 160 92" className="w-full h-full" fill="none">
      {/* Header background */}
      <rect
        x={GL}
        y={0}
        width={CW * 5}
        height={GT - 2}
        fill="currentColor"
        className="text-foreground/[0.02]"
      />

      {/* Day headers */}
      {days.map((day, i) => (
        <text
          key={day}
          x={GL + i * CW + CW / 2}
          y={10}
          textAnchor="middle"
          fill="currentColor"
          className="text-foreground"
          style={{ fontSize: "5px", fontWeight: 600, opacity: 0.35 }}
        >
          {day}
        </text>
      ))}

      {/* Time labels */}
      {times.map((t, i) => (
        <text
          key={i}
          x={GL - 2}
          y={GT + i * RH + 3}
          textAnchor="end"
          fill="currentColor"
          className="text-foreground"
          style={{ fontSize: "3.5px", opacity: 0.2 }}
        >
          {t}
        </text>
      ))}

      {/* Horizontal grid lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={GL}
          y1={GT + i * RH}
          x2={GL + 5 * CW}
          y2={GT + i * RH}
          stroke="currentColor"
          className="text-foreground/[0.08]"
          strokeWidth="0.4"
        />
      ))}

      {/* Vertical grid lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={GL + i * CW}
          y1={GT}
          x2={GL + i * CW}
          y2={GT + 7 * RH}
          stroke="currentColor"
          className="text-foreground/[0.08]"
          strokeWidth="0.4"
        />
      ))}

      {/* "Now" indicator line (Wednesday ~11am) */}
      <motion.line
        x1={GL + 2 * CW}
        y1={GT + 2 * RH}
        x2={GL + 3 * CW}
        y2={GT + 2 * RH}
        stroke="#ea4335"
        strokeWidth="0.6"
        animate={{ opacity: isHovered ? 0 : 0.5 }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx={GL + 2 * CW}
        cy={GT + 2 * RH}
        r="1.2"
        fill="#ea4335"
        animate={{ opacity: isHovered ? 0 : 0.6 }}
        transition={{ duration: 0.3 }}
      />

      {/* Calendar events */}
      {events.map((ev, i) => {
        const x = GL + ev.day * CW + 1.5
        const y = GT + ev.startH * RH + 0.8
        const w = CW - 3
        const h = ev.dur * RH - 1.5

        return (
          <motion.g key={i}>
            <motion.rect
              x={x}
              y={y}
              width={w}
              height={h}
              rx="1.5"
              fill={ev.color}
              animate={{
                opacity: isHovered ? 0 : 0.45,
                y: isHovered ? y - 6 : y,
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.025,
                ease: "easeOut",
              }}
            />
            <motion.rect
              x={x}
              y={y}
              width="1.2"
              height={h}
              rx="0.6"
              fill={ev.color}
              animate={{
                opacity: isHovered ? 0 : 0.9,
                y: isHovered ? y - 6 : y,
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.025,
                ease: "easeOut",
              }}
            />
            <motion.text
              x={x + 3}
              y={y + 5}
              fill="currentColor"
              className="text-foreground"
              style={{ fontSize: "3.5px", fontWeight: 500 }}
              animate={{
                opacity: isHovered ? 0 : 0.7,
                y: isHovered ? y + 5 - 6 : y + 5,
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.025,
              }}
            >
              {ev.label}
            </motion.text>
          </motion.g>
        )
      })}

      {/* Empty state on hover */}
      <motion.text
        x={GL + (5 * CW) / 2}
        y={GT + (7 * RH) / 2 - 2}
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground"
        style={{
          fontSize: "7px",
          fontWeight: 600,
          letterSpacing: "0.12em",
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          y: isHovered ? GT + (7 * RH) / 2 - 2 : GT + (7 * RH) / 2 + 4,
        }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        YOUR TIME
      </motion.text>
      <motion.text
        x={GL + (5 * CW) / 2}
        y={GT + (7 * RH) / 2 + 6}
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground"
        style={{ fontSize: "3.5px", letterSpacing: "0.05em" }}
        animate={{
          opacity: isHovered ? 0.15 : 0,
          y: isHovered ? GT + (7 * RH) / 2 + 6 : GT + (7 * RH) / 2 + 10,
        }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        no meetings, no calls, no BS
      </motion.text>
    </svg>
  )
}
