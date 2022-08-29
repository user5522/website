/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#121212',
				dark_light: '#1f1f1f',
				dark_darker: '#101010'
			},
			rotate: {
				158: '158deg'
			}
		}
	},
	plugins: [require('tailwindcss'), require('autoprefixer')]
};
