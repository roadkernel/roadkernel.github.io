/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0b0b0b",
        secondary: "#FFFFFF",
        tertiary: "#131313",
        "black-100": "#9b6d81",
        "black-200": "#000000",
        "white-100": "#f3f3f3",
        "pink-500": "#d89bb5",
        "minion": "#ce4e4d",
      },
      boxShadow: {
        card: "0px 5px 20px -3px #a88a97",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
