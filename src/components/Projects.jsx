import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiSearch, FiClock, FiCheckCircle, FiLoader, FiBookOpen } from 'react-icons/fi'
import { projects, projectCategories } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const statusConfig = {
  completed: { label: 'Completed', icon: FiCheckCircle, color: 'text-green-500' },
  'in-progress': { label: 'In Progress', icon: FiLoader, color: 'text-yellow-500' },
  planned: { label: 'Planned', icon: FiClock, color: 'text-gray-400' },
  research: { label: 'Research', icon: FiBookOpen, color: 'text-primary-500' },
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
      className="group rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary-500/30 transition-colors flex flex-col"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-display font-extrabold gradient-text opacity-30">
            {project.title.charAt(0)}
          </span>
        </div>
        {status && (
          <span className={`absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium glass ${status.color}`}>
            <StatusIcon size={12} />
            {status.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-display font-bold mb-2">{project.title}</h3>
        <p className="text-sm mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-500 font-medium">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors"
            >
              <FiGithub /> Code
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-not-allowed">
              <FiGithub /> Code
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors"
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-not-allowed">
              <FiExternalLink /> Live Demo
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
    <section id="projects" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">Things I've built</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          My <span className="gradient-text">Projects</span>
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
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full glass border border-white/10 focus:border-primary-500/50 outline-none text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'gradient-bg text-white shadow-lg shadow-primary-500/30'
                  : 'glass hover:text-primary-500'
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
          className="text-center mt-10"
          style={{ color: 'var(--text-secondary)' }}
        >
          No projects found. Try a different search or filter.
        </motion.p>
      )}
    </section>
  )
}

export default Projects
