import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function MemoryRevealImage() {
  const containerRef = useRef(null)

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // 🔹 MOBILE-OPTIMIZED TRANSFORMS
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? [0.92, 1.02] : [0.85, 1.15]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [20, -20] : [60, -60]
  )

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? [18, 0] : [24, 0]
  )

  return (
    <section
      ref={containerRef}
      className={`
        relative
        ${isMobile ? "h-[120vh]" : "h-[160vh]"}
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
        px-6 md:px-12 lg:px-20
      `}
    >
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">

        <motion.img
          src="/memory.jpg"
          alt="A memory that stayed"
          style={{
            scale,
            y,
            borderRadius,
            willChange: "transform" // 🔥 GPU hint
          }}
          className="
            w-full
            max-w-4xl
            h-[70vh]
            object-cover
            shadow-xl
          "
        />

      </div>
    </section>
  )
}
