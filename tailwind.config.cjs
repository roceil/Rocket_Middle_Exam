/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '128px',
      center: true,
      // 變成把container斷點拔掉
      screens: {
        'lg': '1366px',
      },
    },
    extend: {
      screens: {
        // 新增2xl以上的斷點 (1536px)
        '3xl': '1600px',
      },
      colors: {
        'primary': '#38470B',
        "light-primary": "#949C7C"
      },
    },
  },
  plugins: [],
}
