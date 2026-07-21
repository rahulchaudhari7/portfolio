import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiUsers, FiTarget } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const highlightIcons = [FiCode, FiCpu, FiUsers, FiTarget]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">Get to know me</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            {['Python', 'AI & ML', 'Full Stack Development', 'Hackathons', 'Team Leadership', 'Problem Solving'].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium glass border border-primary-500/20"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>

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
                className="p-5 rounded-2xl glass border border-white/5 hover:border-primary-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-3 text-white">
                  <Icon size={18} />
                </div>
                <p className="text-sm font-medium leading-snug">{highlight}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default About
