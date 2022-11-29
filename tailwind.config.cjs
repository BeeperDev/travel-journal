/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lexend-deca": ['"Lexend Deca"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
