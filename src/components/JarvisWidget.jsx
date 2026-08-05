import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCpu, FiX, FiVolume2, FiVolumeX, FiSend, FiTerminal, FiZap, FiRadio, FiCode } from 'react-icons/fi'
import { jarvisAudio } from '../utils/jarvisAudio'

const presetCommands = [
  { label: 'Analyze Skills Matrix', action: 'skills', voice: 'Scanning Rahul\'s skills matrix. Python proficiency at 85 percent, AI/ML models loaded.' },
  { label: 'Display Key Projects', action: 'projects', voice: 'Displaying high-priority Stark projects including IELTS AI Platform and Authentication Engine.' },
  { label: 'System Diagnostics', action: 'diagnostics', voice: 'Running full system diagnostics. All quantum cores operational at 99.8 percent efficiency.' },
  { label: 'Establish Contact Channel', action: 'contact', voice: 'Opening direct communication channel to Rahul Chaudhary.' },
]

const JarvisWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputMsg, setInputMsg] = useState('')
  const [messages, setMessages] = useState([
    {
      sender: 'JARVIS',
      text: 'Greetings, boss. I am J.A.R.V.I.S, Rahul\'s AI assistant. How may I assist your inspection today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [soundOn, setSoundOn] = useState(true)

  useEffect(() => {
    if (isOpen) {
      jarvisAudio.playArcCharge()
    }
  }, [isOpen])

  const handleCommand = (cmd) => {
    jarvisAudio.playBeep(1200, 'sine', 0.1)
    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const newMsgs = [...messages, { sender: 'USER', text: cmd.label, time: userTime }]

    setTimeout(() => {
      newMsgs.push({
        sender: 'JARVIS',
        text: cmd.voice,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })
      setMessages([...newMsgs])
      if (soundOn) {
        setIsSpeaking(true)
        jarvisAudio.speak(cmd.voice)
        setTimeout(() => setIsSpeaking(false), 4000)
      }

      // Scroll to target element if applicable
      if (cmd.action) {
        const el = document.getElementById(cmd.action)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 400)
  }

  const handleCustomSend = (e) => {
    e.preventDefault()
    if (!inputMsg.trim()) return

    jarvisAudio.playBeep(1000, 'sine', 0.08)
    const text = inputMsg.trim()
    setInputMsg('')

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const updated = [...messages, { sender: 'USER', text, time: userTime }]
    setMessages(updated)

    // Generate intelligent AI response based on query
    setTimeout(() => {
      let reply = `Command acknowledged: "${text}". Rahul specializes in Python, AI/ML, and Full Stack React systems.`
      const query = text.toLowerCase()

      if (query.includes('hello') || query.includes('hi') || query.includes('jarvis')) {
        reply = "At your service. Systems are online and monitoring Rahul Chaudhary's portfolio telemetry."
      } else if (query.includes('project') || query.includes('work') || query.includes('ielts')) {
        reply = 'Rahul has developed the AI IELTS Preparation Platform, Full Stack Auth System, and medical robotics research.'
        const el = document.getElementById('projects')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else if (query.includes('skill') || query.includes('python') || query.includes('tech')) {
        reply = 'Rahul excels in Python, C++, React.js, Node.js, MongoDB, Pandas, Scikit-Learn, and DSA problem solving.'
        const el = document.getElementById('skills')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else if (query.includes('contact') || query.includes('hire') || query.includes('email')) {
        reply = 'You can reach Rahul directly at chaudharyraul07@gmail.com or dispatch a message in the Contact terminal.'
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else if (query.includes('education') || query.includes('cu') || query.includes('college')) {
        reply = 'Rahul is pursuing Bachelor of Engineering in CS with AI/ML Specialization at Chandigarh University (CGPA 7.84).'
        const el = document.getElementById('education')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'JARVIS',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])

      if (soundOn) {
        setIsSpeaking(true)
        jarvisAudio.speak(reply)
        setTimeout(() => setIsSpeaking(false), 4500)
      }
    }, 500)
  }

  const toggleSound = () => {
    const newState = jarvisAudio.toggleSound()
    setSoundOn(newState)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Arc Reactor Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-dark-900 border-2 border-cyan-500 shadow-hud-cyan text-cyan-400 flex items-center justify-center cursor-pointer"
          aria-label="Open JARVIS AI Assistant"
        >
          {/* Arc reactor outer spinning ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-spin-slow border-t-cyan-300" />
          <div className="absolute -inset-1 rounded-full bg-cyan-500/20 blur-md group-hover:bg-cyan-400/40 transition-all" />
          
          <FiCpu className="text-2xl relative z-10 animate-pulse" />

          {/* Pulse badge */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-dark-900 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-dark-900" />
        </motion.button>
      )}

      {/* Expanded JARVIS HUD Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-[90vw] sm:w-[420px] h-[520px] bg-dark-950/90 backdrop-blur-xl border-2 border-cyan-500/60 rounded-2xl shadow-hud-cyan-lg flex flex-col overflow-hidden text-cyan-400 relative font-sans"
          >
            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            {/* Header */}
            <div className="px-4 py-3 bg-dark-900/80 border-b border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-cyan-400/50 animate-ping" />
                </div>
                <span className="font-display font-bold text-sm tracking-wider uppercase gradient-text">
                  J.A.R.V.I.S // AI ASSISTANT
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  aria-label="Toggle speech"
                  className="p-1.5 rounded-md hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                >
                  {soundOn ? <FiVolume2 /> : <FiVolumeX className="text-gray-500" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close JARVIS"
                  className="p-1.5 rounded-md hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Status ticker */}
            <div className="px-4 py-1.5 bg-cyan-950/30 border-b border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
              <span className="flex items-center gap-1">
                <FiRadio className="text-xs text-cyan-400 animate-pulse" /> CORE STATUS: ONLINE
              </span>
              <span>AUDIO: {isSpeaking ? 'TRANSMITTING...' : 'IDLE'}</span>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs scrollbar-thin">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    m.sender === 'USER' ? 'items-end' : 'items-start'
                  }`}
                >
                  <span className="text-[10px] text-cyan-500/60 mb-0.5">
                    [{m.time}] {m.sender}
                  </span>
                  <div
                    className={`max-w-[85%] p-2.5 rounded-lg border ${
                      m.sender === 'USER'
                        ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-100 rounded-tr-none'
                        : 'bg-dark-900/90 border-cyan-500/30 text-cyan-300 rounded-tl-none shadow-[0_0_10px_rgba(0,243,255,0.1)]'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick command buttons */}
            <div className="p-2 border-t border-cyan-500/20 bg-dark-900/40 grid grid-cols-2 gap-1.5">
              {presetCommands.map((cmd) => (
                <button
                  key={cmd.action}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1.5 rounded bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 text-[11px] font-mono text-left truncate flex items-center gap-1.5 transition-all"
                >
                  <FiZap className="text-cyan-400 text-xs shrink-0" />
                  <span className="truncate">{cmd.label}</span>
                </button>
              ))}
            </div>

            {/* Custom Input Form */}
            <form
              onSubmit={handleCustomSend}
              className="p-2 bg-dark-900 border-t border-cyan-500/30 flex items-center gap-2"
            >
              <FiTerminal className="text-cyan-400 ml-1 text-sm" />
              <input
                type="text"
                placeholder="Ask JARVIS about Rahul..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 bg-transparent border-none text-xs font-mono text-cyan-200 focus:outline-none placeholder:text-cyan-600"
              />
              <button
                type="submit"
                className="p-2 rounded bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/50 text-cyan-400 transition-colors"
              >
                <FiSend className="text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default JarvisWidget
