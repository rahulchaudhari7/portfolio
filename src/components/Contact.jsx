import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

// ====== EmailJS Configuration ======
// Replace these with your own EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      toast.success("Message sent! I'll get back to you soon.")
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

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
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 p-8 rounded-2xl glass border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1.5">Subject</label>
            <input
              required
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-2.5 rounded-xl bg-transparent border border-white/10 focus:border-primary-500/50 outline-none text-sm resize-none"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold shadow-lg shadow-primary-500/30 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <FiSend />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
