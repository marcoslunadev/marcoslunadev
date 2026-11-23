// Genera una versión reducida de Remix Icon con solo los iconos que usa la web.
// La hoja completa ocupa 138 KB de CSS bloqueante y 160 KB de fuente para ~3000
// iconos; la web usa unas decenas. Se ejecuta antes de `astro dev` y `astro build`
// (predev/prebuild), así que basta con escribir la clase `ri-*` en src/ para usar
// un icono nuevo. Fuente original: paquete npm remixicon (misma versión que antes).
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import subsetFont from 'subset-font';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const pkgDir = path.dirname(require.resolve('remixicon/package.json'));
const { version } = require('remixicon/package.json');
const outDir = path.join(root, 'src/styles/vendor/remixicon');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full !== outDir) yield* walk(full);
    } else if (/\.(astro|js|mjs|ts|json|md)$/.test(entry.name)) yield full;
  }
}

const used = new Set();
for await (const file of walk(path.join(root, 'src'))) {
  for (const [name] of (await readFile(file, 'utf8')).matchAll(/\bri-[a-z0-9]+(?:-[a-z0-9]+)*/g)) used.add(name);
}

const fullCss = await readFile(path.join(pkgDir, 'fonts/remixicon.css'), 'utf8');
const rules = [];
const codepoints = [];
for (const [rule, name, body] of fullCss.matchAll(/^\.(ri-[a-z0-9-]+)(?::before)?\s*\{([^}]*)\}/gm)) {
  if (!used.has(name)) continue;
  rules.push(rule);
  const content = body.match(/content:\s*"\\([0-9a-f]+)"/i);
  if (content) codepoints.push(parseInt(content[1], 16));
}
const missing = [...used].filter((name) => !rules.some((rule) => rule.startsWith(`.${name}`)));
if (missing.length) console.warn(`[icons] Clases ri-* sin icono en Remix Icon ${version}: ${missing.join(', ')}`);

const font = await subsetFont(await readFile(path.join(pkgDir, 'fonts/remixicon.woff2')), String.fromCodePoint(...codepoints), {
  targetFormat: 'woff2',
});

const css = `/*
* Remix Icon v${version} (subconjunto generado por scripts/build-icons.mjs, no editar)
* https://remixicon.com - https://github.com/Remix-Design/RemixIcon
* Copyright RemixIcon.com - Released under the Apache License Version 2.0
*/
@font-face {
  font-family: "remixicon";
  src: url("remixicon.woff2") format("woff2");
  font-display: swap;
}

[class^="ri-"], [class*=" ri-"] {
  font-family: 'remixicon' !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${rules.join('\n')}
`;
await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, 'remixicon.css'), css);
await writeFile(path.join(outDir, 'remixicon.woff2'), font);
console.log(`[icons] Remix Icon ${version}: ${codepoints.length} iconos, CSS ${css.length} B, fuente ${font.length} B`);
