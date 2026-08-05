import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiShield, FiActivity, FiTerminal, FiCpu } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { personalInfo, socialLinks } from '../data/portfolioData'
import ParticleBackground from './ParticleBackground'
import { jarvisAudio } from '../utils/jarvisAudio'

const socials = [
  { icon: FiGithub, url: socialLinks.github, label: 'GitHub' },
  { icon: FiLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FiMail, url: socialLinks.email, label: 'Email' },
  { icon: SiLeetcode, url: socialLinks.leetcode, label: 'LeetCode' },
  { icon: SiHackerrank, url: socialLinks.hackerrank, label: 'HackerRank' },
]

const Hero = () => {
  const handleButtonClick = () => {
    jarvisAudio.playBeep(1200, 'sine', 0.1)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 font-sans"
    >
      <ParticleBackground />

      {/* Decorative Arc Reactor Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-arcblue-500/10 rounded-full blur-3xl animate-pulse-slow -z-10" />

      <div className="section flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Column: Text & Telemetry */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Stark Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-xs mb-4 shadow-hud-cyan tracking-wider uppercase"
          >
            <FiShield className="text-amber-400 text-sm animate-pulse" />
            <span>STARK INDUSTRIES // LEAD DEVELOPER DOSSIER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-4 leading-tight uppercase tracking-wide gradient-text"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing animation role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-3xl font-bold font-tech mb-4 h-12 md:h-14 text-cyan-300 flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-amber-400 font-mono text-lg">{'>'}</span>
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor
              className="cyan-text-glow uppercase tracking-wider"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-slate-300 font-tech font-medium leading-relaxed"
          >
            {personalInfo.title}
          </motion.p>

          {/* Live Telemetry Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 max-w-lg mx-auto lg:mx-0 font-mono text-xs"
          >
            <div className="p-2.5 rounded bg-dark-900/80 border border-cyan-500/30 flex items-center gap-2">
              <FiActivity className="text-cyan-400 text-base shrink-0" />
              <div>
                <div className="text-[10px] text-cyan-500/70">CORE SYSTEM</div>
                <div className="text-slate-200 font-bold">PYTHON / AI</div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-dark-900/80 border border-cyan-500/30 flex items-center gap-2">
              <FiCpu className="text-amber-400 text-base shrink-0" />
              <div>
                <div className="text-[10px] text-cyan-500/70">EFFICIENCY</div>
                <div className="text-amber-400 font-bold">99.8% NOMINAL</div>
              </div>
            </div>
            <div className="p-2.5 rounded bg-dark-900/80 border border-cyan-500/30 flex items-center gap-2 col-span-2 sm:col-span-1">
              <FiTerminal className="text-cyan-400 text-base shrink-0" />
              <div>
                <div className="text-[10px] text-cyan-500/70">INSTITUTION</div>
                <div className="text-slate-200 font-bold truncate">CU CSE AI/ML</div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleButtonClick}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 via-arcblue-600 to-cyan-500 text-dark-950 font-display font-bold shadow-hud-cyan hover:shadow-hud-cyan-lg hover:scale-105 transition-all cursor-pointer uppercase tracking-wider text-sm"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition-transform text-base" />
              Download Resume
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              onClick={handleButtonClick}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-cyan-500/50 bg-dark-900/80 text-cyan-400 font-display font-bold hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 transition-all cursor-pointer uppercase tracking-wider text-sm"
            >
              Initiate Contact
              <FiArrowRight className="group-hover:translate-x-1 transition-transform text-base" />
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={handleButtonClick}
                className="p-3 rounded-lg bg-dark-900/90 border border-cyan-500/40 text-cyan-400 hover:text-amber-400 hover:border-amber-400 hover:-translate-y-1 shadow-hud-cyan transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Arc Reactor Profile Hologram Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Outer Arc Reactor Spinning HUD Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/50 animate-spin-slow" />
            <div className="absolute inset-3 rounded-full border border-cyan-400/80 animate-spin-reverse border-t-amber-400" />
            <div className="absolute inset-6 rounded-full border border-cyan-300/30 animate-pulse" />

            {/* Glowing background halo */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-glow-pulse" />

            {/* Profile Image Frame */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-cyan-400/80 bg-dark-900 shadow-arc-reactor flex items-center justify-center">
              <img
                src="/profile.jpeg"
                alt={personalInfo.name}
                className="w-full h-full object-cover filter brightness-105 contrast-105"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-6xl font-display font-bold gradient-text">
                RC
              </div>
            </div>

            {/* Target Reticle Overlay Brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-cyan-400/60 flex items-start justify-center p-1 bg-dark-900/60 shadow-hud-cyan"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f3ff]" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
