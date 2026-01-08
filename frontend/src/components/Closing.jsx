import { motion } from "framer-motion"
import Signature from "../components/Signature"

export default function Closing() {
  return (
    <motion.section
      className="min-h-[80vh] flex flex-col items-center justify-center bg-[#050505] text-center px-8 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="space-y-12"
      >
        <p className="text-rose-100/60 font-['Cormorant_Garamond'] italic text-2xl md:text-3xl max-w-md leading-relaxed">
          Whatever you choose — <br />
          thank you for reading my heart.
        </p>

        <div className="w-48 md:w-64 mx-auto opacity-80 scale-110">
          <Signature />
        </div>
      </motion.div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-900/10 to-transparent pointer-events-none" />
    </motion.section>
  )
}