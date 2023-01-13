/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:'128px',
      center:true,
    },
    screens: {
      'lg': '1366px',
      // => @media (min-width: 992px) { ... }
    },
    extend: {
      colors:{
        'primary':'#38470B',
        "light-primary":"#949C7C"
      },
    },
  },
  plugins: [],
}
