import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';

import playformCompress from '@playform/compress';

export default defineConfig({
  integrations: [tailwind(), react(), playformCompress()],
  vite: {
    ssr: {
      external: ['@fortawesome/fontawesome-free']
    }
  }
});