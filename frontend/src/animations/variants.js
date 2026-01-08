export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
  }
}

export const slowFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2 }
  }
}

export const letterReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}
