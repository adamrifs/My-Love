import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import IntroLoader from "../components/IntroLoader"
import AmbientSound from "../components/AmbientSound"
import FloatingPetals from "../components/FloatingPetals"

import Hero from "../components/Hero"
import Memories from "../components/Memories"
import Letter from "../components/Letter"
import WhyHere from "../components/WhyHere"
import Proposal from "../components/Proposal"
import Closing from "../components/Closing"
import TalkingPoints from "../components/TalkingPoints"
import ImageZoom from "../components/ImageZoom"
import MessageInput from "../components/MessageInput"
import Thoughts from "../components/Thoughts"

const Home = () => {
  const [ready, setReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (ready) window.scrollTo(0, 0)
  }, [ready])

  return (
    <div className="relative bg-[#050505] text-white overflow-x-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {!ready ? (
          <IntroLoader key="loader" onFinish={() => setReady(true)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.8 : 2 }}
            className="relative z-10 flex flex-col"
          >
            <AmbientSound />

            {/* 🌸 Floating petals → BOTH mobile & desktop */}
            <FloatingPetals />

            {/* Film grain → desktop only */}
            {!isMobile && (
              <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.08] mix-blend-overlay bg-noise" />
            )}

            <Hero />
            <Memories />
            <Thoughts/>
            {!isMobile && <ImageZoom />}
            {!isMobile && <TalkingPoints />}

            <Letter />
            <WhyHere />
            <Proposal />
            {/* <MessageInput /> */}
            <Closing />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
