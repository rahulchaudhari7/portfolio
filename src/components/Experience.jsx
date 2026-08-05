import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCheckCircle, FiCpu } from 'react-icons/fi'
import { experiences } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Experience = () => {
  return (
    <section id="experience" className="section relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase flex items-center justify-center gap-2">
          <FiCpu className="text-amber-400 animate-pulse" />
          SERVICE HISTORY // CAREER TIMELINE
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          PROFESSIONAL <span className="gradient-text">EXPERIENCE</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => jarvisAudio.playBeep(1000, 'sine', 0.08)}
            className="relative pl-16 pb-8"
          >
            {/* Timeline line */}
            {idx !== experiences.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/80 via-arcblue-500/40 to-transparent" />
            )}

            {/* Icon */}
            <div className="absolute left-0 top-0 w-12 h-12 rounded-lg bg-dark-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-hud-cyan font-bold">
              <FiBriefcase size={20} />
            </div>

            <div className="p-6 rounded-2xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all relative group">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-display font-black text-slate-100 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 uppercase shadow-sm">
                  {exp.duration}
                </span>
              </div>
              <p className="text-xs font-mono font-bold text-amber-400 mb-4 uppercase tracking-wider">
                // {exp.organization}
              </p>

              <ul className="space-y-2.5">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm font-tech text-slate-300">
                    <FiCheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
