module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather'],
      },
      height:{
        screenNav: "calc(100vh - 4rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
