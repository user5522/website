import topLevelAwait from 'vite-plugin-top-level-await';
import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [
		topLevelAwait({
			promiseExportName: '__tla',
			promiseImportName: (i) => `__tla_${i}`
		}),
		sveltekit()
	]
};

export default config;
