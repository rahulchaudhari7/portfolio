import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY })

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
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
      <motion.div
        className="cursor-dot hidden lg:block"
        animate={{ x: position.x, y: position.y, scale: hovering ? 0 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="cursor-outline hidden lg:block"
        animate={{
          x: position.x,
          y: position.y,
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderColor: hovering ? '#a855f7' : '#6366f1',
          backgroundColor: hovering ? 'rgba(168,85,247,0.1)' : 'transparent',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
    </>
  )
}

export default AnimatedCursor
