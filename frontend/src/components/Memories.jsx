import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState, useRef } from "react"

const memories = [
  {
    id: 1,
    text: "I never stopped caring.",
    subtext: "Even in the silence, you were loud in my mind.",
    color: "from-rose-400/20"
  },
  {
    id: 2,
    text: "Time passed...",
    subtext: "But my feelings stayed exactly where you left them.",
    color: "from-purple-400/20"
  },
  {
    id: 3,
    text: "I still see you.",
    subtext: "In every sunset, in every song, in everything beautiful.",
    color: "from-pink-400/20"
  }
]

const MemoryBlock = ({ data, index, isMobile }) => {
  const ref = useRef(null)

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow (static opacity on mobile) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: isMobile ? 0.15 : 0.3 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className={`absolute inset-0 bg-gradient-to-b ${data.color} to-transparent blur-3xl`}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: isMobile ? 0.8 : 1.4,
          ease: "easeOut"
        }}
        viewport={{ once: true, margin: "-120px" }}
        className="relative z-10 text-center px-8 max-w-4xl"
      >
        {/* Headline */}
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-7xl text-white font-light leading-tight mb-8">
          {data.text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: isMobile ? 0 : i * 0.03
              }}
              viewport={{ once: true }}
              style={{
                filter: isMobile ? "none" : "blur(0px)"
              }}
            >
              {char}
            </motion.span>
          ))}
        </h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          viewport={{ once: true }}
          className="h-[1px] w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-8"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-['Cormorant_Garamond'] italic text-rose-100/60 text-lg md:text-2xl tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          {data.subtext}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default function Memories() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Freeze blob positions (important)
  const blobs = useMemo(
    () =>
      [...Array(5)].map((_, i) => ({
        id: i,
        size: 200 + i * 50,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`
      })),
    []
  )

  if (prefersReducedMotion) return null

  return (
    <div className="relative bg-[#050505] selection:bg-rose-500/30">
      {/* Background atmosphere */}
      {!isMobile && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-screen" />

          {blobs.map(blob => (
            <motion.div
              key={blob.id}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 12 + blob.id * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bg-rose-500/20 blur-[100px] rounded-full"
              style={{
                width: blob.size,
                height: blob.size,
                left: blob.left,
                top: blob.top
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 pt-20 pb-40">
        {/* Section intro */}
        <div className="text-center mb-20 px-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] text-rose-400/50 mb-4"
          >
            A collection of echoes
          </motion.h3>
          <div className="w-px h-16 bg-gradient-to-b from-rose-400/50 to-transparent mx-auto" />
        </div>

        {memories.map((memory, i) => (
          <MemoryBlock
            key={memory.id}
            data={memory}
            index={i}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  )
}
