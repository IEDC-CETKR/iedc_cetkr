import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import playformCompress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), playformCompress(), sitemap()],
  vite: {
    ssr: {
      external: ['@fortawesome/fontawesome-free']
    },

    plugins: [tailwindcss()]
  }
});