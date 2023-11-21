/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        duke: "#00539b",
      },
      pastel: {
        blue: "#C6DEF1",
        pink: "#F2C6DE",
        green: "#C9E4DE"
      }
    },
  },
  plugins: [],
}

