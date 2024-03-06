/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "duke": "#00539B",
        "purple": "#68509D",
        "light": "#F9F9F9",
        "aura": {
          "purple": "#3218D1",
          "blue": "#0F71C7"
        }
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '120rem',
        '12xl': '140rem',

      }
    },
  },
  plugins: [],
}
