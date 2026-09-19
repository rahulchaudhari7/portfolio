import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiRadio, FiSend, FiTerminal } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Contact = () => {
  const handleSubmit = () => {
    jarvisAudio.playBeep(1600, 'triangle', 0.15)
  }

  return (
    <section id="contact" className="section relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-cyan-400 font-mono text-xs mb-2 tracking-widest uppercase flex items-center justify-center gap-2">
          <FiRadio className="text-amber-400 animate-pulse" />
          SECURE COMM CHANNEL // TRANSMISSION PROTOCOL
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          INITIATE <span className="gradient-text">COMMUNICATION</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto font-tech text-slate-300 text-sm md:text-base">
          Have an AI mission brief, research proposal, or collaboration inquiry? Secure transmission terminal active.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Contact Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-4 font-mono"
        >
          <div className="p-5 rounded-xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan flex items-center gap-4 relative">
            <div className="w-11 h-11 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FiMail size={20} />
            </div>
            <div>
              <p className="text-[10px] text-amber-400 uppercase tracking-widest">// SECURE EMAIL</p>
              <p className="font-bold text-slate-200 text-xs sm:text-sm">{personalInfo.email}</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan flex items-center gap-4 relative">
            <div className="w-11 h-11 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FiMapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] text-amber-400 uppercase tracking-widest">// BASE COORDINATES</p>
              <p className="font-bold text-slate-200 text-xs sm:text-sm">{personalInfo.location}</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan flex items-center gap-4 relative">
            <div className="w-11 h-11 rounded-lg bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <FiPhone size={20} />
            </div>
            <div>
              <p className="text-[10px] text-amber-400 uppercase tracking-widest">// AVAILABILITY</p>
              <p className="font-bold text-emerald-400 text-xs uppercase">ONLINE // OPEN FOR INTERNSHIPS</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Terminal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 p-8 rounded-2xl bg-dark-900/95 border-2 border-cyan-500/40 shadow-hud-cyan relative"
        >
          {/* Corner Brackets */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-amber-400 border-b border-cyan-500/20 pb-2">
            <FiTerminal className="text-cyan-400" />
            <span>TRANSMISSION TERMINAL // ENCRYPTED v2.4</span>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 font-mono text-xs"
          >
            <input type="hidden" name="access_key" value="71c7aaef-2dc4-4e5e-a992-67f319713c81" />

            <div>
              <label className="block text-cyan-300 font-bold mb-1.5 uppercase tracking-wider">01 // CALLSIGN / NAME</label>
              <input
                required
                type="text"
                name="name"
                placeholder="TONY STARK"
                className="w-full px-4 py-3 rounded bg-dark-950 border border-cyan-500/40 focus:border-cyan-400 text-cyan-200 placeholder:text-cyan-700 outline-none uppercase font-mono shadow-sm"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-bold mb-1.5 uppercase tracking-wider">02 // COMM ADDRESS / EMAIL</label>
              <input
                required
                type="email"
                name="email"
                placeholder="TONY@STARKINDUSTRIES.COM"
                className="w-full px-4 py-3 rounded bg-dark-950 border border-cyan-500/40 focus:border-cyan-400 text-cyan-200 placeholder:text-cyan-700 outline-none uppercase font-mono shadow-sm"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-bold mb-1.5 uppercase tracking-wider">03 // MISSION OBJECTIVE</label>
              <input
                type="text"
                name="project_type"
                placeholder="E.G., LLM AGENT, VISION MODEL, ML RESEARCH"
                className="w-full px-4 py-3 rounded bg-dark-950 border border-cyan-500/40 focus:border-cyan-400 text-cyan-200 placeholder:text-cyan-700 outline-none uppercase font-mono shadow-sm"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-bold mb-1.5 uppercase tracking-wider">04 // ENCRYPTED BRIEF</label>
              <textarea
                required
                name="message"
                placeholder="DESCRIBE THE OBJECTIVE AND SPECIFICATIONS..."
                rows={4}
                className="w-full px-4 py-3 rounded bg-dark-950 border border-cyan-500/40 focus:border-cyan-400 text-cyan-200 placeholder:text-cyan-700 outline-none uppercase font-mono shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-500 via-arcblue-600 to-cyan-500 text-dark-950 font-display font-black text-sm shadow-hud-cyan hover:shadow-hud-cyan-lg hover:scale-[1.02] transition-all cursor-pointer uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <FiSend className="text-base" /> TRANSMIT BRIEF TO RAHUL
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
