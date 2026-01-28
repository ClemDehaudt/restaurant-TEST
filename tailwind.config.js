/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette italienne moderne 2026
        'cream': '#FFFBF5',
        'white': '#FFFFFF',
        'primary': '#D32F2F',
        'primary-dark': '#C62828',
        'secondary': '#2E7D32',
        'secondary-dark': '#1B5E20',
        'accent': '#FFA000',
        'accent-dark': '#FF6F00',
        'terracotta': '#E64A19',
        'text-dark': '#212121',
        'text-gray': '#616161',
        'border-light': '#E0E0E0',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(30) 1s 1 normal both',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(211, 47, 47, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(211, 47, 47, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #D32F2F 0%, #C62828 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFA000 0%, #FF6F00 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
