import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiFileText, FiCpu } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Resume = () => {
  return (
    <section id="resume" className="section relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase flex items-center justify-center gap-2">
          <FiCpu className="text-amber-400 animate-pulse" />
          DOSSIER DOWNLOAD // TECHNICAL RESUME
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          STARK <span className="gradient-text">DOSSIER</span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mx-auto p-8 rounded-3xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan flex flex-col md:flex-row items-center gap-8 relative"
      >
        {/* Corner Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

        <div className="w-32 h-40 rounded-xl bg-cyan-950 border-2 border-cyan-400 flex flex-col items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.3)] flex-shrink-0">
          <FiFileText size={48} className="animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase mt-2 text-amber-400">PDF DOSSIER</span>
        </div>

        <div className="flex-1 text-center md:text-left font-sans">
          <h3 className="text-xl font-display font-black text-slate-100 uppercase tracking-wide mb-2">
            {personalInfo.name} — OFFICIAL DOSSIER
          </h3>
          <p className="text-xs font-tech text-slate-300 mb-6 leading-relaxed">
            Full comprehensive technical breakdown detailing Artificial Intelligence engineering, MLOps pipeline architecture, full-stack modules, and academic achievements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start font-mono text-xs">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => jarvisAudio.playBeep(1200, 'sine', 0.1)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-arcblue-600 to-cyan-500 text-dark-950 font-bold shadow-hud-cyan hover:scale-105 transition-all uppercase tracking-wider"
            >
              <FiDownload size={16} /> DOWNLOAD DOSSIER
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => jarvisAudio.playBeep(1000, 'sine', 0.08)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-950 border border-cyan-500/40 text-cyan-400 hover:border-amber-400 hover:text-amber-400 transition-all font-bold uppercase tracking-wider"
            >
              <FiFileText size={16} /> PREVIEW PDF
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume
