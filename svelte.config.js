import adapter from '@sveltejs/adapter-vercel';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
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
