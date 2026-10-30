import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://angelomoroni.com',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // old Italian URL, now the default
  redirects: { '/it': '/' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/it/'),
      i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-US' } },
    }),
  ],
});