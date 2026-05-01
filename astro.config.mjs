// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://darssh26.github.io',
  base: '/portfolio',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
