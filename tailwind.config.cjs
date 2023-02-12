/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { fontFamily: {
      'Barlow': ['"Barlow"', 'sans-serif'],
      'Roboto': ['"Roboto Slab"', 'serif']
    }},
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
  },
  plugins: [],
}
