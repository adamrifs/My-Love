import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { getName } from "../utils/useName"

export default function ConstellationName() {
  const name = getName()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[80] pointer-events-none flex items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-light tracking-widest text-rose-200/60"
      >
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.25,
              duration: 1.2
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  )
}
