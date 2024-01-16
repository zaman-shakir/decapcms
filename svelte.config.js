// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export default {
  kit: {
    adapter: adapter(),
    // Other kit configurations...
  },
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/global.scss';`, // Optional: Import global styles
    },
  }),
};


// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;
// svelte.config.js
