import { motion } from "framer-motion"

const thoughts = [
  "How much I’ve grown and learned since we last spoke.",
  "The things I wish I had said when I had the chance.",
  "What my days feel like without your laughter.",
  "The vision I have for a different, better tomorrow for us.",
  "Just... how much I still believe in 'us'."
]

export default function TalkingPoints() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050505] py-24 px-6 relative overflow-hidden">
      
      {/* 🌫️ Soft background glow to keep it cinematic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-rose-400/50 text-[10px] uppercase tracking-[0.5em] mb-4 block"
          >
            My Intentions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-light"
          >
            There is so much <span className="italic text-rose-200">on my mind...</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-rose-500/40 mx-auto mt-8"
          />
        </div>

        {/* The Talking Points List */}
        <div className="space-y-10">
          {thoughts.map((thought, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2, // Stagger effect
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start gap-6 group"
            >
              {/* Bullet Decoration */}
              {/* <div className="mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500/40 group-hover:bg-rose-400 transition-colors shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
              </div> */}

              {/* The Text - Made very clear and visible */}
              <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-rose-50/80 group-hover:text-white transition-colors duration-500 leading-relaxed tracking-wide">
                {thought}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Thought */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mt-20 text-center text-rose-200/40 font-serif italic text-lg"
        >
          ...whenever you're ready to listen.
        </motion.p>

      </div>
    </section>
  )
}