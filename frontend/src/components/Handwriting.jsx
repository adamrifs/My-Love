import { motion } from "framer-motion"

export default function Handwriting() {
  return (
    <motion.svg
      viewBox="0 0 500 120"
      className="w-full max-w-md mx-auto mt-8"
    >
      <motion.path
        d="M10 60 Q 120 10 240 60 T 480 60"
        fill="transparent"
        stroke="#f9a8d4"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </motion.svg>
  )
}
