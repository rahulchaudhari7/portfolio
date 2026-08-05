import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiUpload, FiExternalLink, FiX, FiCpu } from 'react-icons/fi'
import { certifications as initialCerts } from '../data/portfolioData'
import { jarvisAudio } from '../utils/jarvisAudio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Certifications = () => {
  const [certs, setCerts] = useState(initialCerts)

  const handleFileChange = (id, e) => {
    const file = e.target.files?.[0]
    if (!file) return
    jarvisAudio.playBeep(1400, 'sine', 0.1)
    const url = URL.createObjectURL(file)
    setCerts((prev) => prev.map((c) => (c.id === id ? { ...c, image: url, uploaded: true } : c)))
  }

  const removeUpload = (id) => {
    jarvisAudio.playBeep(800, 'sine', 0.08)
    setCerts((prev) => prev.map((c) => (c.id === id ? { ...c, image: '', uploaded: false } : c)))
  }

  return (
    <section id="certifications" className="section relative">
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
          VERIFIED PROTOCOLS // CERTIFICATION MATRIX
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider">
          ACCREDITED <span className="gradient-text">CERTIFICATIONS</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-dark-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-hud-cyan transition-all overflow-hidden flex flex-col relative group"
          >
            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 z-10 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 z-10 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />

            <div className="relative h-36 bg-dark-950 border-b border-cyan-500/20 flex items-center justify-center">
              {cert.image && cert.uploaded ? (
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              ) : (
                <FiAward size={40} className="text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
              )}

              {cert.uploaded && (
                <button
                  onClick={() => removeUpload(cert.id)}
                  className="absolute top-2 right-2 p-1.5 rounded bg-red-950/80 border border-red-500 text-red-400 hover:bg-red-900 transition-colors z-20"
                  aria-label="Remove certificate"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1 font-sans">
              <span className="text-[10px] font-mono font-bold text-amber-400 mb-1 uppercase tracking-wider">
                // {cert.category}
              </span>
              <h3 className="font-display font-black text-slate-100 mb-1 text-sm uppercase tracking-wide">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400/70 mb-4">
                {cert.issuer} &middot; {cert.date}
              </p>

              <div className="mt-auto flex flex-col gap-2 font-mono text-xs">
                <label className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-dark-950 border border-cyan-500/40 text-cyan-300 hover:border-amber-400 hover:text-amber-400 cursor-pointer transition-colors uppercase font-bold text-[11px]">
                  <FiUpload size={14} />
                  {cert.uploaded ? 'REPLACE DOC' : 'UPLOAD DOC'}
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange(cert.id, e)}
                  />
                </label>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-dark-950 transition-colors font-bold uppercase text-[11px]"
                  >
                    <FiExternalLink size={14} />
                    VERIFY CREDENTIAL
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
