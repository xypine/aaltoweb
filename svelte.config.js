import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import wasmPack from 'vite-plugin-wasm-pack';

const dev = process.env.NODE_ENV === 'development';

const base_path = dev ? '' : '/aaltoweb';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

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

		vite: () => ({
			plugins: [wasmPack(['./crates/aalto2'])],
			optimizeDeps: {
				exclude: ['./crates/aalto2']
			}
		})
	}
};

export default config;
