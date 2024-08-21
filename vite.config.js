import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: './src',
  base: '/coca/',
  server: {
    port: 3030,
    open: true,
  },
  publicDir: './src/asssets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        audience: './src/audience.html',
        article: './src/article.html',
        activity: './src/activity.html',
      },
    },
  },

  plugins: [
    ViteMinifyPlugin(),
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
