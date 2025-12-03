"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const commands = [
    { cmd: "whoami", output: "lorenzo_hauradou" },
    { cmd: "cat skills.txt", output: "next.js, react, typescript, python, supabase, stripe, n8n, ai/ml" },
    { cmd: "ls -la projects/", output: "centralseo/ appuntoai/ snapscreen/ waibe/ [+12 more]" },
]

function TerminalLine({ command, delay }: { command: typeof commands[0]; delay: number }) {
    const [showCmd, setShowCmd] = useState(false)
    const [showOutput, setShowOutput] = useState(false)
    const [typedCmd, setTypedCmd] = useState("")

    useEffect(() => {
        const showTimer = setTimeout(() => setShowCmd(true), delay)
        return () => clearTimeout(showTimer)
    }, [delay])

    useEffect(() => {
        if (!showCmd) return
        let i = 0
        const typeTimer = setInterval(() => {
            if (i < command.cmd.length) {
                setTypedCmd(command.cmd.slice(0, i + 1))
                i++
            } else {
                clearInterval(typeTimer)
                setTimeout(() => setShowOutput(true), 150)
            }
        }, 40)
        return () => clearInterval(typeTimer)
    }, [showCmd, command.cmd])

    if (!showCmd) return null

    return (
        <div className="font-mono text-xs mb-2">
            <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">$</span>
                <span className="text-white/70">{typedCmd}</span>
                {!showOutput && (
                    <motion.span
                        className="w-1.5 h-3 bg-[#00ff41] inline-block"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                )}
            </div>
            {showOutput && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/40 ml-4 mt-1"
                >
                    {command.output}
                </motion.div>
            )}
        </div>
    )
}

export default function RootAccess() {
    const [currentTime, setCurrentTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setCurrentTime(now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            }))
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <footer className="relative py-16 bg-[#030303] overflow-hidden border-t border-[#1a1a1a]">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="rounded border border-[#1a1a1a] bg-[#0a0a0a]/80 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-[#1a1a1a] bg-[#0f0f0f]">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
                                </div>
                                <span className="text-[10px] font-mono text-white/30 ml-2">root@lollo:~/contact</span>
                            </div>
                            <span className="text-[10px] font-mono text-white/20">{currentTime}</span>
                        </div>

                        <div className="p-5">
                            <div className="text-[10px] font-mono text-white/20 mb-4">
                                last login: {new Date().toLocaleDateString()} on ttys001
                            </div>

                            {commands.map((cmd, i) => (
                                <TerminalLine key={i} command={cmd} delay={i * 1200} />
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4 }}
                                className="pt-5 mt-5 border-t border-[#1a1a1a]"
                            >
                                <div className="font-mono text-xs mb-4">
                                    <span className="text-[#00ff41]">$</span>
                                    <span className="text-white/50 ml-2">./connect.sh</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-3">
                                    <motion.a
                                        href="mailto:lorenzooradu@gmail.com"
                                        whileHover={{ x: 2 }}
                                        className="group flex items-center gap-3 p-4 rounded border border-[#1a1a1a] bg-[#0f0f0f]/50 hover:border-[#00ff41]/30 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded bg-[#00ff41]/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-[#00ff41]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-white/30 font-mono">&gt; initiate_collab</div>
                                            <div className="text-white/70 text-sm font-mono">lorenzooradu@gmail.com</div>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href="https://twitter.com/TECHLOLLO"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 2 }}
                                        className="group flex items-center gap-3 p-4 rounded border border-[#1a1a1a] bg-[#0f0f0f]/50 hover:border-[#00ff41]/30 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded bg-[#00ff41]/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-[#00ff41]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-white/30 font-mono">&gt; follow_signal</div>
                                            <div className="text-white/70 text-sm font-mono">@TECHLOLLO</div>
                                        </div>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] font-mono"
                    >
                        <div className="flex items-center gap-3 text-white/30">
                            <Link href="/" className="hover:text-[#00ff41] transition-colors">
                                cd ~/main
                            </Link>
                            <span className="text-white/10">|</span>
                            <span>v1.0.0</span>
                        </div>
                        <div className="text-white/20">
                            © {new Date().getFullYear()} lorenzo_hauradou // all_systems_operational
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}
