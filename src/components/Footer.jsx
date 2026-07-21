import React from 'react'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { socialLinks, personalInfo } from '../data/portfolioData'

const quickLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

const socials = [
  { icon: FiGithub, url: socialLinks.github, label: 'GitHub' },
  { icon: FiLinkedin, url: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FiMail, url: socialLinks.email, label: 'Email' },
  { icon: SiLeetcode, url: socialLinks.leetcode, label: 'LeetCode' },
  { icon: SiHackerrank, url: socialLinks.hackerrank, label: 'HackerRank' },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="section py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="text-center md:text-left">
          <p className="text-xl font-display font-extrabold gradient-text">{'</Dev>'}</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            {personalInfo.title}
          </p>
        </div>

        <div className="flex justify-center gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className="text-sm font-medium cursor-pointer hover:text-primary-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          {socials.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-full glass hover:text-primary-500 hover:-translate-y-1 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center py-5 border-t border-white/5 text-xs" style={{ color: 'var(--text-secondary)' }}>
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
