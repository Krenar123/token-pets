module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif']
    },
    colors: {
      // Configure your color palette here
      blue: {
        light: '#85d7ff',
        DEFAULT: '#0575e5',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}