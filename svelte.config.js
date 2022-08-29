import adapter from '@sveltejs/adapter-auto';
<<<<<<< Updated upstream
=======
import preprocess from 'svelte-preprocess';
>>>>>>> Stashed changes

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
<<<<<<< Updated upstream
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
=======
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
>>>>>>> Stashed changes
};

export default config;
