import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX, FiVolume2, FiVolumeX, FiRadio, FiCpu } from 'react-icons/fi'
import { jarvisAudio } from '../utils/jarvisAudio'

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Education', to: 'education' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [timeStr, setTimeStr] = useState('')
  const [soundOn, setSoundOn] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)

    const timer = setInterval(() => {
      const d = new Date()
      setTimeStr(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  const handleNavClick = () => {
    jarvisAudio.playBeep(1100, 'sine', 0.08)
    setIsOpen(false)
  }

  const toggleAudio = () => {
    const active = jarvisAudio.toggleSound()
    setSoundOn(active)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-tech ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-cyan-500/30 shadow-hud-cyan py-3'
          : 'bg-dark-950/60 backdrop-blur-sm border-b border-cyan-500/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          onClick={handleNavClick}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-cyan-400 bg-cyan-950/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 shadow-[0_0_10px_#00f3ff] transition-all">
            <FiCpu className="text-lg animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-display font-black tracking-widest text-cyan-400 uppercase group-hover:text-amber-400 transition-colors">
              RAHUL.AI
            </span>
            <span className="text-[9px] font-mono text-cyan-500/80 -mt-1 tracking-tighter">
              STARK PROTOCOL v4.8
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              spy
              onClick={handleNavClick}
              activeClass="text-cyan-400 font-bold border-b-2 border-cyan-400 shadow-[0_4px_12px_rgba(0,243,255,0.4)]"
              className="cursor-pointer text-sm font-semibold tracking-wider text-slate-300 hover:text-cyan-400 uppercase transition-all py-1 px-1.5 hover:shadow-[0_0_8px_rgba(0,243,255,0.3)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Live System Status Ticker & Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 px-3 py-1 rounded bg-dark-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] text-cyan-300 tracking-wider">SYSTEM ONLINE</span>
            </span>
            <span className="text-cyan-600">|</span>
            <span className="text-amber-400 text-[11px] font-bold">{timeStr || '08:16:26'}</span>
          </div>

          <button
            onClick={toggleAudio}
            aria-label="Toggle audio effects"
            className="p-2 rounded bg-dark-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:scale-105 transition-all"
            title={soundOn ? 'Mute HUD Sound FX' : 'Enable HUD Sound FX'}
          >
            {soundOn ? <FiVolume2 className="text-cyan-400" /> : <FiVolumeX className="text-gray-500" />}
          </button>

          <button
            className="lg:hidden p-2 rounded bg-dark-900 border border-cyan-500/30 text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-950/95 border-b border-cyan-500/40 mt-2 mx-4 rounded-xl overflow-hidden font-mono"
          >
            <div className="flex flex-col py-3 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={handleNavClick}
                  className="cursor-pointer px-4 py-2.5 text-xs font-semibold tracking-wider text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors rounded uppercase flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-cyan-600">// STARK_MOD</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
