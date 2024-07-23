import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',

  server: {
    port: 3030,
    open: true,
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
