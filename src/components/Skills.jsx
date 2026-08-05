import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiZap } from 'react-icons/fi'
import { skillCategories } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const SkillBar = ({ name, level, delay }) => (
  <div className="mb-5" onClick={() => jarvisAudio.playBeep(900 + level * 5, 'sine', 0.08)}>
    <div className="flex justify-between mb-1.5 font-mono text-xs">
      <span className="font-semibold text-slate-200 tracking-wider uppercase flex items-center gap-1.5">
        <FiZap className="text-cyan-400 text-xs" />
        {name}
      </span>
      <span className="text-cyan-400 font-bold">{level}%</span>
    </div>
    <div className="skill-bar-bg">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="section relative">
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
          SYSTEM DIAGNOSTICS // SKILLS MATRIX
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          TECHNICAL <span className="gradient-text">CAPABILITIES</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-dark-900/90 border border-cyan-500/30 shadow-hud-cyan relative group"
          >
            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            <h3 className="text-lg font-display font-black mb-6 uppercase tracking-wider text-cyan-300 border-b border-cyan-500/20 pb-2 flex items-center justify-between">
              <span>{cat.title}</span>
              <span className="text-xs font-mono text-amber-400">// STARK_MODULE</span>
            </h3>
            {cat.skills.map((skill, idx) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx * 0.1} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
