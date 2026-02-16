"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const tabs = [
  { project: "shared", file: "yt_downloader.py" },
  { project: "appuntoai", file: "app.py" },
  { project: "swipe-carousel", file: "app.py" },
]

const kw = "text-[#ff7b72]"
const fn = "text-[#d2a8ff]"
const st = "text-[#a5d6ff]"
const tp = "text-[#79c0ff]"
const vr = "text-[#c9d1d9]"
const cm = "text-[#484f58]"
const dc = "text-[#ffa657]"
const tx = "text-[#e6edf3]"

function L({
  n,
  children,
  indent = 0,
}: {
  n: number
  children?: React.ReactNode
  indent?: number
}) {
  return (
    <div className="flex whitespace-pre leading-[1.7]">
      <span className="w-7 text-right pr-3 text-[#484f58]/60 select-none shrink-0 text-[10px]">
        {n}
      </span>
      <span className={tx}>
        {"  ".repeat(indent)}
        {children}
      </span>
    </div>
  )
}

function ModuleCode() {
  return (
    <>
      <L n={42}>
        <span className={kw}>def</span>{" "}
        <span className={fn}>download_youtube_transcript</span>(
        <span className={vr}>youtube_url</span>:{" "}
        <span className={tp}>str</span>) {"->"}
        {" "}<span className={tp}>tuple</span>[<span className={tp}>str</span>,{" "}
        <span className={tp}>str</span>]:
      </L>
      <L n={43} indent={1}>
        <span className={vr}>video_id</span> ={" "}
        <span className={fn}>extract_video_id</span>(
        <span className={vr}>youtube_url</span>)
      </L>
      <L n={44} />
      <L n={45} indent={1}>
        <span className={vr}>proxies_dict</span> ={" "}
        <span className={fn}>get_proxies</span>()
      </L>
      <L n={46} indent={1}>
        <span className={vr}>proxy_config</span> ={" "}
        <span className={tp}>None</span>
      </L>
      <L n={47} />
      <L n={48} indent={1}>
        <span className={kw}>if</span>{" "}
        <span className={vr}>proxies_dict</span>:
      </L>
      <L n={49} indent={2}>
        <span className={vr}>proxy_config</span> ={" "}
        <span className={tp}>GenericProxyConfig</span>(
      </L>
      <L n={50} indent={3}>
        <span className={vr}>http_url</span>=
        <span className={vr}>proxies_dict</span>[
        <span className={st}>&apos;http&apos;</span>],
      </L>
      <L n={51} indent={3}>
        <span className={vr}>https_url</span>=
        <span className={vr}>proxies_dict</span>[
        <span className={st}>&apos;https&apos;</span>]
      </L>
      <L n={52} indent={2}>)</L>
      <L n={53} />
      <L n={54} indent={1}>
        <span className={vr}>ytt_api</span> ={" "}
        <span className={tp}>YouTubeTranscriptApi</span>(
        <span className={vr}>proxy_config</span>=
        <span className={vr}>proxy_config</span>)
      </L>
      <L n={55} indent={1}>
        <span className={vr}>transcript_list</span> ={" "}
        <span className={vr}>ytt_api</span>.
        <span className={fn}>list</span>(
        <span className={vr}>video_id</span>)
      </L>
      <L n={56} indent={1}>
        <span className={vr}>transcript</span> ={" "}
        <span className={vr}>transcript_list</span>.
        <span className={fn}>find_transcript</span>([
        <span className={st}>&apos;it&apos;</span>,{" "}
        <span className={st}>&apos;en&apos;</span>])
      </L>
      <L n={57} indent={1}>
        <span className={vr}>fetched</span> ={" "}
        <span className={vr}>transcript</span>.
        <span className={fn}>fetch</span>()
      </L>
      <L n={58} />
      <L n={59} indent={1}>
        <span className={kw}>return</span>{" "}
        <span className={st}>&quot; &quot;</span>.
        <span className={fn}>join</span>([
        <span className={vr}>s</span>.
        <span className={vr}>text</span>{" "}
        <span className={kw}>for</span>{" "}
        <span className={vr}>s</span>{" "}
        <span className={kw}>in</span>{" "}
        <span className={vr}>fetched</span>]),{" "}
        <span className={vr}>video_id</span>
      </L>
    </>
  )
}

