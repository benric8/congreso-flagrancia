/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens:{
        '3xl': '1920px', // Breakpoint para pantallas de 1920px
        '4xl': '2560px', // Breakpoint para pantallas de 2560px
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
 
}

