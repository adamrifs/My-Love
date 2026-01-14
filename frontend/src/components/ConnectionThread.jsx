import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { text: "The first time we spoke.", x: "10%", y: "20%" },
  { text: "The way you look when you're happy.", x: "60%", y: "40%" },
  { text: "The quiet moments only we know.", x: "15%", y: "65%" },
  { text: "The future I still believe in.", x: "55%", y: "85%" },
];

export default function ConnectionThread() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
  });

  return (
    <section ref={ref} className="relative h-[150vh] bg-[#050505] overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        
        {/* 🎨 The Animated Thread */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 100 200 Q 400 300 150 500 T 500 800" // Custom curved path
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            style={{ pathLength }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0" />
              <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ✨ Floating "Star" Memories */}
        <div className="relative w-full h-full max-w-5xl mx-auto">
          {milestones.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.3 }}
              style={{ left: point.x, top: point.y }}
              className="absolute group"
            >
              {/* The Glow Point */}
              <div className="w-2 h-2 bg-rose-400 rounded-full shadow-[0_0_15px_rgba(251,113,133,0.8)]" />
              
              {/* The Message */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-2">
                <p className="font-['Cormorant_Garamond'] text-white text-xl md:text-2xl italic whitespace-nowrap bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🏮 Center Statement */}
        <motion.div 
          style={{ opacity: useSpring(scrollYProgress) }}
          className="text-center z-10"
        >
          <h2 className="text-4xl md:text-7xl font-['Cormorant_Garamond'] text-white font-extralight tracking-tighter">
            Every path <br />
            <span className="italic text-rose-200">leads back to you.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}