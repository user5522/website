/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        white: "#ffffff",
        black: "#000000",
        light_dark: "#1f1f1f",
        gray_proper: "#808080",
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
