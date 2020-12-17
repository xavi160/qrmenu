const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      lime: colors.lime,
      green: colors.green,
      emeral: colors.emerald,
      teal: colors.teal
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
