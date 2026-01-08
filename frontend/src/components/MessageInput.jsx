import { motion } from "framer-motion"
import { useState } from "react"

export default function MessageInput() {
    const [message, setMessage] = useState("")
    const [isSent, setIsSent] = useState(false)

    const handleSend = () => {
        if (message.trim()) {
            // Here you would typically integrate your backend or email service
            console.log("Message sent:", message)
            setIsSent(true)
        }
    }

    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center bg-[#050505] px-6 py-20 relative overflow-hidden">
            
            {/* 🌌 Atmospheric Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,100,0.03)_0%,transparent_70%)] pointer-events-none" />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-xl relative z-10 text-center"
            >
                <h2 className="text-rose-400/60 font-serif italic text-lg tracking-widest uppercase mb-8">
                    Enthenkilum nee ithiloode Ennod , ninte manasil ullath parayo...
                </h2>

                {!isSent ? (
                    <div className="space-y-6">
                        <div className="relative group">
                            {/* Animated Border/Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-2xl blur opacity-30 group-focus-within:opacity-100 transition duration-1000"></div>
                            
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Whatever is in your heart..."
                                className="relative w-full min-h-[150px] bg-black/40 border border-white/10 rounded-2xl p-6 text-rose-50 placeholder:text-rose-100/20 focus:outline-none focus:border-rose-500/30 transition-all font-['Cormorant_Garamond'] text-xl resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSend}
                            disabled={!message.trim()}
                            className="group relative px-12 py-4 rounded-full overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            {/* Button Heartbeat Background */}
                            <motion.div 
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-rose-600/30 blur-md"
                            />
                            
                            <span className="relative z-10 flex items-center gap-3 text-white font-light tracking-[0.2em] text-sm">
                                SEND CONFESSION
                                <motion.span 
                                    animate={{ x: [0, 5, 0] }} 
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </motion.button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10"
                    >
                        <p className="font-['Cormorant_Garamond'] text-3xl text-rose-200 italic">
                            "Your message has been safely kept."
                        </p>
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "40px" }}
                            className="h-px bg-rose-500/40 mx-auto mt-6"
                        />
                    </motion.div>
                )}
            </motion.div>
        </section>
    )
}