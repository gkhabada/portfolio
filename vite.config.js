import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  base: './',
  build: {
    emptyOutDir: false,
  },
  plugins: [pugPlugin()],
});
