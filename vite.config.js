// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// ما دیگر به 'path' و '__dirname' نیازی نداریم

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        singleProduct: 'single-product.html',
      },
    },
  },
});