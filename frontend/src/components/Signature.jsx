import { motion } from "framer-motion"

export default function Signature() {
  const name = "Adam"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 flex flex-col items-center"
    >
      {/* Handwritten SVG */}
      <motion.svg
        viewBox="0 0 500 140"
        className="w-full max-w-sm"
      >
        <motion.path
          d="M20 90 
             Q 80 40 140 90 
             T 260 90 
             Q 320 60 380 90 
             T 480 90"
          fill="transparent"
          stroke="#fbcfe8"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 3.5,
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      {/* Name text (very soft, secondary) */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="mt-4 font-handwritten text-2xl text-rose-200"
      >
        — {name}
      </motion.p>
    </motion.div>
  )
}
