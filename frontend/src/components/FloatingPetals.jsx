import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

export default function FloatingPetals() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const petals = useMemo(() => {
    const count = isMobile ? 6 : 14
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: isMobile ? 18 + Math.random() * 10 : 24 + Math.random() * 16,
      x: Math.random() * 100,
      drift: isMobile ? Math.random() * 40 - 20 : Math.random() * 120 - 60,
      duration: isMobile ? 18 + Math.random() * 10 : 28 + Math.random() * 12,
      delay: Math.random() * 6,
      opacity: isMobile ? 0.35 : 0.6
    }))
  }, [isMobile])

  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {petals.map(p => (
        <motion.div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            x: `${p.drift}px`,
            opacity: [0, p.opacity, p.opacity, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              d="M12 21s-7.5-4.35-10-8.55C-0.5 7.5 3 3 7.2 4.1 9.4 4.7 12 7 12 7s2.6-2.3 4.8-2.9C21 3 24.5 7.5 22 12.45 19.5 16.65 12 21 12 21z"
              fill="rgba(255,182,193,0.8)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
