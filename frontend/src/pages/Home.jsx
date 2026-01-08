import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import IntroLoader from "../components/IntroLoader"
import AmbientSound from "../components/AmbientSound"
import FloatingPetals from "../components/FloatingPetals"
import HeartbeatOverlay from "../components/HeartbeatOverlay"

import Hero from "../components/Hero"
import Memories from "../components/Memories"
import Letter from "../components/Letter"
import WhyHere from "../components/WhyHere"
import Proposal from "../components/Proposal"
import Closing from "../components/Closing"
import TalkingPoints from "../components/TalkingPoints"
import ImageZoom from "../components/ImageZoom"
import MessageInput from "../components/MessageInput"

const Home = () => {
  const [ready, setReady] = useState(false)

  // Ensure scroll is at top when content loads
  useEffect(() => {
    if (ready) window.scrollTo(0, 0)
  }, [ready])

  return (
    <div className="relative bg-[#050505] text-white selection:bg-rose-500/30 overflow-x-hidden min-h-screen">
      
      <AnimatePresence mode="wait">
        {!ready ? (
          <IntroLoader key="loader" onFinish={() => setReady(true)} />
        ) : (
          <motion.main 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="relative z-10 flex flex-col"
          >
            <AmbientSound />
            <HeartbeatOverlay />
            <FloatingPetals />

            {/* 🎞️ Global Film Grain Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.08] mix-blend-overlay bg-noise" />

            <Hero />
            <Memories />
            <ImageZoom/>
            <TalkingPoints/>
            <Letter />
            <WhyHere />
            <Proposal />
            <MessageInput/>
            <Closing />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home