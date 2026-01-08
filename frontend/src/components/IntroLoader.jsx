import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroLoader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 2600)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.6, delay: 1.2 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-white/80 font-light tracking-widest"
      >
        For someone who once meant everything…
      </motion.p>
    </motion.div>
  )
}
