# Plan B: rollback de la migración a Astro

Qué hacer si, tras hacer merge de la PR de Astro a `main`, el despliegue falla o la web publicada no funciona.

## Referencias de antes del merge

| Dato | Valor |
|---|---|
| `main` antes del merge | `488d1b6` (Merge pull request #6) |
| Último despliegue correcto | run `44477221041` del 19-11-2026, sobre `488d1b6` |
| Entorno `github-pages` | solo admite despliegues desde `main` |
| Pages | `build_type: workflow`, dominio `marcoslunadev.com` |

Si entra otro commit en `main` antes del merge, apunta el nuevo SHA y el run correspondiente:

```bash
gh run list --workflow deploy.yml --limit 3
```

**Método de merge recomendado:** «Create a merge commit» o «Squash and merge». Evita «Rebase and merge», porque deja 10 commits sueltos y complica el revert.

## 1. Diagnóstico: ¿qué ha fallado?

### A. El workflow falla en rojo (en `npm ci` o en `npm run build`)

La web **no se ha tocado**: el paso de despliegue no llega a ejecutarse y Pages sigue sirviendo la versión anterior. No hay prisa. Tienes dos opciones:

- Corregir en una PR nueva (*fix forward*).
- Hacer el revert del paso 3, para que `main` vuelva a coincidir con lo publicado.

### B. El workflow termina en verde, pero la web está mal

Esto afecta a los visitantes, así que conviene volver atrás ya: paso 2 y después paso 3.

### Comprobaciones tras el despliegue

Haz estas comprobaciones 2–3 minutos después, recargando sin caché (Cmd+Shift+R):

- [ ] Cargan `/`, `/en/`, `/aviso-legal.html`, `/politica-privacidad.html` y las versiones `/en/…`.
- [ ] Responden `/sitemap.xml` y `/robots.txt`.
- [ ] En Settings → Pages sigue configurado el dominio `marcoslunadev.com` y HTTPS está activo.
- [ ] La consola del navegador no muestra errores y no hay 404 en la pestaña Red.
- [ ] El selector ES/EN, los filtros, el carrusel y el menú móvil funcionan.
- [ ] Turnstile aparece al bajar hasta el formulario de contacto (no hace falta enviarlo).

## 2. Rollback rápido (≈2 min, sin tocar git): repetir el último despliegue bueno

```bash
gh run rerun 44477221041
```

También se puede desde la web: Actions → «Deploy static content to Pages» → el run del 19-11 → «Re-run all jobs».

Un re-run reutiliza **el commit y el workflow de aquel run**, es decir, la web antigua con su paso de Python, así que vuelve a publicar exactamente lo que había.

- **Plazo:** GitHub solo permite el re-run hasta 30 días después del run original, en este caso hasta el **19-12-2026**. Pasada esa fecha, ve directamente al paso 3.
- **Limitación:** `main` sigue teniendo el código de Astro, y el siguiente push que toque `frontend/**` lo volvería a publicar. Por eso, después, haz el paso 3.

## 3. Rollback definitivo: revert en `main`

### Opción recomendada: desde GitHub

En la PR mergeada, pulsa **Revert**. GitHub crea una PR de revert; haz merge de ella.

### Desde la terminal

```bash
git switch main && git pull
git revert -m 1 <sha-del-merge>   # si se hizo «Create a merge commit»
git revert <sha-del-squash>       # si se hizo «Squash and merge»
git push origin main
```

### Qué pasa después

El revert restaura `frontend/` y el `deploy.yml` antiguo. Como el push toca `frontend/**`, el workflow se dispara y usa el `deploy.yml` del commit empujado, es decir, la versión antigua. El resultado es que se vuelve a publicar la web estática de antes.

Para comprobarlo, abre el código fuente de la home: debe aparecer `style.css?v=…`.

## 4. Volver a intentarlo más adelante

Después de revertir un merge, **volver a hacer merge de la misma rama no reintroduce los cambios**, porque git los considera ya integrados. Tienes dos maneras de reintentarlo:

```bash
git switch -c retry/astro origin/main
git revert <sha-del-revert>   # recupera la migración
# ...corrige el fallo, haz commit y abre una PR nueva
```

O bien haz *rebase* de la rama de Astro sobre el `main` actual, cambiando los SHAs, antes de abrir otra PR.

## 5. Lo que un rollback no deshace (y por qué no importa)

- **Caché:** GitHub Pages sirve el HTML con `max-age=600`, así que durante unos 10 minutos algún visitante puede ver la versión anterior. Los assets nuevos llevan hash y los antiguos `?v=…`, de modo que nunca se mezclan CSS y JS de versiones distintas.
- **`preferredLanguage` en `localStorage`:** las dos versiones usan la misma clave y los mismos valores (`es`/`en`), así que son compatibles.
- **Search Console:** no reenvíes el sitemap con las URLs `/en/` hasta confirmar que la web nueva es estable. Si ya lo enviaste y vuelves atrás, Google irá descartando esas URLs (darán 404). No hay que hacer nada.
- **Worker de contacto:** no cambia en esta migración, así que no hay nada que revertir.
