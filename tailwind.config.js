/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ec4899',     // Hot Pink
        secondary: '#a855f7',   // Purple
        accent: '#f72585',      // Deep Pink
        darkbg: '#0f0f1a',      // Almost black
        cardbg: '#1a1a2e',     // Dark card
        pinkglow: '#ff1493',
      },
    },
  },
  plugins: [],
}