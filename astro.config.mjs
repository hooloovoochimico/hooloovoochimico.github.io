import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hooloovoochimico.github.io',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // old Italian URL, now the default
  redirects: { '/it': '/' },
});
