import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // vite: {
    //   optimizeDeps: {
    //     include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    //   }
    //   // plugins: []
    // },
  },
  preprocess: vitePreprocess()
};
export default config;