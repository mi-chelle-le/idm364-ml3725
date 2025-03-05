import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the Vercel adapter
    adapter: adapter()
  }
};

export default config;