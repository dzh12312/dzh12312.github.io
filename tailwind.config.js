/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js',
    './config.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'rgb(var(--tw-brand-50) / <alpha-value>)',
          100: 'rgb(var(--tw-brand-100) / <alpha-value>)',
          200: 'rgb(var(--tw-brand-200) / <alpha-value>)',
          300: 'rgb(var(--tw-brand-300) / <alpha-value>)',
          400: 'rgb(var(--tw-brand-400) / <alpha-value>)',
          500: 'rgb(var(--tw-brand-500) / <alpha-value>)',
          600: 'rgb(var(--tw-brand-600) / <alpha-value>)',
          700: 'rgb(var(--tw-brand-700) / <alpha-value>)'
        },
        mist: { white: 'rgb(var(--tw-mist-white) / <alpha-value>)' },
        ink: { 950: 'rgb(var(--tw-ink-950) / <alpha-value>)' }
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-dark': 'var(--shadow-card-dark)'
      }
    }
  },
  plugins: []
}
