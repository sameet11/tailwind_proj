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
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}

