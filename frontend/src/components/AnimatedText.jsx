import { motion } from "framer-motion"
import { letterReveal } from "../animations/variants"

export default function AnimatedText({ text, className = "" }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterReveal}
          initial="hidden"
          animate="visible"
          className={className}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
