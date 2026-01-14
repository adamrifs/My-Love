import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const memoryRays = [
  { text: "Your kindness when I was lost.", origin: "top-left", x: -300, y: -200 },
  { text: "The way you believe in the best of me.", origin: "bottom-right", x: 300, y: 200 },
  { text: "A million small things I didn't notice then.", origin: "top-right", x: 300, y: -200 },
  { text: "The version of me I am when I'm with you.", origin: "bottom-left", x: -300, y: 200 },
];

export default function EchoesOfLight() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Controls the convergence of the rays
  const convergence = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 0, -0.5]), {
    stiffness: 45,
    damping: 25
  });

  const mainOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100vh] bg-[#050505] overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        
        {/* 🔦 The Converging Rays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {memoryRays.map((ray, i) => (
            <motion.div
              key={i}
              style={{ 
                x: useTransform(convergence, (c) => ray.x * c),
                y: useTransform(convergence, (c) => ray.y * c),
                opacity: mainOpacity 
              }}
              className="absolute flex flex-col items-center justify-center"
            >
              {/* The Beam of Light */}
              <div className={`w-px h-64 bg-gradient-to-t from-rose-500/0 via-rose-400/40 to-white/10 blur-[1px] rotate-45`} />
              
              {/* The Fragment */}
              <motion.div 
                className="mt-4 px-6 py-2 border-l border-rose-500/30 backdrop-blur-sm"
                whileInView={{ opacity: [0, 1], x: [-10, 0] }}
              >
                <p className="font-['Cormorant_Garamond'] text-white text-xl md:text-2xl italic tracking-wide">
                  {ray.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ✨ Central Reveal Statement */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]) }}
          className="z-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-['Cormorant_Garamond'] text-white font-light tracking-tight">
            Fragments of us <br />
            <span className="text-rose-200 italic">returning home.</span>
          </h2>
          <motion.div 
             animate={{ opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="h-px w-24 bg-rose-500/50 mx-auto mt-8"
          />
        </motion.div>

        {/* Ambient Particle Background (Optional) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.03)_0%,transparent_70%)]" />
      </div>
    </section>
  );
}