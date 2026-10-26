import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chemickypes.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
});
