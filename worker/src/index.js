/**
 * Cloudflare Worker: API de Contacto y Seguridad para MarcosLunaDev
 *
 * Características:
 * - CORS restrictivo (solo marcoslunadev.com y localhost)
 * - Trampa Honeypot contra bots automáticos
 * - Time-gate para mitigar ataques de velocidad sobrehumana (< 2.5s)
 * - Verificación criptográfica con Cloudflare Turnstile
 * - Sanitización estricta contra CRLF Injection en cabeceras de correo
 * - Despacho seguro de correos (Admin y Auto-respuesta) vía EmailJS REST API
 */

export default {
  async fetch(request, env) {
    // 1. Manejo de Preflight CORS (OPTIONS)
    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = [
      'https://marcoslunadev.com',
      'https://www.marcoslunadev.com',
      'http://localhost:8080',
      'http://127.0.0.1:8080'
    ];

    const isAllowedOrigin = allowedOrigins.includes(origin);
    const corsHeaders = {
      'Access-Control-Allow-Origin': isAllowedOrigin ? origin : allowedOrigins[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Método no permitido' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    try {
      const data = await request.json();
      const { name, email, phone, company, service, message, honeypot, turnstileToken, elapsedSeconds } = data;

      // 2. Trampa Honeypot: si viene relleno, es un bot
      if (honeypot && honeypot.trim() !== '') {
        console.warn('Bot detectado por trampa honeypot.');
        return new Response(JSON.stringify({ success: true, message: 'Message sent' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 3. Time-gate: envíos en menos de 2.5 segundos se descartan
      if (typeof elapsedSeconds === 'number' && elapsedSeconds < 2.5) {
        return new Response(JSON.stringify({ error: 'Envío descartado por velocidad sospechosa.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 4. Validación de campos obligatorios
      if (!name || !email || !message || !turnstileToken) {
        return new Response(JSON.stringify({ error: 'Faltan campos requeridos.' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 5. Verificar Token con Cloudflare Turnstile
      const clientIp = request.headers.get('CF-Connecting-IP') || '';
      const turnstileFormData = new FormData();
      turnstileFormData.append('secret', env.TURNSTILE_SECRET_KEY);
      turnstileFormData.append('response', turnstileToken);
      if (clientIp) turnstileFormData.append('remoteip', clientIp);

      const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: turnstileFormData
      });
      const turnstileOutcome = await turnstileRes.json();

      if (!turnstileOutcome.success) {
        return new Response(JSON.stringify({ error: 'Fallo en la verificación de seguridad (Turnstile).' }), {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 6. Sanitizar campos (evitar CRLF injection en cabeceras)
      const cleanName = String(name).replace(/[\r\n]+/g, ' ').trim();
      const cleanEmail = String(email).replace(/[\r\n]+/g, ' ').trim();
      const cleanCompany = company ? String(company).replace(/[\r\n]+/g, ' ').trim() : 'N/A';
      const cleanPhone = phone ? String(phone).replace(/[\r\n]+/g, ' ').trim() : 'N/A';
      const cleanService = service ? String(service).replace(/[\r\n]+/g, ' ').trim() : 'General';
      const cleanMessage = String(message).slice(0, 1000).trim();

      // 7. Enviar correo de Notificación al Administrador (A ti)
      const emailHeaders = {
        'Content-Type': 'application/json',
        'Origin': 'https://marcoslunadev.com' // Previene bloqueo de origen en EmailJS
      };

      const adminPayload = {
        service_id: env.EMAILJS_SERVICE_ID,
        template_id: env.EMAILJS_TEMPLATE_ADMIN_ID,
        user_id: env.EMAILJS_PUBLIC_KEY,
        accessToken: env.EMAILJS_PRIVATE_KEY,
        template_params: {
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          company: cleanCompany,
          service: cleanService,
          message: cleanMessage
        }
      };

      const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: emailHeaders,
        body: JSON.stringify(adminPayload)
      });

      if (!emailRes.ok) {
        const errorText = await emailRes.text();
        console.error('EmailJS Admin Error:', errorText);
        return new Response(JSON.stringify({ error: 'Error enviando notificación al administrador.' }), {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // 8. (Opcional) Enviar correo de Auto-respuesta al Cliente si está configurado
      if (env.EMAILJS_TEMPLATE_AUTO_ID) {
        try {
          const autoPayload = {
            service_id: env.EMAILJS_SERVICE_ID,
            template_id: env.EMAILJS_TEMPLATE_AUTO_ID,
            user_id: env.EMAILJS_PUBLIC_KEY,
            accessToken: env.EMAILJS_PRIVATE_KEY,
            template_params: {
              name: cleanName,
              email: cleanEmail,
              service: cleanService
            }
          };

          await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: emailHeaders,
            body: JSON.stringify(autoPayload)
          });
        } catch (autoErr) {
          console.warn('Auto-reply failed:', autoErr);
        }
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: 'Error interno del servidor.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};
