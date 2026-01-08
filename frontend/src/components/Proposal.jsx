import { motion } from "framer-motion"

export default function Proposal() {
    return (
        <motion.section className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-8 text-center relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,100,0.05)_0%,transparent_70%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 space-y-8"
            >
                <h2 className="text-rose-400/60 font-serif italic text-xl tracking-widest uppercase">The Question</h2>
                
                <h1 className="text-4xl md:text-6xl text-white font-['Cormorant_Garamond'] font-light leading-tight max-w-3xl">
                    Can we talk… <br />
                    <span className="italic text-rose-100/90">one last time?</span>
                </h1>

                <p className="text-rose-200/50 font-light text-lg tracking-wide max-w-md mx-auto">
                    Not to force anything. Just to feel what we had, once more.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {/* Primary Action */}
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-10 py-4 bg-rose-600/20 border border-rose-500/30 rounded-full text-white font-light tracking-widest overflow-hidden transition-all hover:bg-rose-600/40"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            YES, LET’S TALK <span className="text-rose-400 group-hover:scale-125 transition-transform">❤️</span>
                        </span>
                        <div className="absolute inset-0 bg-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>

                    {/* Secondary Action */}
                    <motion.button 
                        whileHover={{ opacity: 1 }}
                        className="px-10 py-4 text-white/40 hover:text-white/80 font-light tracking-widest transition-all"
                    >
                        I NEED TIME 🌙
                    </motion.button>
                </div>
            </motion.div>
        </motion.section>
    )
}