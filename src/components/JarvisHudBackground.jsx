import React, { useEffect, useRef } from 'react'

const JarvisHudBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Mouse tracking state for target reticle
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // HUD system parameters
    let angle1 = 0
    let angle2 = 0
    let angle3 = 0
    let radarAngle = 0

    // Random radar blips
    const blips = Array.from({ length: 14 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1.5,
      alpha: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * 0.05 + 0.01,
    }))

    // Random floating hex / text nodes
    const techNodes = Array.from({ length: 25 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      label: ['0x7F', 'JARVIS', 'AI_CORE', 'MARK_85', 'NOMINAL', '99.8%', 'STARK', 'CU_CSE'][
        Math.floor(Math.random() * 8)
      ],
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Lerp mouse target for smooth trailing scope
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      // 1. Draw Tech Perspective Grid Overlay (subtle cyan lines)
      ctx.lineWidth = 0.5
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.03)'

      const gridSize = 80
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // 2. Draw Floating Tech Nodes & Connections
      ctx.fillStyle = 'rgba(0, 243, 255, 0.4)'
      ctx.font = '9px monospace'
      techNodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0) node.x = width
        if (node.x > width) node.x = 0
        if (node.y < 0) node.y = height
        if (node.y > height) node.y = 0

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillText(node.label, node.x + 6, node.y + 3)

        // Draw line to adjacent nodes
        for (let j = i + 1; j < techNodes.length; j++) {
          const other = techNodes[j]
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.12 * (1 - dist / 130)})`
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })

      // 3. Central HUD Arc Reactor Telemetry Rings (Centered on screen)
      const centerX = width / 2
      const centerY = height / 2

      angle1 += 0.003
      angle2 -= 0.005
      angle3 += 0.008

      // Outer Ticked Telemetry Ring
      ctx.save()
      ctx.translate(centerX, centerY)

      // Arc Glow
      const glowGrad = ctx.createRadialGradient(0, 0, 50, 0, 0, 320)
      glowGrad.addColorStop(0, 'rgba(0, 243, 255, 0.06)')
      glowGrad.addColorStop(0.5, 'rgba(0, 119, 255, 0.03)')
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = glowGrad
      ctx.beginPath()
      ctx.arc(0, 0, 320, 0, Math.PI * 2)
      ctx.fill()

      // Outer Ring Dashed
      ctx.rotate(angle1)
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.15)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(0, 0, 240, 0, Math.PI * 1.5)
      ctx.stroke()

      // Degree Ticks on Outer Ring
      for (let i = 0; i < 360; i += 15) {
        const rad = (i * Math.PI) / 180
        const r1 = 232
        const r2 = i % 45 === 0 ? 245 : 238
        ctx.strokeStyle = i % 45 === 0 ? 'rgba(255, 183, 0, 0.4)' : 'rgba(0, 243, 255, 0.2)'
        ctx.beginPath()
        ctx.moveTo(r1 * Math.cos(rad), r1 * Math.sin(rad))
        ctx.lineTo(r2 * Math.cos(rad), r2 * Math.sin(rad))
        ctx.stroke()
      }

      // Middle Counter-Rotating Segment Ring
      ctx.rotate(angle2 - angle1)
      ctx.strokeStyle = 'rgba(255, 183, 0, 0.25)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(0, 0, 180, 0, Math.PI * 0.4)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, 0, 180, Math.PI * 0.7, Math.PI * 1.3)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, 0, 180, Math.PI * 1.5, Math.PI * 1.9)
      ctx.stroke()

      // Inner Core Ring
      ctx.rotate(angle3 - angle2)
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.35)'
      ctx.lineWidth = 1
      ctx.setLineDash([8, 8])
      ctx.beginPath()
      ctx.arc(0, 0, 120, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])

      ctx.restore()

      // 4. Radar Scan Line Sweep
      radarAngle += 0.012
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(radarAngle)

      const sweepGrad = ctx.createConicGradient(0, 0, 0)
      sweepGrad.addColorStop(0, 'rgba(0, 243, 255, 0.15)')
      sweepGrad.addColorStop(0.12, 'rgba(0, 243, 255, 0.0)')
      sweepGrad.addColorStop(1, 'rgba(0, 243, 255, 0.0)')

      ctx.fillStyle = sweepGrad
      ctx.beginPath()
      ctx.arc(0, 0, Math.max(width, height) * 0.6, 0, Math.PI * 2)
      ctx.fill()

      // Leading Radar Sweep Line
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.4)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(Math.max(width, height) * 0.6, 0)
      ctx.stroke()

      ctx.restore()

      // 5. Radar Target Blips
      blips.forEach((blip) => {
        blip.alpha += blip.pulse
        if (blip.alpha > 0.8 || blip.alpha < 0.2) blip.pulse = -blip.pulse

        ctx.fillStyle = `rgba(0, 243, 255, ${blip.alpha})`
        ctx.beginPath()
        ctx.arc(blip.x, blip.y, blip.size, 0, Math.PI * 2)
        ctx.fill()

        // Ring around blip
        ctx.strokeStyle = `rgba(255, 183, 0, ${blip.alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(blip.x, blip.y, blip.size + 4, 0, Math.PI * 2)
        ctx.stroke()
      })

      // 6. Interactive Mouse JARVIS Target Scope Reticle
      ctx.save()
      ctx.translate(mouse.x, mouse.y)

      // Target reticle circle
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.6)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.arc(0, 0, 24, 0, Math.PI * 2)
      ctx.stroke()

      // Inner reticle dot
      ctx.fillStyle = '#ffb700'
      ctx.beginPath()
      ctx.arc(0, 0, 2.5, 0, Math.PI * 2)
      ctx.fill()

      // Target Brackets
      ctx.strokeStyle = 'rgba(255, 183, 0, 0.7)'
      ctx.lineWidth = 1.5
      const bracketSize = 34
      const cornerLen = 8

      // Top Left
      ctx.beginPath()
      ctx.moveTo(-bracketSize, -bracketSize + cornerLen)
      ctx.lineTo(-bracketSize, -bracketSize)
      ctx.lineTo(-bracketSize + cornerLen, -bracketSize)
      ctx.stroke()

      // Top Right
      ctx.beginPath()
      ctx.moveTo(bracketSize - cornerLen, -bracketSize)
      ctx.lineTo(bracketSize, -bracketSize)
      ctx.lineTo(bracketSize, -bracketSize + cornerLen)
      ctx.stroke()

      // Bottom Left
      ctx.beginPath()
      ctx.moveTo(-bracketSize, bracketSize - cornerLen)
      ctx.lineTo(-bracketSize, bracketSize)
      ctx.lineTo(-bracketSize + cornerLen, bracketSize)
      ctx.stroke()

      // Bottom Right
      ctx.beginPath()
      ctx.moveTo(bracketSize - cornerLen, bracketSize)
      ctx.lineTo(bracketSize, bracketSize)
      ctx.lineTo(bracketSize, bracketSize - cornerLen)
      ctx.stroke()

      // Reticle Coordinates Text
      ctx.fillStyle = 'rgba(0, 243, 255, 0.8)'
      ctx.font = '9px monospace'
      ctx.fillText(`TARGET: [${Math.round(mouse.x)}, ${Math.round(mouse.y)}]`, 40, -10)
      ctx.fillStyle = 'rgba(255, 183, 0, 0.8)'
      ctx.fillText(`LOCK: ACTIVE // 99.8%`, 40, 4)

      ctx.restore()

      // 7. HUD Viewport Corner Borders
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.3)'
      ctx.lineWidth = 2
      const offset = 20
      const arm = 40

      // Top-Left HUD Corner
      ctx.beginPath()
      ctx.moveTo(offset, offset + arm)
      ctx.lineTo(offset, offset)
      ctx.lineTo(offset + arm, offset)
      ctx.stroke()
      ctx.fillStyle = 'rgba(0, 243, 255, 0.6)'
      ctx.font = '10px monospace'
      ctx.fillText('STARK_OS // MARK 85', offset + 5, offset + 16)

      // Top-Right HUD Corner
      ctx.beginPath()
      ctx.moveTo(width - offset - arm, offset)
      ctx.lineTo(width - offset, offset)
      ctx.lineTo(width - offset, offset + arm)
      ctx.stroke()
      ctx.fillStyle = 'rgba(255, 183, 0, 0.7)'
      ctx.fillText('SYS: ONLINE', width - offset - 85, offset + 16)

      // Bottom-Left HUD Corner
      ctx.beginPath()
      ctx.moveTo(offset, height - offset - arm)
      ctx.lineTo(offset, height - offset)
      ctx.lineTo(offset + arm, height - offset)
      ctx.stroke()
      ctx.fillStyle = 'rgba(0, 243, 255, 0.6)'
      ctx.fillText('PROTOCOL: NOMINAL', offset + 5, height - offset - 8)

      // Bottom-Right HUD Corner
      ctx.beginPath()
      ctx.moveTo(width - offset - arm, height - offset)
      ctx.lineTo(width - offset, height - offset)
      ctx.lineTo(width - offset, height - offset - arm)
      ctx.stroke()
      ctx.fillStyle = 'rgba(0, 243, 255, 0.6)'
      ctx.fillText('SECURE NET: 108.4 MHz', width - offset - 140, height - offset - 8)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-dark-950">
      {/* HUD Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Subtle HUD Radial Vignette & Grid Lines */}
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  )
}

export default JarvisHudBackground
