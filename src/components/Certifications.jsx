import React from 'react'
import { motion } from 'framer-motion'
import {
  FiAward,
  FiExternalLink,
  FiFileText,
  FiCpu,
  FiCalendar,
  FiCheckCircle,
  FiCheck,
} from 'react-icons/fi'
import { certifications } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

const Certifications = () => {
  return (
    <section id="certifications" className="section relative">
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
          VERIFIED CREDENTIALS // ACCREDITATION ARCHIVE
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          HONORS &amp; <span className="gradient-text">CERTIFICATIONS</span>
        </h2>
        <p className="text-slate-400 text-xs md:text-sm font-tech max-w-xl mx-auto mt-2">
          Official engineering certifications, industrial simulations, and hackathon recognitions.
        </p>
      </motion.div>

      {/* 2-column grid on desktop, 1-column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            onClick={() => jarvisAudio.playBeep(1300, 'sine', 0.05)}
            className="rounded-2xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400/80 shadow-hud-cyan transition-all p-6 flex flex-col justify-between relative group font-sans"
          >
            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 z-10 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 z-10 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />

            <div>
              {/* Header: Icon, Issuer, Category Badge */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-300 transition-all shadow-sm shrink-0">
                    <FiAward size={20} className="text-cyan-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    {cert.provider && (
                      <span className="text-[11px] font-mono text-slate-400 block -mt-0.5">
                        via {cert.provider}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                  {cert.category}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="font-display font-black text-slate-100 text-base md:text-lg mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                {cert.title}
              </h3>

              {/* Metadata Details (Date, ID, Instructor, Duration, Event) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <FiCalendar size={12} className="text-cyan-400" />
                  {cert.date}
                </span>

                {cert.credentialType && (
                  <span className="text-cyan-400/80">
                    &middot; {cert.credentialType}
                  </span>
                )}

                {cert.duration && (
                  <span className="text-slate-400">
                    &middot; {cert.duration}
                  </span>
                )}

                {cert.credentialId && (
                  <span className="text-amber-400/90 font-bold">
                    &middot; ID: {cert.credentialId}
                  </span>
                )}

                {cert.instructor && (
                  <span className="text-slate-400 block w-full mt-1">
                    Instructor: <strong className="text-slate-300">{cert.instructor}</strong>
                  </span>
                )}

                {cert.event && (
                  <span className="text-cyan-400/90 block w-full mt-1">
                    Event: {cert.event}
                  </span>
                )}
              </div>

              {/* Practical tasks included if present */}
              {cert.tasks && cert.tasks.length > 0 && (
                <div className="mb-3 p-3 rounded-lg bg-dark-950/80 border border-cyan-500/20 text-xs">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1.5 uppercase tracking-wider">
                    Practical Tasks Included:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono text-[11px] text-slate-300">
                    {cert.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-1.5">
                        <FiCheck size={11} className="text-emerald-400 shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills/Tags */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20 text-cyan-300"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Action Area */}
            <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between mt-auto">
              {cert.verificationUrl ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-500 text-cyan-300 hover:text-dark-950 border border-cyan-500/40 hover:border-cyan-400 font-mono text-xs font-bold uppercase transition-all shadow-sm group/btn"
                >
                  <FiExternalLink size={13} className="text-cyan-400 group-hover/btn:text-dark-950 transition-colors" />
                  <span>View Certificate ↗</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950/80 border border-slate-700/50 text-slate-400 font-mono text-[11px]">
                  <FiFileText size={13} className="text-amber-400/90 shrink-0" />
                  <span>Certificate available on request</span>
                </div>
              )}

              <span className="text-[10px] font-mono text-cyan-600 tracking-wider uppercase hidden sm:inline">
                // VERIFIED_LOG
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
