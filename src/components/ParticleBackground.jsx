import React, { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../context/ThemeContext'

const ParticleBackground = () => {
  const { theme } = useTheme()

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        color: { value: theme === 'dark' ? ['#6366f1', '#a855f7'] : ['#818cf8', '#c084fc'] },
        links: {
          color: theme === 'dark' ? '#6366f1' : '#a855f7',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: 'out' },
        },
        number: { value: 50, density: { enable: true, area: 900 } },
        opacity: { value: 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [theme]
  )

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  )
}

export default ParticleBackground
