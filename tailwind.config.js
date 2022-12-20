/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#31C3BD',
        'light-yellow': '#F2B137',
        'dark-navy': '#1A2A33',
        'silver': '#A8BFC9',
      },
      boxShadow: {
        'inset': 'inset 0px -8px 0px #000000;'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
