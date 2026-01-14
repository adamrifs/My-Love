import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Thoughts() {
    const prefersReducedMotion = useReducedMotion()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    if (prefersReducedMotion) return null

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#050505] px-6 py-24 overflow-hidden">

            {/* 🌌 Atmospheric Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft pulsing light (static on mobile) */}
                <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={
                        isMobile
                            ? { opacity: 0.4 }
                            : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }
                    }
                    transition={
                        isMobile
                            ? {}
                            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]"
                />

                {/* Accent radial light (static = fast) */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,100,100,0.02),transparent_50%)]" />
            </div>

            {/* 🎞️ Film Grain → disabled on mobile */}
            {!isMobile && (
                <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay" />
            )}

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.9 : 1.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 max-w-3xl w-full"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="text-rose-400/50 text-[10px] uppercase tracking-[0.5em] mb-4 block"
                    >
                        A Quiet Reflection
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: isMobile ? 1 : 2, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-['Cormorant_Garamond'] font-light text-white leading-tight"
                    >
                        There are things <br />
                        <span className="italic text-rose-200/80">
                            I’ve been wanting to say.
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "50px" }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="h-px bg-rose-500/30 mx-auto mt-10"
                    />
                </div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: isMobile ? 1 : 2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative"
                    style={{
                        backdropFilter: isMobile ? "none" : "blur(4px)"
                    }}
                >
                    {/* Inner glow stays visual */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                    <div className="font-['Cormorant_Garamond'] text-xl md:text-2xl leading-relaxed text-rose-50/80 space-y-2">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1 }}
                            viewport={{ once: true }}
                        >
                         
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1.4 }}
                            viewport={{ once: true }}
                            className="text-rose-100/60 font-semibold"
                        >
                            Not to reopen the past, but to speak honestly calmly, clearly, and with respect
                            about what still matters to me.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Closing Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.4, delay: 2 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-white/20 font-light text-xs tracking-[0.4em] uppercase">
                        Whenever you're ready
                    </p>
                </motion.div>
            </motion.div>

            {/* Side decorations (static = cheap) */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-900/5 rounded-full blur-[100px]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-900/5 rounded-full blur-[100px]" />
        </section>
    )
}
