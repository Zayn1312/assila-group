import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1A1428',
          950: '#0A0613',
        },
        orange: {
          gitlab: '#FC6D26',
        },
        purple: {
          gitlab: '#6E49CB',
        },
        red: {
          gitlab: '#E24329',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-float': 'glow-float 12s ease-in-out infinite alternate',
        'glow-float-reverse': 'glow-float-reverse 14s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-float': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        'glow-float-reverse': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-40px, 30px) scale(1.05)' },
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

export default config
