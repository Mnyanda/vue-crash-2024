/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Corrected src path
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Corrected spacing around font family
      },
      gridTemplateColumns: {
        '70/30': '70% 30%', // Adjusted grid to 70% 30%
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
