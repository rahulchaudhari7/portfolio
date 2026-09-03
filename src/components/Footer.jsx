import React from 'react'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiShield, FiCpu } from 'react-icons/fi'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { socialLinks, personalInfo } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const quickLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
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
    <footer className="border-t border-cyan-500/20 bg-dark-950/80 mt-16 relative font-mono text-xs">
      <div className="section py-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-display font-black text-lg tracking-wider">
            <FiShield className="text-amber-400" />
            <span>RC SYSTEM // RAHUL CHAUDHARY</span>
          </div>
          <p className="text-slate-400 text-xs mt-1 font-tech">
            {personalInfo.name} &middot; {personalInfo.title}
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap uppercase font-bold text-cyan-400/80">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => jarvisAudio.playBeep(1200, 'sine', 0.05)}
              className="hover:text-amber-400 cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center md:justify-end gap-3">
          {socials.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              onClick={() => jarvisAudio.playBeep(1100, 'sine', 0.05)}
              className="p-2.5 rounded-lg bg-dark-900 border border-cyan-500/30 text-cyan-400 hover:border-amber-400 hover:text-amber-400 transition-all shadow-hud-cyan"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center py-4 border-t border-cyan-500/10 text-[11px] text-slate-500 flex items-center justify-center gap-2">
        <FiCpu className="text-amber-400 text-xs animate-pulse" />
        <span>© {new Date().getFullYear()} {personalInfo.name} // STARK OS OPERATIONAL. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  )
}

export default Footer
