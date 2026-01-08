import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function WhyHere() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"]
    })

    const bgAlpha = useTransform(scrollYProgress, [0.5, 1], ["rgba(10,0,10,1)", "rgba(40,10,20,1)"])
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

    return (
        <motion.section 
            ref={sectionRef}
            style={{ backgroundColor: bgAlpha }}
            className="min-h-screen flex items-center justify-center px-8 transition-colors duration-1000"
        >
            <motion.div style={{ scale }} className="text-center space-y-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-2xl md:text-4xl text-rose-100/60 font-['Cormorant_Garamond'] italic tracking-wide"
                >
                    "Not to repeat the past…"
                </motion.h2>

                <div className="relative py-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-rose-500/10 blur-[60px] rounded-full"
                    />
                    
                    <motion.h2
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="relative text-4xl md:text-6xl text-white font-serif font-light leading-tight"
                    >
                        But to rewrite <br />
                        <span className="text-rose-300 drop-shadow-[0_0_15px_rgba(255,150,150,0.3)]">
                            the future — together.
                        </span>
                    </motion.h2>
                </div>
            </motion.div>
        </motion.section>
    )
}