/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'rgb(17, 17, 17)',
        'secondary': 'rgb(96, 71, 236)'
      },
      fontFamily: {
        "exo-2": ["Exo 2", "serif"],
      },
    },
  },
  plugins: [],
};
