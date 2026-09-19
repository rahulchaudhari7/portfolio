/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 400: '#38bdf8', 500: '#00f3ff', 600: '#0284c7', 700: '#0369a1' },
        cyan: { 400: '#38bdf8', 500: '#00f3ff', 600: '#00c3ff' },
        arcblue: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' },
        starkgold: { 400: '#fde047', 500: '#eab308', 600: '#ca8a04' },
        starkdark: { 950: '#030712', 900: '#060d1d', 800: '#0a162e', 700: '#112244', 600: '#1a3366' },
        dark: { 900: '#030712', 800: '#060d1d', 700: '#0c1938', 600: '#122654', 500: '#1b387a' },
      },
      fontFamily: {
        sans: ['Rajdhani', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'Syne', 'sans-serif'],
        hud: ['Orbitron', 'sans-serif'],
        tech: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'radar-sweep': 'radar 4s linear infinite',
      },
      keyframes: {
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-15px)' } },
        'spin-reverse': { '0%': { transform: 'rotate(360deg)' }, '100%': { transform: 'rotate(0deg)' } },
        scanline: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(1000%)' } },
        'glow-pulse': { '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,243,255,0.8))' }, '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(0,243,255,1))' } },
        radar: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
      },
      backgroundSize: { '300%': '300%' },
      boxShadow: {
        'hud-cyan': '0 0 20px rgba(0, 243, 255, 0.25), inset 0 0 15px rgba(0, 243, 255, 0.1)',
        'hud-cyan-lg': '0 0 35px rgba(0, 243, 255, 0.4), inset 0 0 25px rgba(0, 243, 255, 0.15)',
        'hud-gold': '0 0 20px rgba(234, 179, 8, 0.25), inset 0 0 15px rgba(234, 179, 8, 0.1)',
        'arc-reactor': '0 0 40px rgba(0, 243, 255, 0.6), inset 0 0 30px rgba(0, 243, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
