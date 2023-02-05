import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				collections: './src/routes/collections/layout.svelte'
			}
		})
	],
	extensions: ['.svelte', '.svx'],

	kit: {
		adapter: adapter({
			fallback: null,
			precompress: false,
			split: false
		}),
		files: {
			assets: 'static',
			errorTemplate: 'src/routes/+error.svelte'
		}
	}
};

export default config;
