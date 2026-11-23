# Enviar el sitemap a Google Search Console

Tras la migración a Astro (publicada el 23-11-2026), la web tiene una versión en inglés bajo `/en/`. Google la acabará encontrando por los `hreflang`, pero si se envía el sitemap la descubre antes y la empareja bien con la versión en español.

## Cuándo

**A partir del 26-11-2026**, cuando lleves unos días sin incidencias y ya no se plantee un rollback (ver [ROLLBACK.md](ROLLBACK.md)). Si se envía y luego se revierte, las URLs `/en/` darán 404. No es grave, pero ensucia el informe de indexación durante semanas.

## 1. Comprobación previa (1 minuto)

```bash
cd frontend
npm run check:seo
```

Revisa la web publicada como la leerá Google:

- `robots.txt` declara `https://marcoslunadev.com/sitemap.xml` y no bloquea ninguna URL del sitemap.
- Las 6 URLs responden 200 sin redirecciones.
- Cada página tiene el canonical apuntando a sí misma y el `<html lang>` correcto.
- Los `hreflang` (`es`, `en` y `x-default`) del `<head>` coinciden con los del sitemap y son recíprocos.

Solo continúa si termina con «Todo correcto». Antes de publicar cambios también se puede comprobar en local:

```bash
npm run build && npm run preview -- --port 8080
npm run check:seo -- http://localhost:8080
```

## 2. Enviar el sitemap

1. Entra en [Search Console](https://search.google.com/search-console) y elige la propiedad de `marcoslunadev.com`.
2. Ve a **Indexación → Sitemaps**.
3. En «Añadir un sitemap nuevo», escribe `sitemap.xml` y pulsa **Enviar**.
   - Si ya aparecía enviado antes de la migración, vuelve a enviarlo igualmente: así Google lo lee otra vez ahora.
   - `sitemap.xml` es un índice que apunta a `sitemap-0.xml`. Search Console mostrará los dos, y eso es lo normal.
4. Comprueba que el estado pasa a **Correcto** y que figuran **6 URLs descubiertas**. Puede tardar desde minutos hasta un día.

## 3. Pedir la indexación de las páginas en inglés

En la barra superior, **Inspección de URLs**, haz lo siguiente con cada una:

- `https://marcoslunadev.com/en/`
- `https://marcoslunadev.com/en/aviso-legal.html`
- `https://marcoslunadev.com/en/politica-privacidad.html`

Para cada URL:

1. Pulsa **Probar URL publicada**. Debe indicar «La URL está disponible para Google».
2. Pulsa **Solicitar indexación**.

Google limita las solicitudes diarias. Con estas tres basta; las páginas en español ya estaban indexadas.

## 4. Seguimiento (1–2 semanas después)

- [ ] **Indexación → Páginas:** las URLs `/en/` aparecen como indexadas. Si salen como «Rastreada: actualmente sin indexar», espera; con webs pequeñas es habitual que tarde.
- [ ] **Inspección de URLs** sobre `/en/`: «Canónica seleccionada por Google» es `https://marcoslunadev.com/en/`. Si Google eligiera la página en español como canónica, los `hreflang` no se están respetando; vuelve a ejecutar `npm run check:seo`.
- [ ] **Sitemaps:** no aparecen errores nuevos.
- [ ] En Google, `site:marcoslunadev.com/en/` devuelve las páginas en inglés.

## Notas

- Este paso no se puede automatizar desde el repositorio: el envío requiere la cuenta de Google propietaria de la propiedad.
- La meta `google-site-verification` de la home ya existía y se mantiene en la versión Astro, así que la propiedad sigue verificada.
- Las futuras publicaciones no necesitan volver a enviar el sitemap. Google lo relee solo. Solo conviene reenviarlo si se añaden páginas nuevas.
