import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCalendar, FiCode, FiCpu } from 'react-icons/fi'
import { achievements } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

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
    <section id="achievements" className="section relative">
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
          SYSTEM MILESTONES // HONORS LOG
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          NOTABLE <span className="gradient-text">ACHIEVEMENTS</span>
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
              onClick={() => jarvisAudio.playBeep(1200, 'sine', 0.08)}
              className="p-6 rounded-2xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all text-center relative group cursor-pointer"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />

              <div className="w-14 h-14 rounded-xl bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-cyan-400 mx-auto mb-4 shadow-[0_0_15px_rgba(0,243,255,0.3)] group-hover:bg-cyan-500 group-hover:text-dark-950 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="font-display font-black mb-2 text-slate-100 uppercase text-sm tracking-wide group-hover:text-cyan-300">
                {ach.title}
              </h3>
              <p className="text-xs font-tech text-slate-300 leading-relaxed">
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
