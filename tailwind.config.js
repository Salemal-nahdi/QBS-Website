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
        'qbs-primary': '#1a4c8e',
        'qbs-primary-dark': '#143d73',
        'qbs-primary-light': '#2155a0',
        'qbs-secondary': '#f8fafc',
        'qbs-accent': '#1a4c8e',
        'qbs-accent-dark': '#143d73',
        'qbs-white': '#ffffff',
        'qbs-gray-light': '#f1f5f9',
        'qbs-gray': '#e2e8f0',
        'qbs-gray-dark': '#64748b',
        'qbs-text': '#1e293b',
        'qbs-text-light': '#475569',
        'qbs-text-dim': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
