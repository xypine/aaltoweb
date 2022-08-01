import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = true;
console.log("dev:", dev);

const base_path = dev ? '' : '/aaltoweb';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		replace: [[/process\.env\.NODE_ENV/g, JSON.stringify(dev)]],
	}),

	kit: {
		adapter: adapter(),
		paths:
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
