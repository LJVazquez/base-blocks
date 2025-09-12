// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://LJVazquez.github.io',
	base: '/base-blocks',
	build: {
		assets: 'assets',
	},
});
