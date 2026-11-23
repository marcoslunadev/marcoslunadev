#!/usr/bin/env node
// Comprueba, antes de enviar el sitemap a Search Console, lo que Google va a leer:
//   - robots.txt declara el sitemap y no bloquea ninguna URL del sitemap;
//   - cada URL del sitemap responde 200 sin redirecciones;
//   - el canonical de cada página es su propia URL;
//   - <html lang> coincide con el idioma de la URL;
//   - los hreflang del <head> (es, en, x-default) coinciden con los del sitemap y son recíprocos.
//
// Uso:
//   npm run check:seo                               # producción (https://marcoslunadev.com)
//   npm run check:seo -- http://localhost:8080      # tras npm run build && npm run preview -- --port 8080
//
// Con una base distinta de producción, las URLs absolutas del sitemap se reescriben a esa base.

const SITE = 'https://marcoslunadev.com';
const base = (process.argv[2] || SITE).replace(/\/$/, '');
const local = (url) => url.replace(SITE, base);

const errors = [];
const fail = (msg) => errors.push(msg);

async function get(url) {
  const res = await fetch(local(url), { redirect: 'manual', headers: { 'user-agent': 'check-seo' } });
  return { status: res.status, location: res.headers.get('location'), text: res.status === 200 ? await res.text() : '' };
}

const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

// 1. robots.txt
const robots = await get(`${SITE}/robots.txt`);
if (robots.status !== 200) fail(`robots.txt → ${robots.status}`);
const sitemapLine = robots.text.match(/^Sitemap:\s*(\S+)/im)?.[1];
if (sitemapLine !== `${SITE}/sitemap.xml`) fail(`robots.txt: «Sitemap:» es ${sitemapLine ?? '(ninguno)'}, se esperaba ${SITE}/sitemap.xml`);
const disallow = [...robots.text.matchAll(/^Disallow:\s*(\S+)/gim)].map((m) => m[1]);

// 2. Sitemap (índice → sitemaps hijos)
const pages = new Map(); // loc → { hreflang → href }
async function readSitemap(url) {
  const res = await get(url);
  if (res.status !== 200) return fail(`${url} → ${res.status}`);
  if (res.text.includes('<sitemapindex')) {
    for (const [, child] of res.text.matchAll(/<loc>([^<]+)<\/loc>/g)) await readSitemap(child);
    return;
  }
  for (const [, block] of res.text.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)[1];
    const alts = Object.fromEntries([...block.matchAll(/<xhtml:link[^>]*>/g)].map(([t]) => [attr(t, 'hreflang'), attr(t, 'href')]));
    pages.set(loc, alts);
  }
}
await readSitemap(`${SITE}/sitemap.xml`);
if (pages.size === 0) fail('El sitemap no contiene ninguna URL');

// 3. Cada página
const rows = [];
for (const [loc, sitemapAlts] of pages) {
  const path = new URL(loc).pathname;
  const expectedLang = path.startsWith('/en/') ? 'en' : 'es';
  const page = await get(loc);
  const problems = [];

  if (page.status !== 200) problems.push(`HTTP ${page.status}${page.location ? ` → ${page.location}` : ''}`);
  if (disallow.some((d) => path.startsWith(d))) problems.push('bloqueada en robots.txt');

  if (page.status === 200) {
    const head = page.text.slice(0, page.text.indexOf('</head>'));
    const canonical = head.match(/<link[^>]*rel="canonical"[^>]*>/)?.[0];
    if (attr(canonical ?? '', 'href') !== loc) problems.push(`canonical ${attr(canonical ?? '', 'href') ?? '(ninguno)'}`);

    const lang = page.text.match(/<html[^>]*lang="([^"]+)"/)?.[1];
    if (lang !== expectedLang) problems.push(`<html lang="${lang}">`);

    if (/<meta[^>]*name="robots"[^>]*noindex/i.test(head)) problems.push('meta robots noindex');

    const headAlts = Object.fromEntries(
      [...head.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang[^>]*>/g)].map(([t]) => [attr(t, 'hreflang'), attr(t, 'href')]),
    );
    for (const l of ['es', 'en', 'x-default']) if (!headAlts[l]) problems.push(`falta hreflang ${l} en <head>`);
    for (const l of ['es', 'en']) {
      if (headAlts[l] !== sitemapAlts[l]) problems.push(`hreflang ${l}: <head> ${headAlts[l]} ≠ sitemap ${sitemapAlts[l]}`);
    }
    if (headAlts[expectedLang] !== loc) problems.push(`hreflang ${expectedLang} no apunta a sí misma`);
  }

  // Reciprocidad: cada alternativa del sitemap también está en el sitemap y apunta de vuelta
  for (const [l, href] of Object.entries(sitemapAlts)) {
    const back = pages.get(href);
    if (!back) problems.push(`alternativa ${l} ${href} no está en el sitemap`);
    else if (back[expectedLang] !== loc) problems.push(`${href} no enlaza de vuelta con hreflang ${expectedLang}`);
  }

  problems.forEach((p) => fail(`${path}: ${p}`));
  rows.push({ url: path, http: page.status, lang: expectedLang, ok: problems.length === 0 ? '✓' : '✗' });
}

console.log(`Base: ${base}  ·  sitemap: ${pages.size} URLs  ·  robots.txt: ${robots.status}`);
console.table(rows);
if (errors.length) {
  console.error(`\n${errors.length} problema(s):\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log('\nTodo correcto: el sitemap está listo para enviarlo a Search Console.');
