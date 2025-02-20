// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// https://astro.build/config
export default defineConfig({
    vite: {
      plugins: [tailwindcss()],
      ssr: {
        external: ['@fortawesome/fontawesome-free'],
      },
    },
  });