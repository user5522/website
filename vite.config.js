import { sveltekit } from '@sveltejs/kit/vite';

const config = {
<<<<<<< Updated upstream
	plugins: [sveltekit()]
=======
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..']
		}
	}
>>>>>>> Stashed changes
};

export default config;
