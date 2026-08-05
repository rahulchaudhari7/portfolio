import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY })

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, [data-interactive="true"]')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Center glowing dot */}
      <motion.div
        className="cursor-dot hidden lg:block"
        animate={{ x: position.x, y: position.y, scale: hovering ? 1.5 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />

      {/* Outer targeting reticle */}
      <motion.div
        className="cursor-outline hidden lg:block"
        animate={{
          x: position.x,
          y: position.y,
          width: hovering ? 50 : 36,
          height: hovering ? 50 : 36,
          borderColor: hovering ? '#ffb700' : '#00f3ff',
          backgroundColor: hovering ? 'rgba(0,243,255,0.08)' : 'transparent',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      >
        {/* Reticle ticks */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-cyan-400" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-cyan-400" />
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1 bg-cyan-400" />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1 bg-cyan-400" />

        {/* Hover lock brackets */}
        {hovering && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 border border-amber-400 rounded-full animate-ping"
          />
        )}
      </motion.div>

      {/* Target coordinates ticker next to cursor */}
      <div
        className="fixed pointer-events-none z-[9998] hidden lg:block text-[9px] font-mono text-cyan-400/70 tracking-widest uppercase"
        style={{
          left: position.x + 22,
          top: position.y + 12,
        }}
      >
        [{position.x},{position.y}]
      </div>
    </>
  )
}

export default AnimatedCursor
