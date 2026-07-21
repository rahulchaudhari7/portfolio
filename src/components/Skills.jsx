import React from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const SkillBar = ({ name, level, delay }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm font-mono text-primary-500">{level}%</span>
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
    <section id="skills" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">What I work with</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          My <span className="gradient-text">Skills</span>
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
            className="p-6 md:p-8 rounded-2xl glass border border-white/5"
          >
            <h3 className="text-lg font-display font-bold mb-6 gradient-text">{cat.title}</h3>
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
