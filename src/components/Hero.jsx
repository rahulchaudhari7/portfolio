import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { personalInfo, socialLinks } from '../data/portfolioData'
import ParticleBackground from './ParticleBackground'

const socials = [
  { icon: FiGithub, url: socialLinks.github, label: 'GitHub' },
  { icon: FiLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FiMail, url: socialLinks.email, label: 'Email' },
  { icon: SiLeetcode, url: socialLinks.leetcode, label: 'LeetCode' },
  { icon: SiHackerrank, url: socialLinks.hackerrank, label: 'HackerRank' },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <ParticleBackground />

      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow -z-10" />

      <div className="section flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary-500 font-mono text-sm md:text-base mb-3 tracking-wide"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-4 leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold mb-4 h-12 md:h-14"
          >
            <span className="gradient-text">
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg max-w-xl mx-auto lg:mx-0"
            style={{ color: 'var(--text-secondary)' }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105 transition-all"
            >
              <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-primary-500/40 font-semibold hover:bg-primary-500/10 hover:scale-105 transition-all cursor-pointer"
            >
              Contact Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full glass hover:text-primary-500 hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full gradient-bg blur-2xl opacity-40 animate-pulse-slow" />
            <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-float" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass flex items-center justify-center">
              {/* Replace src with your actual profile picture */}
              <img
                src="/profile.jpeg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-6xl font-display font-bold gradient-text">
                {personalInfo.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-primary-500/40 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