function AppuntoaiCode() {
  return (
    <>
      <L n={1}>
        <span className={kw}>from</span>{" "}
        <span className={vr}>fastapi</span>{" "}
        <span className={kw}>import</span>{" "}
        <span className={tp}>FastAPI</span>,{" "}
        <span className={tp}>HTTPException</span>
      </L>
      <L n={2}>
        <span className={kw}>from</span>{" "}
        <span className={vr}>shared.yt_downloader</span>{" "}
        <span className={kw}>import</span>{" "}
        <span className={fn}>download_youtube_transcript</span>
      </L>
      <L n={3} />
      <L n={4}>
        <span className={vr}>app</span> ={" "}
        <span className={tp}>FastAPI</span>()
      </L>
      <L n={5} />
      <L n={6}>
        <span className={dc}>@app.post</span>(
        <span className={st}>&quot;/api/transcribe&quot;</span>)
      </L>
      <L n={7}>
        <span className={kw}>async def</span>{" "}
        <span className={fn}>transcribe_video</span>(
        <span className={vr}>req</span>:{" "}
        <span className={tp}>TranscribeRequest</span>):
      </L>
      <L n={8} indent={1}>
        <span className={kw}>try</span>:
      </L>
      <L n={9} indent={2}>
        <span className={vr}>transcript</span>,{" "}
        <span className={vr}>title</span> ={" "}
        <span className={fn}>download_youtube_transcript</span>(
      </L>
      <L n={10} indent={3}>
        <span className={vr}>req</span>.
        <span className={vr}>youtube_url</span>
      </L>
      <L n={11} indent={2}>)</L>
      <L n={12} indent={2}>
        <span className={kw}>return</span>{" "}
        {"{"}
        <span className={st}>&quot;transcript&quot;</span>:{" "}
        <span className={vr}>transcript</span>,{" "}
        <span className={st}>&quot;title&quot;</span>:{" "}
        <span className={vr}>title</span>
        {"}"}
      </L>
      <L n={13} indent={1}>
        <span className={kw}>except</span>{" "}
        <span className={tp}>ValueError</span>{" "}
        <span className={kw}>as</span>{" "}
        <span className={vr}>e</span>:
      </L>
      <L n={14} indent={2}>
        <span className={kw}>raise</span>{" "}
        <span className={tp}>HTTPException</span>(
        <span className={vr}>status_code</span>=
        <span className={st}>400</span>,{" "}
        <span className={vr}>detail</span>=
        <span className={fn}>str</span>(
        <span className={vr}>e</span>))
      </L>
    </>
  )
}

function SwipeCarouselCode() {
  return (
    <>
      <L n={1}>
        <span className={kw}>from</span>{" "}
        <span className={vr}>fastapi</span>{" "}
        <span className={kw}>import</span>{" "}
        <span className={tp}>FastAPI</span>
      </L>
      <L n={2}>
        <span className={kw}>from</span>{" "}
        <span className={vr}>shared.yt_downloader</span>{" "}
        <span className={kw}>import</span>{" "}
        <span className={fn}>download_youtube_transcript</span>
      </L>
      <L n={3} />
      <L n={4}>
        <span className={vr}>app</span> ={" "}
        <span className={tp}>FastAPI</span>()
      </L>
      <L n={5} />
      <L n={6}>
        <span className={dc}>@app.post</span>(
        <span className={st}>&quot;/api/generate-carousel&quot;</span>)
      </L>
      <L n={7}>
        <span className={kw}>async def</span>{" "}
        <span className={fn}>generate_carousel</span>(
        <span className={vr}>req</span>:{" "}
        <span className={tp}>CarouselRequest</span>):
      </L>
      <L n={8} indent={1}>
        <span className={vr}>transcript</span>, _ ={" "}
        <span className={fn}>download_youtube_transcript</span>(
      </L>
      <L n={9} indent={2}>
        <span className={vr}>req</span>.
        <span className={vr}>video_url</span>
      </L>
      <L n={10} indent={1}>)</L>
      <L n={11} indent={1}>
        <span className={vr}>slides</span> ={" "}
        <span className={kw}>await</span>{" "}
        <span className={fn}>generate_slides_from_text</span>(
        <span className={vr}>transcript</span>)
      </L>
      <L n={12} indent={1}>
        <span className={kw}>return</span>{" "}
        {"{"}
        <span className={st}>&quot;slides&quot;</span>:{" "}
        <span className={vr}>slides</span>,{" "}
        <span className={st}>&quot;count&quot;</span>:{" "}
        <span className={fn}>len</span>(
        <span className={vr}>slides</span>)
        {"}"}
      </L>
    </>
  )
}

const codeComponents = [ModuleCode, AppuntoaiCode, SwipeCarouselCode]

export function CodeEditor() {
  const [activeTab, setActiveTab] = useState(0)
  const ActiveCode = codeComponents[activeTab]

  return (
    <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-[#21262d] shadow-2xl shadow-black/30">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#010409]">
        <div className="flex gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]/70" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]/70" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]/70" />
        </div>
        <span className="text-[10px] text-[#484f58] font-mono truncate">
          {tabs[activeTab].project}/{tabs[activeTab].file}
        </span>
        <div className="w-12" />
      </div>

      {/* Tab bar */}
      <div className="flex bg-[#010409] border-b border-[#21262d] overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-1.5 px-3 py-[5px] text-[10px] font-mono whitespace-nowrap transition-all border-b-2 ${
              activeTab === i
                ? "bg-[#0d1117] text-[#c9d1d9] border-b-[#f78166]"
                : "text-[#484f58] hover:text-[#8b949e] border-b-transparent hover:bg-[#0d1117]/50"
            }`}
          >
            <span className="w-[12px] h-[12px] rounded-[2px] bg-[#3572A5]/60 shrink-0" />
            <span className={activeTab === i ? "text-[#8b949e]" : ""}>
              {tab.project}/
            </span>
            <span>{tab.file}</span>
          </button>
        ))}
      </div>

      {/* Code area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="p-3 overflow-x-auto scrollbar-hide max-h-[280px]"
        >
          <pre className="font-mono text-[10.5px]">
            <ActiveCode />
          </pre>
        </motion.div>
      </AnimatePresence>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-[3px] bg-[#010409] border-t border-[#21262d] text-[9px] font-mono text-[#484f58]">
        <div className="flex items-center gap-3">
          <span>Python</span>
          <span>UTF-8</span>
        </div>
        <span>
          Reused across {tabs.length}+ projects
        </span>
      </div>
    </div>
  )
}
