import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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
  },
//   { 
//     id: 4, 
//     text: "Maybe we needed this.", 
//     subtext: "To be apart, just to realize why we belong together.",
//     color: "from-rose-500/20"
//   }
]

const MemoryBlock = ({ data, index }) => {
    const containerRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Cinematic Text Parallax
    const y = useTransform(scrollYProgress, [0, 1], [80, -80])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const letterSpacing = useTransform(scrollYProgress, [0, 0.5, 1], ["0.1em", "0.02em", "0.1em"])

    return (
        <section ref={containerRef} className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Glow that follows the scroll */}
            <motion.div 
                style={{ opacity }}
                className={`absolute inset-0 bg-gradient-to-b ${data.color} to-transparent opacity-10 blur-3xl`}
            />

            <motion.div 
                style={{ y, opacity }}
                className="relative z-10 text-center px-8 max-w-4xl"
            >
                {/* Decorative Numbering */}
                <motion.span 
                    className="block text-rose-500/30 font-serif italic text-xl mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Memory 0{index + 1} */}
                </motion.span>

                {/* Main Headline with Letter Spacing Animation */}
                <motion.h2 
                    style={{ letterSpacing }}
                    className="font-['Cormorant_Garamond'] text-4xl md:text-7xl text-white font-light leading-tight mb-8"
                >
                    {data.text.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: i * 0.03 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>

                {/* Elegant Divider */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-[1px] w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-8"
                />

                {/* Subtext Reveal */}
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-['Cormorant_Garamond'] italic text-rose-100/60 text-lg md:text-2xl tracking-wide max-w-2xl mx-auto leading-relaxed"
                >
                    {data.subtext}
                </motion.p>
            </motion.div>
        </section>
    )
}

export default function Memories() {
  return (
    <div className="relative bg-[#050505] selection:bg-rose-500/30">
      
      {/* 🌌 Atmospheric Backdrop */}
      <div className="fixed inset-0 pointer-events-none">
          {/* Subtle moving grain */}
          <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-screen" />
          
          {/* Drifting Light Particles (Simulated by CSS) */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bg-rose-500/20 blur-[100px] rounded-full"
                    style={{
                        width: `${200 + i * 50}px`,
                        height: `${200 + i * 50}px`,
                        left: `${Math.random() * 80}%`,
                        top: `${Math.random() * 80}%`,
                    }}
                />
            ))}
          </div>
      </div>

      <div className="relative z-10 pt-20 pb-40">
        {/* Intro for the section */}
        <div className="text-center mb-20 px-6">
            <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.5em] text-rose-400/50 mb-4"
            >
                A collection of echoes
            </motion.h3>
            <div className="w-px h-16 bg-gradient-to-b from-rose-400/50 to-transparent mx-auto" />
        </div>

        {memories.map((memory, i) => (
          <MemoryBlock key={memory.id} data={memory} index={i} />
        ))}
      </div>

    </div>
  )
}