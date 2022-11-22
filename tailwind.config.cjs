/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}", "/*.html"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        dark_light: "#1f1f1f",
        dark_darker: "#101010",
        true_gray: "#191919",
        light_true_gray: "#2f2f2f",
        lighter_true_gray: "#5f5f5f",
      },
      rotate: {
        158: "158deg",
      },
      fontSize: {
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      scale: {
        102: "1.02",
      },
      spacing: {
        108: "30rem",
        128: "32rem",
        132: "34rem",
        136: "36rem",
        140: "38rem",
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
