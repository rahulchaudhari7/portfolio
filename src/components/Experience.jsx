import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import { experiences } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">My journey</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          <span className="gradient-text">Experience</span>
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
            className="relative pl-16 pb-4"
          >
            {/* Timeline line */}
            {idx !== experiences.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary-500/50 to-transparent" />
            )}

            {/* Icon */}
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <FiBriefcase size={20} />
            </div>

            <div className="p-6 rounded-2xl glass border border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary-500/10 text-primary-500">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {exp.organization}
              </p>

              <ul className="space-y-2">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <FiCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span style={{ color: 'var(--text-secondary)' }}>{r}</span>
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
