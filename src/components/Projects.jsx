import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSearch, FiClock, FiCheckCircle, FiLoader, FiBookOpen, FiCpu } from 'react-icons/fi'
import { projects, projectCategories } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const statusConfig = {
  completed: { label: 'DEPLOYED', icon: FiCheckCircle, color: 'text-emerald-400 border-emerald-500/50 bg-emerald-950/60' },
  'in-progress': { label: 'PROTOCOL ACTIVE', icon: FiLoader, color: 'text-amber-400 border-amber-500/50 bg-amber-950/60' },
  planned: { label: 'PLANNED MODULE', icon: FiClock, color: 'text-cyan-400 border-cyan-500/50 bg-cyan-950/60' },
  research: { label: 'STARK R&D', icon: FiBookOpen, color: 'text-sky-400 border-sky-500/50 bg-sky-950/60' },
}

const ProjectCard = ({ project, index }) => {
  const status = statusConfig[project.status]
  const StatusIcon = status?.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onClick={() => jarvisAudio.playBeep(1100, 'sine', 0.08)}
      className="group rounded-2xl overflow-hidden bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all flex flex-col relative"
    >
      {/* Corner Bracket Accents */}
      <div className="absolute top-2 left-2 z-10 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-2 right-2 z-10 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />

      {/* Image / Hologram Banner */}
      <div className="relative h-48 overflow-hidden bg-dark-950 border-b border-cyan-500/20 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        
        {/* Hologram Overlay Line */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-cyan-500/10 pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-5xl font-display font-black text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors uppercase">
            {project.title.charAt(0)}
          </span>
        </div>

        {status && (
          <span className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border shadow-sm ${status.color}`}>
            <StatusIcon size={12} className="animate-pulse" />
            {status.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 font-sans">
        <h3 className="text-lg font-display font-black mb-2 text-slate-100 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-tech text-slate-300 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-3 border-t border-cyan-500/20 font-mono text-xs">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-amber-400 transition-colors font-bold uppercase"
            >
              <FiGithub /> CODE_SRC
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-slate-600 cursor-not-allowed uppercase">
              <FiGithub /> PRIVATE_REPO
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-amber-400 transition-colors font-bold uppercase"
            >
              <FiExternalLink /> LIVE_DEMO
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-slate-600 cursor-not-allowed uppercase">
              <FiExternalLink /> OFFLINE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const handleCatClick = (cat) => {
    jarvisAudio.playBeep(1200, 'sine', 0.08)
    setActiveCategory(cat)
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <section id="projects" className="section relative">
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
          STARK PROTOCOLS // ARCHITECTURAL BLUEPRINTS
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          PROJECT <span className="gradient-text">REPOSITORY</span>
        </h2>
      </motion.div>

      {/* Search and filters */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between"
      >
        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
          <input
            type="text"
            placeholder="SEARCH BLUEPRINTS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-dark-900 border border-cyan-500/40 focus:border-cyan-400 text-cyan-200 placeholder:text-cyan-600 font-mono text-xs outline-none shadow-hud-cyan uppercase"
          />
        </div>

        <div className="flex gap-2 flex-wrap justify-center font-mono text-xs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCatClick(cat)}
              className={`px-4 py-2 rounded-lg font-bold uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-dark-950 shadow-[0_0_15px_#00f3ff]'
                  : 'bg-dark-900/80 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-10 font-mono text-xs text-slate-400 uppercase tracking-widest"
        >
          [NO BLUEPRINTS MATCH SEARCH QUERY]
        </motion.p>
      )}
    </section>
  )
}

export default Projects
