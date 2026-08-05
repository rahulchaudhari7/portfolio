import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { jarvisAudio } from '../utils/jarvisAudio'

const systemLogs = [
  'INITIALIZING STARK OS v4.8...',
  'CALIBRATING ARC REACTOR CORES...',
  'LOADING RAHUL CHAUDHARY PROFILE DATA...',
  'COMPUTING NEURAL NETWORK WEIGHTS...',
  'CONNECTING JARVIS PROTOCOLS...',
  'SYSTEM READY FOR DEPLOYMENT.',
]

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [logIndex, setLogIndex] = useState(0)

  useEffect(() => {
    jarvisAudio.playArcCharge()

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 25)

    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < systemLogs.length - 1 ? prev + 1 : prev))
    }, 250)

    return () => {
      clearInterval(interval)
      clearInterval(logInterval)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950 text-cyan-400 font-mono select-none"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30" />

      {/* Arc Reactor Central Hologram */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/60 animate-spin-slow" />
        
        {/* Reverse inner spinning ring */}
        <div className="absolute inset-2 rounded-full border border-cyan-400/80 animate-spin-reverse border-t-amber-400" />

        {/* Center Arc Reactor Glowing Core */}
        <div className="w-16 h-16 rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center shadow-arc-reactor animate-pulse">
          <div className="w-8 h-8 rounded-full bg-cyan-300 shadow-[0_0_20px_#00f3ff]" />
        </div>

        {/* HUD Target Brackets */}
        <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-widest text-cyan-300 mb-2 gradient-text uppercase">
        STARK OS // JARVIS
      </h2>

      {/* Progress Counter */}
      <div className="text-3xl font-bold font-display text-cyan-400 mb-4 tracking-wider">
        {progress}%
      </div>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 h-2 bg-dark-900 border border-cyan-500/40 rounded-full overflow-hidden p-0.5 mb-6 shadow-hud-cyan">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-arcblue-500 to-starkgold-500 rounded-full transition-all duration-75 shadow-[0_0_10px_#00f3ff]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Dynamic System Log Ticker */}
      <div className="text-xs text-cyan-500/80 tracking-wide text-center h-5">
        [{systemLogs[logIndex]}]
      </div>
    </motion.div>
  )
}

export default LoadingScreen
