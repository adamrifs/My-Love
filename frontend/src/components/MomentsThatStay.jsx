import { motion } from "framer-motion"

const moments = [
  {
    title: "It started quietly",
    text: "A conversation that felt different from the rest."
  },
  {
    title: "It grew naturally",
    text: "Without effort, without pretending — just real."
  },
  {
    title: "It stayed with me",
    text: "Even when everything else changed."
  },
  {
    title: "It still matters",
    text: "More than I ever expected."
  }
]

export default function MomentsThatStay() {
  return (
    <section className="relative min-h-screen bg-[#050505] px-6 py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 🌌 Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-rose-900/10 rounded-full blur-[140px]"
        />
      </div>

      {/* 🏷️ Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20 z-10"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] text-rose-400/40 mb-6">
          Moments
        </p>
        <h2 className="text-4xl md:text-6xl font-['Cormorant_Garamond'] font-light text-white">
          Some things <br />
          <span className="italic text-rose-200/80">never really leave us.</span>
        </h2>
      </motion.div>

      {/* 📱 Memory cards (mobile-friendly) */}
      <div className="relative z-10 w-full max-w-md flex flex-col gap-14">
        {moments.map((moment, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative bg-white/[0.03] border border-white/5 rounded-3xl px-6 py-8 backdrop-blur-sm"
          >
            {/* Soft glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

            <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white font-light mb-4">
              {moment.title}
            </h3>

            <p className="text-rose-100/60 text-sm md:text-base leading-relaxed">
              {moment.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🌙 Closing line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-xs uppercase tracking-[0.4em] text-white/20 z-10"
      >
        still here — still felt
      </motion.p>
    </section>
  )
}
