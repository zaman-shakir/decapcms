// svelte.config.js
//import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

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
