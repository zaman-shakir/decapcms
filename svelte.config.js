// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

//import adapter from '@sveltejs/adapter-node';

export default {
    extensions: ['.svelte', '.svx'], // Add .svx extension for MDsveX files
    preprocess: [
      mdsvex(), // Enable MDsveX preprocessing
      preprocess({
        scss: {
          prependData: `@import './src/global.scss';`, // Optional: Import global styles
        },
      }),
    ],
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
