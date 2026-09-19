import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiUsers, FiTarget, FiShield, FiTerminal } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const highlightIcons = [FiCode, FiCpu, FiUsers, FiTarget]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section id="about" className="section relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase flex items-center justify-center gap-2">
          <FiTerminal className="text-amber-400 animate-pulse" />
          SYSTEM PROTOCOL // DOSSIER OVERVIEW
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          ABOUT <span className="gradient-text">RAHUL</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Bio & Core Modules */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-dark-900/80 border-2 border-cyan-500/30 shadow-hud-cyan relative"
        >
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-amber-400 border-b border-cyan-500/20 pb-2">
            <FiShield className="text-cyan-400" />
            <span>SECURITY CLEARANCE: LEVEL 5 // LEAD ARCHITECT</span>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-6 text-slate-300 font-tech">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {['Python', 'AI & ML', 'Full Stack Development', 'Hackathons', 'Team Leadership', 'Problem Solving'].map(
              (tag) => (
                <span
                  key={tag}
                  onClick={() => jarvisAudio.playBeep(1300, 'sine', 0.05)}
                  className="px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:border-amber-400 hover:text-amber-400 transition-all cursor-pointer shadow-sm uppercase tracking-wide"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Right Column: Key Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {personalInfo.highlights.map((highlight, idx) => {
            const Icon = highlightIcons[idx % highlightIcons.length]
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                onClick={() => jarvisAudio.playBeep(1100, 'sine', 0.08)}
                className="p-5 rounded-xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all cursor-pointer relative group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-400/50 flex items-center justify-center mb-3 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-dark-950 transition-colors shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-mono font-medium leading-relaxed text-slate-200 uppercase tracking-wide">
                  {highlight}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
