/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        cream: '#fff8ef',
        forest: '#003e1f',
        gold: '#c4a263',
        red: '#bf4e30'
      },
      fontFamily: {
        title: ['"The Holiday"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
