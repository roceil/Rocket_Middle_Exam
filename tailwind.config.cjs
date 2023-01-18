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
      keyframes: {
        flash: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' },
        },
        fadeOut: {
          '100%': { opacity: '0' },
          '0%': { opacity: '1' },
        },
        fadeIn: {
          '60%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        flash: 'flash 1.4s infinite linear',
        fadeOut: 'fadeOut 2s linear',
        fadeIn: 'fadeIn 1s linear',
      },
    },
  },
  plugins: [],
}
