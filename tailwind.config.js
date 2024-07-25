/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'Primary-Bright-Orange': 'hsl(31, 77%, 52%)',
        'Primary-Dark-Cyan': 'hsl(184, 100%, 22%)',
        'Primary-Very-Dark-Cyan': 'hsl(179, 100%, 13%)',
        'Neutral-Transparent-White': 'hsla(0, 0%, 100%, 0.75)',
        'Neutral-Very-Light-Gray': 'hsl(0, 0%, 95%)'
      },
      fontFamily: {
        'Lexend-Deca': ["Lexend Deca", 'sans-serif'],
        'Big-Shoulders': ["Big Shoulders Display", 'sans-serif']
      }
    },
  },
  plugins: [],
}

