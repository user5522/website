/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
				poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
			}
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer')]
};