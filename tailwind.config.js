const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    'index.php',
    'header.php',
    'footer.php',
    './templates/**/*.php'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        gray: colors.trueGray,
        teal: colors.teal,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
