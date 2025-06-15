"use client"

import { motion } from "framer-motion"

// Smooth Bubble animations
export const BubbleAnimations = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 25,
    delay: Math.random() * 6,
    duration: Math.random() * 12 + 18,
    x: Math.random() * 100,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-200/25 to-blue-400/20 backdrop-blur-sm border border-blue-200/20"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
          }}
          initial={{
            y: "100vh",
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0.4, 0],
            scale: [0, 1, 1.1, 0],
            x: [0, Math.random() * 80 - 40],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      ))}
    </div>
  )
}

// Smooth floating particles
export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1.5 h-1.5 bg-blue-300/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Smooth background shapes
export const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/15 to-blue-300/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.4, 0, 0.6, 1],
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-indigo-200/15 to-purple-200/10 rounded-full blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.4, 0, 0.6, 1],
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-200/15 to-blue-200/10 rounded-full blur-xl"
        animate={{
          y: [-20, 20, -20],
          x: [-15, 15, -15],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.4, 0, 0.6, 1],
        }}
      />
    </div>
  )
}
