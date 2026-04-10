/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neon: '#00FF88',
        'neon-dim': '#00cc6a',
        'dark-base': '#0a0a0a',
        'dark-card': '#111111',
        'dark-card-alt': '#161616',
        'dark-border': '#1e1e1e',
        'dark-border-light': '#2a2a2a',
        'text-muted': '#6b7280',
        'text-secondary': '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(0, 255, 136, 0.3)',
        'neon-md': '0 0 20px rgba(0, 255, 136, 0.4)',
        'neon-lg': '0 0 40px rgba(0, 255, 136, 0.3)',
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 255, 136, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
