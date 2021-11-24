const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    colors: {
      transparent: 'transparent',
      current: 'currentColor', 
      gray: colors.coolGray,
      black: colors.black,
      indigo: colors.indigo,
      green: colors.emerald,
      yellow: colors.amber,
      darkbg: '#4f4d64',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
