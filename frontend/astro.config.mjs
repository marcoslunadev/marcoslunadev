// @ts-check
import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://marcoslunadev.com';

// URLs públicas reales (con build.format 'preserve' el plugin las escribe sin «.html»
// y sin la barra final de /en/).
const canonicalUrl = (url) => {
  const { pathname } = new URL(url);
  if (pathname === '/' || pathname === '/en' || pathname === '/en/') return `${site}${pathname.replace(/\/?$/, '/')}`;
  return `${site}${pathname.replace(/\/$/, '')}.html`;
};

/** Mantiene /sitemap.xml (la URL de robots.txt y de Search Console) como copia del índice. */
const sitemapAlias = () => ({
  name: 'sitemap-alias',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const out = fileURLToPath(dir);
      await copyFile(`${out}sitemap-index.xml`, `${out}sitemap.xml`);
    },
  },
});

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site,
  // 'preserve' mantiene las URLs actuales: src/pages/aviso-legal.astro → /aviso-legal.html
  // y src/pages/en/index.astro → /en/index.html (servida como /en/).
  build: {
    format: 'preserve',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
      serialize(item) {
        const isHome = /\/(en\/?)?$/.test(new URL(item.url).pathname);
        return {
          ...item,
          url: canonicalUrl(item.url),
          links: item.links?.map((link) => ({ ...link, url: canonicalUrl(link.url) })),
          changefreq: isHome ? 'weekly' : 'monthly',
          priority: isHome ? 1.0 : 0.3,
        };
      },
    }),
    sitemapAlias(),
  ],
});
