"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { BubbleAnimations, FloatingParticles, BackgroundShapes } from "@/components/background-animations"
import WelcomeScreen from "@/components/welcome-screen"
import LoginForm from "@/components/login-form"

type LoginType = "student" | "faculty" | "parent" | null

export default function CollegeERPPortal() {
  const [selectedLogin, setSelectedLogin] = useState<LoginType>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50 overflow-hidden relative">
      {/* Background Elements */}
      <BackgroundShapes />
      <FloatingParticles />
      <BubbleAnimations />
      <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />

      <div className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - College Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex w-full h-40 sm:h-48 md:h-56 lg:w-1/2 lg:h-auto relative order-first lg:order-none"
        >
          <div className="relative w-full h-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent z-10"
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.4, 0, 0.6, 1],
              }}
            />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-slate-50 z-20 hidden lg:block" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-50 to-transparent z-20 block lg:hidden" />
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://ik.imagekit.io/kfeapecpv/Screenshot%202025-06-15%20110729.jpg?updatedAt=1749966299413"
                alt="Loyola ICAM College of Engineering and Technology"
                fill
                className="object-cover object-top lg:object-center"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Content */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative min-h-screen lg:min-h-auto order-last lg:order-none">
          {/* Creative Background Elements for Right Side */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Geometric Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e40af" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Floating Geometric Shapes */}
            <motion.div
              className="absolute top-20 right-20 w-24 h-24 border-2 border-blue-200/20 rounded-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-indigo-100/20 rounded-full"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.4, 0, 0.6, 1],
              }}
            />

            <motion.div
              className="absolute top-1/3 left-8 w-8 h-8 border border-indigo-200/40 rotate-45"
              animate={{
                rotate: [45, 405],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Curved Lines */}
            <svg className="absolute top-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200">
              <motion.path
                d="M0,100 Q50,50 100,100 T200,100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>

            <svg className="absolute bottom-0 left-0 w-48 h-48 opacity-10" viewBox="0 0 200 200">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="20 10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-16 right-32 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.4, 0, 0.6, 1],
              }}
            />

            <motion.div
              className="absolute bottom-24 right-16 w-20 h-20 bg-gradient-to-br from-indigo-300/15 to-blue-300/10 rounded-full blur-lg"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.4, 0, 0.6, 1],
              }}
            />

            {/* Hexagon Pattern */}
            <div className="absolute top-1/2 right-12 opacity-5">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <motion.polygon
                  points="30,5 50,17.5 50,42.5 30,55 10,42.5 10,17.5"
                  stroke="#1e40af"
                  strokeWidth="1"
                  fill="none"
                  animate={{
                    rotate: [0, 120, 240, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>

            {/* Dotted Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-md relative z-10">
            <AnimatePresence mode="wait">
              {!selectedLogin ? (
                <WelcomeScreen onSelectLogin={setSelectedLogin} />
              ) : (
                <LoginForm selectedLogin={selectedLogin} onBack={() => setSelectedLogin(null)} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
