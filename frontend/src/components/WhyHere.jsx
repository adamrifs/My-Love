import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function WhyHere() {
  const containerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-8"
    >
      {/* 🌌 Atmospheric Cinematic Light */}
      <motion.div
        initial={{ y: "-20%" }}
        whileInView={{ y: "20%" }}
        transition={{
          duration: isMobile ? 1.2 : 3,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[140px] opacity-60" />
      </motion.div>

      {/* 🎞️ Film Grain (static on mobile) */}
      {!isMobile && (
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0.8 : 1.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl text-center space-y-16"
      >
        {/* Reflection */}
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="block text-rose-400/40 text-[10px] uppercase tracking-[0.5em] mb-6"
          >
            A Promise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-rose-100/60 font-['Cormorant_Garamond'] italic font-light tracking-wide"
          >
            "Not to repeat the past…"
          </motion.h2>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent mx-auto"
        />

        {/* Vision */}
        <div className="relative">
          <div className="absolute inset-0 bg-rose-500/5 blur-[80px] rounded-full -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl text-white font-serif font-extralight leading-[1.1] tracking-tight"
          >
            But to rewrite <br />
            <span className="relative inline-block mt-4 italic text-rose-200">
              the future together.
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.6, delay: 1.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 left-0 h-[1px] bg-rose-400/20"
              />
            </span>
          </motion.h1>
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 2 }}
          viewport={{ once: true }}
          className="text-rose-100/20 font-light text-sm tracking-[0.4em] uppercase pt-12"
        >
          with nothing but honesty.
        </motion.p>
      </motion.div>

      {/* Side Decorations (static = fast) */}
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-rose-950/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-purple-950/20 rounded-full blur-[100px]" />
    </section>
  )
}
