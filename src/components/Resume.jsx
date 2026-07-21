import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Resume = () => {
  return (
    <section id="resume" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">My resume</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          <span className="gradient-text">Resume</span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl mx-auto p-8 rounded-3xl glass border border-white/5 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-32 h-40 rounded-xl gradient-bg flex items-center justify-center text-white shadow-lg shadow-primary-500/30 flex-shrink-0">
          <FiFileText size={48} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-display font-bold mb-2">{personalInfo.name} — Resume</h3>
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            Get a quick overview of my education, skills, and project experience. Download the full PDF or
            preview it below.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold shadow-lg shadow-primary-500/30 hover:scale-105 transition-all"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary-500/40 font-semibold hover:bg-primary-500/10 transition-all"
            >
              <FiFileText /> Preview Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume
