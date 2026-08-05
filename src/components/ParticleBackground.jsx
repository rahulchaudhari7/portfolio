import React, { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.8,
              color: '#00f3ff',
            },
          },
          push: {
            quantity: 3,
          },
        },
      },
      particles: {
        color: {
          value: ['#00f3ff', '#0077ff', '#ffb700', '#38bdf8'],
        },
        links: {
          color: '#00f3ff',
          distance: 140,
          enable: true,
          opacity: 0.25,
          width: 1.2,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
        },
        number: {
          value: 65,
          density: { enable: true, area: 800 },
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: ['circle', 'hexagon'],
        },
        size: {
          value: { min: 1.5, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-auto">
      {/* Sci-fi background grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      {/* tsParticles node matrix */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="w-full h-full"
      />
    </div>
  )
}

export default ParticleBackground
