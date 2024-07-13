/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'onboarding-1': "url('/src/assets/1.png')",
        'onboarding-2': "url('/src/assets/2.png')",
      },
      colors: {
        'custom-gray': '#C2C2C2',
        'custom-gray2': '#878787',
        'custom-yellow': '#FE8C00',
      },
    },
  },
  plugins: [],
}

