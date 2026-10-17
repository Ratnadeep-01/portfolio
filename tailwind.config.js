/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#08090e',
          secondary: '#0e111a',
          tertiary: '#151926',
          card: 'rgba(18, 22, 36, 0.65)',
        },
        primary: {
          DEFAULT: '#8b5cf6', // Violet
          light: '#a78bfa',
          dark: '#6d28d9',
        },
        accent: {
          cyan: '#06b6d4',
          cyanGlow: '#22d3ee',
          pink: '#ec4899',
          purple: '#9333ea',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow-spin': 'glow-spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        'glow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'neon-violet': '0 0 35px -5px rgba(139, 92, 246, 0.45)',
        'neon-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.45)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      }
    },
  },
  plugins: [],
}
