/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    debugScreens:{
      position:['top','left']
    },
    extend: {
      spacing: {
        '41.48rem': '41.48rem',
        '28rem':'28rem',
        '25.5':'25.5',
        '39':'39rem',
        '60':'60rem'
      }
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}

