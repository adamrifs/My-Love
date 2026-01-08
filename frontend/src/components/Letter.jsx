import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Handwriting from "./Handwriting"

export default function Letter() {
    const containerRef = useRef(null)
    
    // Track scroll for 3D parallax and text reveal
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // 🌊 Parallax & Motion effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section 
            ref={containerRef} 
            className="min-h-screen flex items-center justify-center relative bg-black py-20 overflow-hidden"
        >
            {/* 🌌 Atmospheric Light Leak */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,182,193,0.08)_0%,transparent_70%)]" />
            </div>

            <motion.div
                style={{ 
                    y, 
                    opacity, 
                    rotateX,
                    perspective: 1000 
                }}
                className="relative z-10 w-full max-w-2xl px-6"
            >
                {/* 🧧 The "Letter" Vessel */}
                <div className="relative bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-16 shadow-2xl">
                    
                    {/* Decorative Corner Detail */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-500/10 to-transparent rounded-tr-[2rem] rounded-bl-full pointer-events-none" />

                    {/* 💌 Content Reveal */}
                    <div className="space-y-8 font-['Cormorant_Garamond'] text-xl md:text-2xl leading-relaxed text-rose-50/90">
                        
                        <motion.p
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                        >
                            I’m not here to reopen wounds or repeat old mistakes.
                        </motion.p>

                        <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                            className="h-px w-12 bg-rose-400/30 origin-left"
                        />

                        <motion.p
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="italic"
                        >
                            I’m here because what we shared mattered — <span className="text-white font-medium not-italic underline decoration-rose-500/40 underline-offset-8">deeply</span>.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                        >
                            And some feelings deserve honesty, even after silence.
                        </motion.p>
                    </div>

                    {/* ✍️ Signature Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="mt-16 flex flex-col items-end"
                    >
                        <div className="w-40 md:w-56 opacity-80 hover:opacity-100 transition-opacity">
                            <Handwriting />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-300/40 mr-4 mt-2">
                            With sincerity
                        </span>
                    </motion.div>
                </div>

                {/* Ambient Shadow/Glow below the card */}
                <div className="absolute -bottom-10 left-10 right-10 h-20 bg-rose-900/10 blur-[100px] -z-10" />
            </motion.div>
        </section>
    )
}