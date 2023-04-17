/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary:{
          100: '#E2E2D5',
          200: '#888883',
        }
      }
      // we can do this for fonts as well but be sure of the import option
    },
  },
  plugins: [],
}

