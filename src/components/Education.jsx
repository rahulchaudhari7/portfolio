import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiAward } from 'react-icons/fi'
import { education } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Education = () => {
  return (
    <section id="education" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">Academic background</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          <span className="gradient-text">Education</span>
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
            className="relative pl-16 pb-4"
          >
            {idx !== education.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-primary-500/50 to-transparent" />
            )}

            <div className="absolute left-0 top-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <FiBookOpen size={20} />
            </div>

            <div className="p-6 rounded-2xl glass border border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-display font-bold">{edu.degree}</h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary-500/10 text-primary-500">
                  {edu.duration}
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                {edu.institution}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <FiAward className="text-primary-500" />
                <span className="text-sm font-semibold">{edu.cgpa}</span>
              </div>

              <p className="text-xs uppercase tracking-wide font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-500 font-medium"
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
