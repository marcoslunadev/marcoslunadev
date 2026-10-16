# MarcosLunaDev - Contact API Worker

Backend Serverless alojado en **Cloudflare Workers** para procesar los envíos del formulario de contacto de [marcoslunadev.com](https://marcoslunadev.com) de manera segura y privada.

## 🛡️ Capas de Seguridad
1. **CORS Restrictivo**: Solo acepta peticiones originadas en `https://marcoslunadev.com` (y `localhost` en desarrollo).
2. **Honeypot Trap**: Atrapa y neutraliza bots sin procesar ni consumir cuota de email.
3. **Time-Gate**: Descarta envíos con velocidad sobrehumana (< 2.5s).
4. **Cloudflare Turnstile**: Validación criptográfica del token del visitante contra la API de Cloudflare.
5. **Sanitización de Cabeceras**: Previene inyecciones CRLF (`\r\n`) en asuntos o campos de correo.
6. **Despacho Server-to-Server**: Envío privado a EmailJS mediante API REST con clave privada (`accessToken`).

## 🚀 Comandos

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el worker localmente (Edge runtime local)
npm run dev

# 3. Desplegar cambios a Cloudflare Workers
npm run deploy

# 4. Ver logs y eventos en tiempo real en producción
npm run tail
```

## 🔐 Configuración de Secretos en Cloudflare

Para configurar los secretos en producción en Cloudflare Workers:

```bash
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put EMAILJS_SERVICE_ID
npx wrangler secret put EMAILJS_TEMPLATE_ADMIN_ID
npx wrangler secret put EMAILJS_TEMPLATE_AUTO_ID # Opcional
npx wrangler secret put EMAILJS_PUBLIC_KEY
npx wrangler secret put EMAILJS_PRIVATE_KEY
```
