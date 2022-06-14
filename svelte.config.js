import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

const base_path = dev ? '' : '/wfcterrain';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		paths: dev ? {
			base: '',
		}:
		{
			base: base_path,
		},
		prerender: {
			default: true,
		},
		appDir: 'content',
	}
};

export default config;
