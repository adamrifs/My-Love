import { useEffect, useRef } from "react"

export default function AmbientSound() {
  const audioRef = useRef(null)

  useEffect(() => {
    const startAudio = () => {
      if (!audioRef.current) return

      audioRef.current.volume = 0.12

      audioRef.current
        .play()
        .catch(() => {
          console.log("Audio play blocked until user interaction")
        })

      window.removeEventListener("pointerdown", startAudio)
    }

    window.addEventListener("pointerdown", startAudio)

    return () =>
      window.removeEventListener("pointerdown", startAudio)
  }, [])

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      src=""
    />
  )
}
