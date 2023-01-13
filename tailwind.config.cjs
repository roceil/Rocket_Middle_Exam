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
      // 這邊應該要新增xl以上的斷點 1280
      colors: {
        'primary': '#38470B',
        "light-primary": "#949C7C"
      },
    },
  },
  plugins: [],
}
