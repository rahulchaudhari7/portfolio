import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiCpu } from 'react-icons/fi'
import { education } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Education = () => {
  return (
    <section id="education" className="section relative">
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
          ACADEMIC ARCHIVE // KNOWLEDGE BASE
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          ACADEMIC <span className="gradient-text">CREDENTIALS</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => jarvisAudio.playBeep(1050, 'sine', 0.08)}
            className="relative pl-16 pb-8"
          >
            {idx !== education.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/80 via-arcblue-500/40 to-transparent" />
            )}

            <div className="absolute left-0 top-0 w-12 h-12 rounded-lg bg-dark-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-hud-cyan font-bold">
              <FiBookOpen size={20} />
            </div>

            <div className="p-6 rounded-2xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all relative group">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-display font-black text-slate-100 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-400 uppercase shadow-sm">
                  {edu.duration}
                </span>
              </div>
              <p className="text-xs font-mono font-bold text-amber-400 mb-3 uppercase tracking-wider">
                // {edu.institution}
              </p>

              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded w-fit">
                <FiAward className="text-emerald-400 text-sm" />
                <span className="font-bold">GRADE / SCORE: {edu.cgpa}</span>
              </div>

              <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-500 font-bold mb-2">
                RELEVANT COURSEWORK
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs font-mono px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
