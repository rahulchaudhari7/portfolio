import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Contact = () => {

  return (
    <section id="contact" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">Let's talk</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Have a project idea, an opportunity, or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Contact info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          <div className="p-6 rounded-2xl glass border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
              <FiMail size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>Email</p>
              <p className="font-medium text-sm">{personalInfo.email}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
              <FiMapPin size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>Location</p>
              <p className="font-medium text-sm">{personalInfo.location}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
              <FiPhone size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-secondary)' }}>Availability</p>
              <p className="font-medium text-sm">Open to internships & collaborations</p>
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 p-8 rounded-2xl glass border border-white/5"
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid grid-cols-1 gap-5"
          >
            <input type="hidden" name="access_key" value="71c7aaef-2dc4-4e5e-a992-67f319713c81" />

            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input
                required
                type="text"
                name="name"
                placeholder="Tony Stark"
                className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="tony@starkindustries.com"
                className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Project Type</label>
              <input
                type="text"
                name="project_type"
                placeholder="e.g. LLM Chatbot, CV System, MLOps"
                className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                required
                name="message"
                placeholder="Tell me about your AI mission..."
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full gradient-bg text-white font-semibold shadow-lg shadow-primary-500/30 hover:scale-[1.02] transition-all"
            >
              SEND MISSION BRIEF
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
