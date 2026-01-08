import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ImageZoom() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // 1.0 = normal size, 3.5+ = zooms until it fills the screen
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 3.5])
  // Fade out the image slightly as it gets very large to transition to the next section
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0])
  // Add a slight parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#050505]">
      {/* Sticky container holds the image in place while the user scrolls through the 200vh height */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* The Zooming Image */}
        <motion.div 
          style={{ scale, opacity, y }}
          className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=1000&auto=format&fit=crop" // 👈 REPLACE WITH YOUR BEST PHOTO
            alt="Main Memory"
            className="w-full h-full object-cover rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          />
          
          {/* Subtle Overlay to match the cinematic theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg" />
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />
        </motion.div>

        {/* Optional floating text that disappears as the image zooms */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="absolute bottom-20 text-center"
        >
          <p className="font-['Cormorant_Garamond'] text-rose-200/50 italic text-xl tracking-widest">
            A moment frozen in time...
          </p>
        </motion.div>
      </div>
    </div>
  )
}