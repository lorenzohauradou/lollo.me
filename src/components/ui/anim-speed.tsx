"use client"

import { motion } from "framer-motion"

const cx = 60
const cy = 48
const outerR = 38
const innerR = 31
const midR = (innerR + outerR) / 2
const maxSpeed = 360

function pt(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: Math.round((cx + radius * Math.sin(rad)) * 100) / 100,
    y: Math.round((cy - radius * Math.cos(rad)) * 100) / 100,
  }
}

function speedAngle(speed: number) {
  return -135 + (speed / maxSpeed) * 270
}

function arc(startSpd: number, endSpd: number, r: number) {
  const s = pt(speedAngle(startSpd), r)
  const e = pt(speedAngle(endSpd), r)
  const diff = speedAngle(endSpd) - speedAngle(startSpd)
  return `M ${s.x.toFixed(2)} ${s.y.toFixed(2)} A ${r} ${r} 0 ${diff > 180 ? 1 : 0} 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`
}

const majors = Array.from({ length: 10 }, (_, i) => {
  const speed = i * 40
  const a = speedAngle(speed)
  const p1 = pt(a, innerR)
  const p2 = pt(a, outerR)
  const lbl = pt(a, outerR + 7)
  return {
    x1: p1.x, y1: p1.y,
    x2: p2.x, y2: p2.y,
    lx: lbl.x, ly: lbl.y,
    speed,
    red: speed >= 280,
  }
})

const minors = Array.from({ length: 46 }, (_, i) => {
  if (i % 5 === 0) return null
  const speed = (i / 45) * maxSpeed
  const a = speedAngle(speed)
  const p1 = pt(a, innerR + 3)
  const p2 = pt(a, outerR)
  return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, red: speed >= 280 }
}).filter(Boolean) as { x1: number; y1: number; x2: number; y2: number; red: boolean }[]

const logoY = cy + 20

export function AnimSpeed({ isHovered }: { isHovered: boolean }) {
  const idle = speedAngle(15)
  const active = speedAngle(340)

  return (
    <svg viewBox="0 0 120 108" className="w-full h-full" fill="none">
      <defs>
        <radialGradient id="tacho-glow" cx="50%" cy="42%" r="50%">
          <stop offset="0%" stopColor="#ff2800" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ff2800" stopOpacity="0" />
        </radialGradient>
        <clipPath id="ferrari-clip">
          <circle cx={cx} cy={logoY} r="10" />
        </clipPath>
      </defs>

      {/* Red glow on hover */}
      <motion.circle
        cx={cx} cy={cy} r={outerR + 12}
        fill="url(#tacho-glow)"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Base arc track */}
      <path
        d={arc(0, maxSpeed, midR)}
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        className="text-foreground/[0.04]"
      />

      {/* Red zone arc (280-360 km/h) */}
      <motion.path
        d={arc(280, maxSpeed, midR)}
        stroke="#ff2800"
        strokeWidth="7"
        animate={{ opacity: isHovered ? 0.25 : 0.04 }}
        transition={{ duration: 0.6, delay: isHovered ? 0.5 : 0 }}
      />

      {/* Major ticks */}
      {majors.map((t, i) => (
        <motion.line
          key={`M${i}`}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          strokeWidth={t.red ? "1.5" : "1"}
          stroke={t.red ? "#ff2800" : "currentColor"}
          className={t.red ? "" : "text-foreground/20"}
          animate={{ opacity: isHovered ? (t.red ? 0.9 : 0.5) : 0.12 }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
        />
      ))}

      {/* Speed numbers */}
      {majors.map((t, i) => (
        <motion.text
          key={`L${i}`}
          x={t.lx} y={t.ly}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={t.red ? "#ff2800" : "currentColor"}
          className={t.red ? "" : "text-foreground"}
          style={{ fontSize: "3.8px", fontWeight: 700 }}
          animate={{ opacity: isHovered ? (t.red ? 0.9 : 0.5) : 0.08 }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
        >
          {t.speed}
        </motion.text>
      ))}

      {/* Minor ticks */}
      {minors.map((t, i) => (
        <motion.line
          key={`m${i}`}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          strokeWidth="0.5"
          stroke={t.red ? "#ff2800" : "currentColor"}
          className={t.red ? "" : "text-foreground/15"}
          animate={{ opacity: isHovered ? (t.red ? 0.5 : 0.2) : 0.05 }}
          transition={{ duration: 0.2 }}
        />
      ))}

      {/* Needle */}
      <motion.g
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ rotate: isHovered ? active : idle }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <line
          x1={cx} y1={cy + 4}
          x2={cx} y2={cy - innerR + 3}
          stroke="#ff2800"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <polygon
          points={`${cx} ${cy - innerR + 1}, ${cx - 1.5} ${cy - innerR + 5}, ${cx + 1.5} ${cy - innerR + 5}`}
          fill="#ff2800"
        />
      </motion.g>

      {/* Center hub */}
      <motion.circle
        cx={cx} cy={cy} r="3.5"
        fill="none" stroke="#ff2800" strokeWidth="1"
        animate={{ opacity: isHovered ? 0.6 : 0.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx={cx} cy={cy} r="2"
        fill="#ff2800"
        animate={{ opacity: isHovered ? 0.9 : 0.15 }}
        transition={{ duration: 0.3 }}
      />

      {/* km/h label */}
      <motion.text
        x={cx} y={cy + 10}
        textAnchor="middle"
        fill="currentColor"
        className="text-foreground"
        style={{ fontSize: "3.2px", letterSpacing: "0.8px", fontWeight: 600 }}
        animate={{ opacity: isHovered ? 0.35 : 0.06 }}
        transition={{ duration: 0.3 }}
      >
        km/h
      </motion.text>

      {/* Ferrari logo - below gauge */}
      <motion.circle
        cx={cx} cy={logoY}
        r="10"
        fill="#FEDD00"
        animate={{ opacity: isHovered ? 0.95 : 0.08 }}
        transition={{ duration: 0.5, delay: isHovered ? 0.2 : 0 }}
      />
      <motion.circle
        cx={cx} cy={logoY}
        r="12"
        fill="none" stroke="#FEDD00" strokeWidth="0.4"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.6, delay: isHovered ? 0.3 : 0 }}
      />
      <motion.image
        href="/ferrari.png"
        x={cx - 14}
        y={logoY - 10}
        width="28"
        height="20"
        clipPath="url(#ferrari-clip)"
        preserveAspectRatio="xMidYMid slice"
        animate={{ opacity: isHovered ? 1 : 0.06 }}
        transition={{ duration: 0.5, delay: isHovered ? 0.2 : 0 }}
      />
    </svg>
  )
}
