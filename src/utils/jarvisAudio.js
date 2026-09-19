// JARVIS Audio & Speech Synthesizer using standard Web Audio API & Web Speech API

class JarvisAudioSystem {
  constructor() {
    this.audioCtx = null
    this.speechEnabled = true
    this.soundFxEnabled = true
  }

  getAudioContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.audioCtx = new AudioContext()
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume()
    }
    return this.audioCtx
  }

  // Play high-tech UI beep
  playBeep(freq = 880, type = 'sine', duration = 0.08) {
    if (!this.soundFxEnabled) return
    try {
      const ctx = this.getAudioContext()
      if (!ctx) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = type
      osc.frequency.setValueAtTime(freq, ctx.currentTime)

      gain.gain.setValueAtTime(0.08, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + duration)
    } catch (e) {
      console.warn('Audio play error:', e)
    }
  }

  // Play Arc Reactor Charging / Confirmation sound sequence
  playArcCharge() {
    if (!this.soundFxEnabled) return
    try {
      const ctx = this.getAudioContext()
      if (!ctx) return
      const now = ctx.currentTime

      // Oscillator 1 - sweeping up
      const osc1 = ctx.createOscillator()
      const gain1 = ctx.createGain()
      osc1.type = 'sawtooth'
      osc1.frequency.setValueAtTime(200, now)
      osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.3)

      gain1.gain.setValueAtTime(0.06, now)
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35)

      osc1.connect(gain1)
      gain1.connect(ctx.destination)
      osc1.start(now)
      osc1.stop(now + 0.35)

      // High blip
      setTimeout(() => this.playBeep(1760, 'sine', 0.12), 250)
    } catch (e) {
      console.warn('Audio charge error:', e)
    }
  }

  // JARVIS Voice Speech Synthesis
  speak(text) {
    if (!this.speechEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }

    try {
      window.speechSynthesis.cancel() // Cancel previous speech
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 1.05
      utterance.pitch = 0.95 // Slightly deeper AI voice pitch
      utterance.volume = 0.9

      const voices = window.speechSynthesis.getVoices()
      // Try to find a crisp male/British voice or default Google UK English
      const preferredVoice = voices.find(
        (v) =>
          v.lang.includes('en') &&
          (v.name.includes('UK') || v.name.includes('Male') || v.name.includes('Oliver') || v.name.includes('Daniel') || v.name.includes('Google'))
      )
      if (preferredVoice) {
        utterance.voice = preferredVoice
      }

      window.speechSynthesis.speak(utterance)
    } catch (e) {
      console.warn('Speech synthesis error:', e)
    }
  }

  toggleSound() {
    this.soundFxEnabled = !this.soundFxEnabled
    this.speechEnabled = this.soundFxEnabled
    if (this.soundFxEnabled) {
      this.playBeep(1200, 'sine', 0.1)
    }
    return this.soundFxEnabled
  }
}

export const jarvisAudio = new JarvisAudioSystem()
