/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-base': '#128D02',
        'orange-medium': '#F29305',
        'silver': '#979797',
      },
      fontFamily: {
        sans: ['var(--font-figtree)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
