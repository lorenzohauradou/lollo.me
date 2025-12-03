"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const codeLines = [
    { type: "comment", content: "# viral post generator" },
    { type: "keyword", content: "import " },
    { type: "module", content: "openai" },
    { type: "newline", content: "" },
    { type: "keyword", content: "from " },
    { type: "module", content: "config " },
    { type: "keyword", content: "import " },
    { type: "variable", content: "API_KEY" },
    { type: "newline", content: "" },
    { type: "newline", content: "" },
    { type: "keyword", content: "def " },
    { type: "function", content: "generate_post" },
    { type: "text", content: "(topic: str) -> str:" },
    { type: "newline", content: "" },
    { type: "indent", content: "    " },
    { type: "variable", content: "client" },
    { type: "text", content: " = openai.OpenAI(api_key=API_KEY)" },
    { type: "newline", content: "" },
    { type: "newline", content: "" },
    { type: "indent", content: "    " },
    { type: "variable", content: "response" },
    { type: "text", content: " = client.chat.completions.create(" },
    { type: "newline", content: "" },
    { type: "indent", content: "        " },
    { type: "param", content: "model" },
    { type: "text", content: "=" },
    { type: "string", content: '"gpt-4"' },
    { type: "text", content: "," },
    { type: "newline", content: "" },
    { type: "indent", content: "        " },
    { type: "param", content: "messages" },
    { type: "text", content: "=[{" },
    { type: "newline", content: "" },
    { type: "indent", content: "            " },
    { type: "string", content: '"role"' },
    { type: "text", content: ": " },
    { type: "string", content: '"user"' },
    { type: "text", content: "," },
    { type: "newline", content: "" },
    { type: "indent", content: "            " },
    { type: "string", content: '"content"' },
    { type: "text", content: ": f" },
    { type: "string", content: '"Make this viral: {topic}"' },
    { type: "newline", content: "" },
    { type: "indent", content: "        " },
    { type: "text", content: "}]" },
    { type: "newline", content: "" },
    { type: "indent", content: "    " },
    { type: "text", content: ")" },
    { type: "newline", content: "" },
    { type: "newline", content: "" },
    { type: "indent", content: "    " },
    { type: "keyword", content: "return " },
    { type: "variable", content: "response" },
    { type: "text", content: ".choices[0].message.content" },
]

const typeColors: Record<string, string> = {
    comment: "text-white/30",
    keyword: "text-[#00ff41]/80",
    module: "text-[#00ff41]",
    variable: "text-white/70",
    function: "text-white/90",
    param: "text-white/50",
    string: "text-[#98c379]",
    text: "text-white/60",
    indent: "text-transparent",
    newline: "",
}

function CodeAnimation() {
    const [visibleChars, setVisibleChars] = useState(0)
    const totalChars = codeLines.reduce((acc, line) => acc + line.content.length, 0)

    useEffect(() => {
        if (visibleChars < totalChars) {
            const timeout = setTimeout(() => {
                setVisibleChars(prev => prev + 1)
            }, 25)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setVisibleChars(0)
            }, 4000)
            return () => clearTimeout(timeout)
        }
    }, [visibleChars, totalChars])

    let charCount = 0
    return (
        <div className="font-mono text-xs leading-relaxed">
            {codeLines.map((line, lineIndex) => {
                const lineStart = charCount
                charCount += line.content.length
                const visibleContent = line.content.slice(0, Math.max(0, visibleChars - lineStart))

                if (line.type === "newline") {
                    return <br key={lineIndex} />
                }

                return (
                    <span key={lineIndex} className={typeColors[line.type]}>
                        {visibleContent}
                    </span>
                )
            })}
            <motion.span
                className="inline-block w-1.5 h-3.5 bg-[#00ff41] ml-0.5"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
            />
        </div>
    )
}

export default function Playground() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const sampleOutputs = [
        "I spent 6 months building this.\n\nNot because it was hard.\nBut because I kept restarting.\n\nHere's what I learned:\n\n→ Ship fast, iterate faster\n→ Perfect is the enemy of done\n→ Your first version will suck\n\nAnd that's okay.",
        "Stop building features.\nStart solving problems.\n\nYour users don't care about:\n• Your tech stack\n• Your animations\n• Your architecture\n\nThey care about:\n→ Does it work?\n→ Does it save time?\n→ Is it reliable?\n\nSimplicity wins.",
        "The secret to viral content?\n\nIt's not algorithms.\nIt's not timing.\nIt's not hashtags.\n\nIt's this:\n\n→ Say one thing\n→ Say it clearly\n→ Make them feel something\n\nThat's it. That's the thread.",
    ]

    const handleGenerate = () => {
        if (!input.trim()) return
        setIsGenerating(true)
        setOutput("")

        const randomOutput = sampleOutputs[Math.floor(Math.random() * sampleOutputs.length)]
        let charIndex = 0

        const typeWriter = setInterval(() => {
            if (charIndex < randomOutput.length) {
                setOutput(randomOutput.slice(0, charIndex + 1))
                charIndex++
            } else {
                clearInterval(typeWriter)
                setIsGenerating(false)
            }
        }, 15)
    }

    return (
        <section className="relative py-20 bg-[#050505] overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#1a1a1a] bg-[#0a0a0a] mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">playground</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-white/90 mb-2">test_the_engine</h2>
                    <p className="text-white/40 text-sm font-mono">try the generator. free. no signup.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="rounded border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1a1a1a] bg-[#0f0f0f]">
                                <div className="flex gap-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
                                </div>
                                <span className="text-[10px] font-mono text-white/30 ml-2">generator.py</span>
                            </div>
                            <div className="p-5 min-h-[280px]">
                                <CodeAnimation />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-3"
                    >
                        <div className="rounded border border-[#1a1a1a] bg-[#0a0a0a] p-4">
                            <label className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-2 block">
                                input_topic
                            </label>
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="how i learned to code in 30 days..."
                                className="w-full bg-transparent text-white/80 placeholder:text-white/20 resize-none focus:outline-none text-sm font-mono leading-relaxed"
                                rows={3}
                            />
                        </div>

                        <motion.button
                            onClick={handleGenerate}
                            disabled={isGenerating || !input.trim()}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full py-3 px-4 rounded border font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                            style={{
                                background: isGenerating ? 'transparent' : '#00ff41',
                                borderColor: '#00ff41',
                                color: isGenerating ? '#00ff41' : '#000',
                            }}
                        >
                            {isGenerating ? (
                                <>
                                    <motion.div
                                        className="w-3 h-3 border border-[#00ff41] border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                    <span>generating...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span>generate_post()</span>
                                </>
                            )}
                        </motion.button>

                        <AnimatePresence>
                            {output && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="rounded border border-[#1a1a1a] bg-[#0a0a0a] p-4"
                                >
                                    <label className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-2 block">
                                        output
                                    </label>
                                    <p className="text-white/70 text-sm font-mono whitespace-pre-wrap leading-relaxed">
                                        {output}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-center text-[10px] font-mono text-white/30"
                        >
                            like it? <span className="text-[#00ff41]/60">source code in ai_automation_stack</span>
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
