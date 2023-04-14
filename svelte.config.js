import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', ...mdsvexConfig.extensions],

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
