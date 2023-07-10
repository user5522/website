import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import * as path from 'path';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.md', '.mdx'],
	smartypants: { dashes: 'oldschool' },
	layout: { collection: path.join(dirname, './src/routes/collections/layout.svelte') }
});

export default config;
