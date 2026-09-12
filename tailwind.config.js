/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* NexaFlow "Aurora Ink" design system */
        primary: '#04060E',          // page background — deep ink
        'primary-light': '#080D1A',  // raised sections
        card: '#0B1122',             // surfaces
        'card-hover': '#101832',
        border: '#1B2643',           // hairlines
        accent: '#6E63F6',           // electric indigo
        'accent-glow': '#38E1FF',    // flow cyan
        text: '#F4F6FF',
        'text-muted': '#A5AECB',
        'text-dark': '#6B7595',
        success: '#34D399',
        danger: '#F87171',
        warning: '#FBBF24',
        /* Legacy gold tokens remapped to the aurora accent scale —
           keeps every existing class working under the new identity */
        gold: '#8B93FF',
        'gold-bright': '#38E1FF',
        'gold-pale': '#C7CDFF',
        'gold-dark': '#4A44C8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'Sora', 'var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        auroraShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'aurora-shift': 'auroraShift 14s ease infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
