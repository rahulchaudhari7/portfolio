import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { jarvisAudio } from '../utils/jarvisAudio'

const systemLogs = [
  'SCANNING BIOMETRIC SIGNATURE...',
  'BIOMETRIC MATCH: RAHUL CHAUDHARY // VERIFIED',
  'SYNCHRONIZING AI/ML & WEB CORE MODULES...',
  'CALIBRATING NEURAL ARCHITECTURE...',
  'ALL SYSTEMS NOMINAL. LAUNCHING PORTFOLIO...',
]

const LoadingScreen = React.forwardRef(({ onComplete }, ref) => {
  const [progress, setProgress] = useState(0)
  const [logIndex, setLogIndex] = useState(0)
  const [phase, setPhase] = useState(0) // 0: init scan, 1: name reveal, 2: subtitle & complete
  const canvasRef = useRef(null)
  const isCompleteRef = useRef(false)

  const handleFinish = () => {
    if (isCompleteRef.current) return
    isCompleteRef.current = true
    if (typeof onComplete === 'function') {
      onComplete()
    }
  }

  // Audio & Animation Timing Orchestration (total ~3.0s)
  useEffect(() => {
    // Initial high-tech audio charge
    jarvisAudio.playArcCharge()

    // Phase 1: Reveal Rahul Chaudhary at ~650ms
    const phase1Timer = setTimeout(() => {
      setPhase(1)
      jarvisAudio.playBeep(1200, 'sine', 0.08)
    }, 650)

    // Phase 2: Reveal Subtitle at ~1600ms
    const phase2Timer = setTimeout(() => {
      setPhase(2)
      jarvisAudio.playBeep(1440, 'sine', 0.08)
    }, 1600)

    // Progress counter (0 to 100% across ~2600ms)
    const startTime = Date.now()
    const duration = 2600

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100))
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(progressInterval)
        jarvisAudio.playBeep(1760, 'sine', 0.12)
      }
    }, 30)

    // System log ticker progression
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < systemLogs.length - 1 ? prev + 1 : prev))
    }, 500)

    // Auto-transition into main portfolio at 3000ms
    const finishTimer = setTimeout(() => {
      handleFinish()
    }, 3050)

    // Keyboard listener: Escape key skips intro immediately
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleFinish()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(phase1Timer)
      clearTimeout(phase2Timer)
      clearTimeout(finishTimer)
      clearInterval(progressInterval)
      clearInterval(logInterval)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Lightweight ambient cyber particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // 28 subtle cyan floating motes
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 40))
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.4 + 0.2,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.12 * (1 - dist / 110)})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 243, 255, ${p.alpha})`
        ctx.shadowBlur = 6
        ctx.shadowColor = '#00f3ff'
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712] text-cyan-400 font-mono select-none overflow-hidden"
    >
      {/* Background Interactive Ambient Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cyber Grid Background & Radial Vignette */}
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-0" />

      {/* Laser Scanning Line sweeps downward */}
      <motion.div
        animate={{ y: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none z-10 shadow-[0_0_15px_#00f3ff]"
      />

      {/* Futuristic HUD Corner Reticles with Personal Branding Telemetry */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex flex-col gap-1 text-[10px] sm:text-xs text-cyan-500/70 border-l border-t border-cyan-500/40 pl-2 sm:pl-3 pt-1.5 sm:pt-2">
        <span className="font-bold text-cyan-300 tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          SYS.LINK // SECURE
        </span>
        <span className="text-slate-400 font-tech">HOST: rahulchaudhary07.com.np</span>
      </div>

      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex flex-col items-end gap-1 text-[10px] sm:text-xs text-cyan-500/70 border-r border-t border-cyan-500/40 pr-2 sm:pr-3 pt-1.5 sm:pt-2">
        <span className="font-bold text-cyan-300 tracking-widest">STATUS: INITIALIZING</span>
        <span className="text-amber-400 font-tech">PORTFOLIO PROTOCOLS // ONLINE</span>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 hidden sm:flex flex-col gap-1 text-[10px] sm:text-xs text-cyan-500/70 border-l border-b border-cyan-500/40 pl-3 pb-2">
        <span className="text-cyan-300/80 tracking-wider">NEURAL CORE // ACTIVE</span>
        <span className="text-slate-500 font-tech">AI/ML • PYTHON • FULL STACK</span>
      </div>

      {/* Skip Intro Button for Returning Visitors */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
        <button
          onClick={handleFinish}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-dark-900/80 border border-cyan-500/40 text-[10px] sm:text-xs text-cyan-300/80 hover:text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer shadow-hud-cyan"
          title="Press Escape or click to skip intro"
        >
          <span>SKIP INTRO</span>
          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-bold">
            ESC
          </span>
        </button>
      </div>

      {/* Centerpiece Container */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 max-w-4xl text-center">
        
        {/* Futuristic Holographic Biometric Photo Frame */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center mb-6"
        >
          {/* Glowing Aura Halo */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-glow-pulse pointer-events-none" />

          {/* Outer dashed spinning HUD radar ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/50 animate-spin-slow" />

          {/* Reverse spinning telemetry ring with Stark gold accent */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-cyan-400/70 animate-spin-reverse border-t-amber-400 border-r-transparent" />

          {/* Pulsing inner cyber reticle */}
          <div className="absolute inset-4 sm:inset-5 rounded-full border border-dashed border-cyan-300/40 animate-spin-slow" />

          {/* Profile Photo Aperture Container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 sm:border-3 border-cyan-400 bg-dark-950 shadow-arc-reactor flex items-center justify-center">
            <img
              src="/profile.jpeg"
              alt="Rahul Chaudhary"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-105 contrast-105"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden w-full h-full items-center justify-center text-2xl sm:text-3xl font-display font-black text-cyan-300 bg-dark-900">
              RC
            </div>

            {/* Holographic Cyan Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-cyan-500/20 pointer-events-none mix-blend-screen" />

            {/* Biometric Laser Scan Sweep Bar */}
            <motion.div
              animate={{ y: ['-120%', '130%'] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="absolute left-0 right-0 h-[2px] bg-cyan-300 shadow-[0_0_12px_#00f3ff,0_0_24px_#00f3ff] pointer-events-none"
            />

            {/* Faint HUD scanlines across photo */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.06)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
          </div>

          {/* Biometric Match Telemetry Tag floating under photo */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -bottom-2.5 sm:-bottom-3 px-2.5 py-0.5 rounded-full bg-dark-950/95 border border-cyan-400/80 shadow-hud-cyan flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-cyan-300 z-10 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold tracking-wider">ID: RAHUL CHAUDHARY</span>
          </motion.div>

          {/* HUD Crosshairs Ticks */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400/80" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400/80" />
          <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 h-4 w-[2px] bg-cyan-400/80" />
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 h-4 w-[2px] bg-cyan-400/80" />

          {/* 4 HUD Target Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />
        </motion.div>

        {/* System Category / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="w-2 h-2 rounded-sm bg-cyan-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-cyan-400/90 uppercase font-semibold">
            PORTFOLIO // SYSTEM INITIALIZATION
          </span>
          <span className="w-2 h-2 rounded-sm bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* MAIN VISUAL FOCUS: RAHUL CHAUDHARY */}
        <div className="relative my-2 sm:my-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, letterSpacing: '0.1em' }}
            animate={
              phase >= 1
                ? { opacity: 1, scale: 1, letterSpacing: '0.2em' }
                : { opacity: 0, scale: 0.92, letterSpacing: '0.1em' }
            }
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* HUD Target Brackets flanking the name */}
            <span className="hidden md:inline-block text-cyan-400/60 font-light text-4xl lg:text-5xl mr-3 select-none">
              [
            </span>

            <h1 className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-400 drop-shadow-[0_0_30px_rgba(0,243,255,0.7)] uppercase">
              RAHUL CHAUDHARY
            </h1>

            <span className="hidden md:inline-block text-cyan-400/60 font-light text-4xl lg:text-5xl ml-3 select-none">
              ]
            </span>

            {/* Glowing Accent Scanning Line under name */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={phase >= 1 ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-2 shadow-[0_0_12px_#00f3ff]"
            />
          </motion.div>
        </div>

        {/* SECONDARY TEXT: AI/ML Developer • Python Developer • Software Engineer */}
        <div className="min-h-[2.5rem] flex items-center justify-center my-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-cyan-200/95"
          >
            <span className="text-cyan-300 font-tech">AI/ML Developer</span>
            <span className="text-amber-400 text-xs">◆</span>
            <span className="text-cyan-300 font-tech">Python Developer</span>
            <span className="text-amber-400 text-xs">◆</span>
            <span className="text-cyan-300 font-tech">Software Engineer</span>
          </motion.div>
        </div>

        {/* High-Tech Telemetry Progress Bar */}
        <div className="w-64 sm:w-80 md:w-96 mt-4">
          <div className="flex justify-between items-center text-[10px] sm:text-xs text-cyan-400 font-mono mb-1.5 px-0.5">
            <span className="tracking-wider text-cyan-500/90 font-tech">
              SYS.TELEMETRY
            </span>
            <span className="font-bold text-cyan-300 tracking-wider">
              {progress}%
            </span>
          </div>

          <div className="h-2 bg-dark-900 border border-cyan-500/40 rounded-full overflow-hidden p-[2px] shadow-hud-cyan">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-arcblue-500 to-starkgold-500 rounded-full shadow-[0_0_12px_#00f3ff]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* Dynamic System Log Ticker */}
        <div className="mt-4 text-[11px] sm:text-xs text-cyan-400/80 tracking-wide text-center h-6 flex items-center justify-center">
          <span className="text-cyan-600 font-bold mr-1.5">&gt;</span>
          <span className="font-mono">
            {progress >= 100
              ? 'SYSTEM READY // WELCOME TO RAHUL CHAUDHARY\'S PORTFOLIO'
              : systemLogs[logIndex]}
          </span>
        </div>
      </div>
    </motion.div>
  )
})

LoadingScreen.displayName = 'LoadingScreen'

export default LoadingScreen
