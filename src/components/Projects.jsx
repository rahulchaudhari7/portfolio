import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiCpu,
  FiCheck,
  FiShoppingBag,
  FiBookOpen,
  FiGlobe,
  FiLayers,
  FiTerminal,
} from 'react-icons/fi'
import { projects, projectCategories } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

// Visual theme configurations for abstract thumbnail previews
const projectThemes = {
  'agent-cart': {
    bg: 'from-cyan-950/90 via-slate-950 to-blue-950/80',
    border: 'border-cyan-500/40',
    glow: 'rgba(0, 243, 255, 0.25)',
    icon: FiShoppingBag,
    accent: 'text-cyan-400',
    badge: 'AI SHOPPING AGENT',
  },
  'nexshop-online': {
    bg: 'from-emerald-950/90 via-slate-950 to-teal-950/80',
    border: 'border-emerald-500/40',
    glow: 'rgba(16, 185, 129, 0.25)',
    icon: FiGlobe,
    accent: 'text-emerald-400',
    badge: 'NEPAL E-COMMERCE',
  },
  'exam-mind-ai': {
    bg: 'from-indigo-950/90 via-slate-950 to-purple-950/80',
    border: 'border-indigo-500/40',
    glow: 'rgba(99, 102, 241, 0.25)',
    icon: FiBookOpen,
    accent: 'text-indigo-400',
    badge: 'STUDY ASSISTANT',
  },
  'ielts-platform': {
    bg: 'from-sky-950/90 via-slate-950 to-cyan-950/80',
    border: 'border-cyan-500/40',
    glow: 'rgba(14, 165, 233, 0.25)',
    icon: FiLayers,
    accent: 'text-sky-400',
    badge: 'IELTS PREPARATION',
  },
}

const ProjectCard = React.forwardRef(({ project, index }, ref) => {
  const isLive = project.isLive || Boolean(project.demo)
  const theme = projectThemes[project.id] || {
    bg: 'from-dark-950 via-slate-950 to-cyan-950/40',
    border: 'border-cyan-500/30',
    glow: 'rgba(0, 243, 255, 0.15)',
    icon: FiTerminal,
    accent: 'text-cyan-400',
    badge: project.category,
  }
  const ThemeIcon = theme.icon
  const demoHost = project.demo ? project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '') : null

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      onClick={() => jarvisAudio.playBeep(1100, 'sine', 0.06)}
      className="group rounded-2xl overflow-hidden bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all flex flex-col relative font-sans"
    >
      {/* Corner Bracket Accents */}
      <div className="absolute top-2 left-2 z-10 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
      <div className="absolute top-2 right-2 z-10 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />

      {/* Abstract Project Thumbnail Banner (Clean, no broken images) */}
      <div
        className={`relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br ${theme.bg} border-b border-cyan-500/20 flex flex-col justify-between p-4`}
      >
        {/* Subtle Cyber Grid Background overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:16px_16px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }}
        />

        {/* Top Badges: LIVE status & Category */}
        <div className="relative z-10 flex items-center justify-between gap-2 w-full">
          {isLive ? (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-dark-950/90 border border-emerald-500/60 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              LIVE
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded bg-dark-950/90 border border-cyan-500/40 text-cyan-400 text-[10px] font-mono font-bold tracking-wider uppercase">
              R&amp;D
            </span>
          )}

          <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
            {theme.badge}
          </span>
        </div>

        {/* Center Holographic Icon & Title Monogram */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-dark-950/80 border border-cyan-400/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-amber-400 transition-all">
            <ThemeIcon size={26} className={`${theme.accent} group-hover:text-amber-400 transition-colors`} />
          </div>
          <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase mt-2">
            // STARK ARCHITECTURE
          </span>
        </div>

        {/* Bottom Banner: Host Domain Tag */}
        {demoHost && (
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-cyan-400/90 bg-dark-950/80 px-2.5 py-1 rounded border border-cyan-500/20 backdrop-blur-xs">
            <span className="truncate flex items-center gap-1">
              <span className="text-amber-400">HOST:</span> {demoHost}
            </span>
            <FiExternalLink size={12} className="text-cyan-400 shrink-0 ml-1" />
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-display font-black text-slate-100 mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-xs font-tech text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4 p-3 rounded-lg bg-dark-950/70 border border-cyan-500/20">
            <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1.5 uppercase tracking-wider">
              HIGHLIGHT FEATURES:
            </span>
            <ul className="grid grid-cols-1 gap-1 text-[11px] font-mono text-slate-300">
              {project.features.slice(0, 4).map((feat) => (
                <li key={feat} className="flex items-start gap-1.5 leading-tight">
                  <FiCheck size={12} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
              {project.features.length > 4 && (
                <li className="text-[10px] text-cyan-500/80 font-mono italic pl-4">
                  + {project.features.length - 4} more capabilities
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between gap-3 font-mono text-xs">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-amber-400 hover:to-amber-300 text-dark-950 font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(0,243,255,0.3)] hover:shadow-[0_0_16px_rgba(251,191,36,0.4)] transition-all"
            >
              <span>Live Demo ↗</span>
            </a>
          ) : (
            <span className="flex-1 text-center py-2 text-slate-600 text-[11px] uppercase font-bold">
              Research Prototype
            </span>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-dark-950 border border-cyan-500/40 text-cyan-300 hover:border-amber-400 hover:text-amber-400 transition-colors uppercase font-bold text-[11px]"
              title="View Source Repository"
            >
              <FiGithub size={14} />
              <span className="hidden sm:inline">Code ↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
})

ProjectCard.displayName = 'ProjectCard'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const handleCatClick = (cat) => {
    jarvisAudio.playBeep(1200, 'sine', 0.08)
    setActiveCategory(cat)
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      let matchesCategory = true
      if (activeCategory === 'Live Projects') {
        matchesCategory = Boolean(p.isLive || p.demo)
      } else if (activeCategory !== 'All') {
        matchesCategory = p.category === activeCategory
      }

      const q = searchTerm.toLowerCase()
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)) ||
        (p.features && p.features.some((f) => f.toLowerCase().includes(q)))

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
          STARK PROTOCOLS // DEPLOYED SYSTEMS
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          LIVE <span className="gradient-text">PROJECTS</span>
        </h2>
        <p className="text-slate-400 text-xs md:text-sm font-tech max-w-xl mx-auto mt-2">
          Production platforms and autonomous AI systems deployed with active cloud telemetry.
        </p>
      </motion.div>

      {/* Search and Category Filters */}
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
            placeholder="SEARCH LIVE SYSTEMS & TECH..."
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

      {/* Projects grid: 2-column on md/lg desktop for spacious readability */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
          [NO LIVE SYSTEMS MATCH SEARCH QUERY]
        </motion.p>
      )}
    </section>
  )
}

export default Projects
