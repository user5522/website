/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        dark_light: "#1f1f1f",
        dark_darker: "#101010",
        true_gray: "#292929",
        light_true_gray: "#404040",
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
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
