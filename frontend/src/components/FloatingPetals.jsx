import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const heartbeat = {
  scale: [1, 1.08, 1, 1.03, 1]
}

export default function FloatingPetals() {
  const [viewport, setViewport] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : 0,
    h: typeof window !== "undefined" ? window.innerHeight : 0
  })

  useEffect(() => {
    const onResize = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight })

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const flows = [
    // 🌌 Background flow (soft, distant)
    {
      count: viewport.w < 768 ? 4 : 6,
      size: [16, 22],
      duration: [34, 42],
      opacity: 0.35,
      xRange: [0.1, 0.9]
    },
    // 💗 Mid flow (emotional core)
    {
      count: viewport.w < 768 ? 6 : 10,
      size: [22, 30],
      duration: [26, 34],
      opacity: 0.55,
      xRange: [0.25, 0.75]
    },
    // ❤️ Foreground flow (intimate)
    {
      count: viewport.w < 768 ? 3 : 6,
      size: [30, 38],
      duration: [20, 28],
      opacity: 0.75,
      xRange: [0, 1]
    }
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {flows.map((flow, layerIndex) =>
        [...Array(flow.count)].map((_, i) => {
          const size =
            Math.random() * (flow.size[1] - flow.size[0]) + flow.size[0]

          const startX =
            viewport.w *
            (Math.random() * (flow.xRange[1] - flow.xRange[0]) +
              flow.xRange[0])

          const drift = Math.random() * 160 - 80
          const delay = Math.random() * 6
          const duration =
            Math.random() *
              (flow.duration[1] - flow.duration[0]) +
            flow.duration[0]

          return (
            <motion.div
              key={`${layerIndex}-${i}`}
              className="absolute"
              style={{ width: size, height: size }}
              initial={{
                x: startX,
                y: viewport.h + 120,
                opacity: 0
              }}
              animate={{
                y: -200,
                x: startX + drift,
                opacity: [0, flow.opacity, flow.opacity, 0]
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* 💗 Heartbeat */}
              <motion.div
                animate={heartbeat}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random()
                }}
                className="w-full h-full"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-full h-full drop-shadow-[0_0_12px_rgba(255,182,193,0.35)]"
                >
                  <defs>
                    <linearGradient
                      id={`heartGrad-${layerIndex}-${i}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgba(251,207,232,0.7)"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgba(216,180,254,0.6)"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M12 21s-7.5-4.35-10-8.55C-0.5 7.5 3 3 7.2 4.1 9.4 4.7 12 7 12 7s2.6-2.3 4.8-2.9C21 3 24.5 7.5 22 12.45 19.5 16.65 12 21 12 21z"
                    fill={`url(#heartGrad-${layerIndex}-${i})`}
                  />
                </svg>
              </motion.div>
            </motion.div>
          )
        })
      )}
    </div>
  )
}
