import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCalendar, FiCode } from 'react-icons/fi'
import { achievements } from '../data/portfolioData'

const iconMap = {
  trophy: FiAward,
  users: FiUsers,
  calendar: FiCalendar,
  code: FiCode,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">Milestones</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((ach, idx) => {
          const Icon = iconMap[ach.icon] || FiAward
          return (
            <motion.div
              key={ach.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl glass border border-white/5 hover:border-primary-500/30 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-primary-500/30">
                <Icon size={24} />
              </div>
              <h3 className="font-display font-bold mb-2">{ach.title}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {ach.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Achievements
