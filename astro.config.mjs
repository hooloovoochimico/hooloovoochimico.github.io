import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hooloovoochimico.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
});
