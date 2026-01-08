import { motion, useScroll, useTransform } from "framer-motion"

export default function HeartbeatOverlay() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.04, 0.08, 0.12])

  return (
    <motion.div
      style={{ scale, opacity }}
      className="fixed inset-0 z-[5] bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.25),transparent_70%)] pointer-events-none"
    />
  )
}
