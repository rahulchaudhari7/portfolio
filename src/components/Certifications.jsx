import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiUpload, FiExternalLink, FiX } from 'react-icons/fi'
import { certifications as initialCerts } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const Certifications = () => {
  const [certs, setCerts] = useState(initialCerts)
  const [uploadingId, setUploadingId] = useState(null)

  const handleFileChange = (id, e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setCerts((prev) => prev.map((c) => (c.id === id ? { ...c, image: url, uploaded: true } : c)))
    setUploadingId(null)
  }

  const removeUpload = (id) => {
    setCerts((prev) => prev.map((c) => (c.id === id ? { ...c, image: '', uploaded: false } : c)))
  }

  return (
    <section id="certifications" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary-500 font-mono text-sm mb-2 tracking-widest uppercase">Verified learning</p>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold">
          <span className="gradient-text">Certifications</span>
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
            className="rounded-2xl glass border border-white/5 hover:border-primary-500/30 transition-colors overflow-hidden flex flex-col"
          >
            <div className="relative h-36 bg-gradient-to-br from-primary-500/15 to-accent-500/15 flex items-center justify-center">
              {cert.image && cert.uploaded ? (
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              ) : (
                <FiAward size={36} className="text-primary-500/50" />
              )}

              {cert.uploaded && (
                <button
                  onClick={() => removeUpload(cert.id)}
                  className="absolute top-2 right-2 p-1.5 rounded-full glass hover:text-red-500"
                  aria-label="Remove certificate"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>

            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs font-mono text-primary-500 mb-1">{cert.category}</span>
              <h3 className="font-display font-bold mb-1 text-sm">{cert.title}</h3>
              <p className="text-xs mb-4" style={{ color: 'var(--text-secondary)' }}>
                {cert.issuer} &middot; {cert.date}
              </p>

              <div className="mt-auto flex flex-col gap-2">
                <label className="flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-full glass cursor-pointer hover:text-primary-500 transition-colors">
                  <FiUpload size={14} />
                  {cert.uploaded ? 'Replace Certificate' : 'Upload Certificate'}
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
                    className="flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-colors"
                  >
                    <FiExternalLink size={14} />
                    View Credential
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
