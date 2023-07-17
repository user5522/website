/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', '/*.html'],
	theme: {
		extend: {
			colors: {
				dark: {
					300: '#1f1f1f',
					500: '#121212',
					700: '#101010',
					900: '#0d0d0d'
				},
				tgray: {
					100: '#5f5f5f',
					200: '#cdcdcd',
					300: '#2f2f2f',
					500: '#191919'
				},
				dark_blue: {
					500: '#051531'
				},
				current: 'currentColor'
			},
			rotate: {
				158: '158deg',
				360: '360deg'
			},
			fontSize: {
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'7xl': '5rem'
			},
			scale: {
				102: '1.02'
			},
			spacing: {
				108: '30rem',
				128: '32rem',
				132: '34rem',
				136: '36rem',
				140: '38rem'
			},
			screens: {
				'4xl': '3000px'
			},
			lineHeight: {
				24: '96px'
			},
			transitionDelay: {
				10000: '10000ms'
			},
			backgroundImage: {
				shapes: "url('/idk.png')",
				shapesmobile: "url('/idkm.png')"
			},
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			},
			fontFamily: {
				poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('tailwindcss'), require('autoprefixer')]
};
