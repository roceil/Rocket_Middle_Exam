/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '3rem',
        lg: '128px',
      },
      center: true,
      // container預設斷點拔掉,改成1024以上,1366以上
      screens: {
        'md': '1024px',
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
