import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'

import Navbar from './components/Navbar'
import ScrollProgressBar from './components/ScrollProgressBar'
import AnimatedCursor from './components/AnimatedCursor'
import BackToTop from './components/BackToTop'
import LoadingScreen from './components/LoadingScreen'
import JarvisWidget from './components/JarvisWidget'
import JarvisHudBackground from './components/JarvisHudBackground'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <JarvisHudBackground />
            <Toaster position="top-right" />
            <AnimatedCursor />
            <ScrollProgressBar />
            <Navbar />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Certifications />
              <Achievements />
              <Resume />
              <Contact />
            </main>

            <Footer />
            <JarvisWidget />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
