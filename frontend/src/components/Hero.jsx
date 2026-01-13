import { motion, useReducedMotion } from "framer-motion"
import { getName } from "../utils/useName"
import { useRef } from "react"

export default function Hero() {
  const name = getName()
  const prefersReducedMotion = useReducedMotion()

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768

  if (prefersReducedMotion) {
    return (
      <section className="h-screen flex items-center justify-center bg-black">
        <h1 className="text-white text-4xl">Dearest {name}</h1>
      </section>
    )
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* 🌌 Background (static on mobile) */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isMobile ? 1 : 1.12 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(60,10,30,0.4),rgba(0,0,0,1))]"
      />

      {/* Ambient Light (desktop only) */}
      {!isMobile && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-900/20 rounded-full blur-[120px]"
        />
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-2xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5 }}
          className="block text-rose-300/50 font-serif italic text-lg md:text-xl mb-6 uppercase tracking-widest"
        >
          Dearest {name}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-['Cormorant_Garamond'] font-thin text-white leading-[1.1]"
        >
          Some stories <br />
          <span className="italic text-rose-100 underline decoration-rose-500/20 underline-offset-8">
            don’t end...
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent mx-auto my-12"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="text-rose-100/30 font-['Cormorant_Garamond'] text-sm md:text-base tracking-[0.4em] uppercase"
        >
          they just wait.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator (desktop only) */}
      {!isMobile && (
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            Scroll Slowly
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-rose-500/40 to-transparent" />
        </motion.div>
      )}
    </section>
  )
}
