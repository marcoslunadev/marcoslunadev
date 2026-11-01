/* ==========================================================================
   APP.JS - INTERACTIVIDAD Y DINAMISMO (VANILLA JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Dynamic language state
  let currentLang = localStorage.getItem('preferredLanguage') || 'es';

  /* --------------------------------------------------------------------------
     1. MENU RESPONSIVE (MOBILE TOGGLE)
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');

      // Cambiar icono de menú
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.className = 'ri-close-line';
        } else {
          icon.className = 'ri-menu-line';
        }
      }
    });

    // Cerrar menú al pulsar cualquier item (enlaces, Contacto, idioma...)
    navMenu.addEventListener('click', (e) => {
      if (!e.target.closest('a, button')) return;
      navMenu.classList.remove('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) icon.className = 'ri-menu-line';
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'ri-menu-line';
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. STICKY HEADER (SCROLL EFFECT)
     -------------------------------------------------------------------------- */
  const header = document.querySelector('.header');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Ejecutar al inicio por si hay scroll previo

  /* --------------------------------------------------------------------------
     3. PORTFOLIO FILTERING
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('#portfolio-filters .filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (filterButtons.length > 0 && portfolioCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover clase activa de todos los botones y agregar al actual
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all' || (cardCategory && cardCategory.split(/[\s,]+/).includes(filterValue))) {
            // Mostrar tarjeta con animación suave
            card.classList.remove('hidden');
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            // Ocultar tarjeta
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.classList.add('hidden');
            }, 300); // Esperar que termine la transición CSS
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     3b. AI STACK FILTERING
     -------------------------------------------------------------------------- */
  const aiFilterButtons = document.querySelectorAll('#ai-filters .filter-btn');
  const aiCards = document.querySelectorAll('.ai-card');
  const aiGrid = document.querySelector('.ai-grid');

  if (aiFilterButtons.length > 0 && aiCards.length > 0) {
    aiFilterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover clase activa de todos los botones y agregar al actual
        aiFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // En modo carrusel 3D (animations.js) el filtro gira el anillo en lugar de ocultar
        if (aiGrid && aiGrid.classList.contains('is-carousel')) {
          document.dispatchEvent(new CustomEvent('ai-filter', { detail: filterValue }));
          return;
        }

        aiCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all' || (cardCategory && cardCategory.split(/[\s,]+/).includes(filterValue))) {
            // Mostrar tarjeta con animación suave
            card.classList.remove('hidden');
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            // Ocultar tarjeta
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.classList.add('hidden');
            }, 300); // Esperar que termine la transición CSS
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. ACTIVE LINK HIGHLIGHT (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Detectar sección en el centro de la pantalla
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  /* --------------------------------------------------------------------------
     5. INTERACTIVE CODE EDITOR (TABS & SNIPPETS)
     -------------------------------------------------------------------------- */
  const codeMockup = document.querySelector('.code-editor-mockup');

  if (codeMockup) {
    const editorHeader = codeMockup.querySelector('.editor-header');
    const codeBody = codeMockup.querySelector('.editor-body code');

    // Definición de snippets
    // Definición de snippets: el flujo SDD (spec → implementación → test)
    const snippets = {
      'spec.md': `<span class="keyword">## Feature:</span> <span class="function">Checkout</span>

<span class="keyword">GIVEN</span> un carrito con stock disponible
<span class="keyword">WHEN</span>  el cliente confirma el pago
<span class="keyword">THEN</span>  se crea el pedido <span class="string">→ 201</span>
 <span class="keyword">AND</span>  se emite <span class="property">OrderCreated</span>
 <span class="keyword">AND</span>  el stock se reserva`,
      'orders.ts': `<span class="function">@Controller</span>(<span class="string">'orders'</span>)
<span class="keyword">export class</span> OrdersController {
  <span class="keyword">constructor</span>(
    <span class="keyword">private</span> <span class="property">orders</span>: OrdersService,
    <span class="keyword">private</span> <span class="property">events</span>: EventBus
  ) {}

  <span class="function">@Post</span>() <span class="function">@HttpCode</span>(<span class="property">201</span>)
  <span class="keyword">async</span> <span class="function">create</span>(<span class="function">@Body</span>() dto: CreateOrderDto) {
    <span class="keyword">const</span> <span class="property">order</span> = <span class="keyword">await</span> <span class="keyword">this</span>.orders.create(dto);
    <span class="keyword">this</span>.events.emit(<span class="string">'OrderCreated'</span>, order);
    <span class="keyword">return</span> order;
  }
}`,
      'e2e.ts': `<span class="function">describe</span>(<span class="string">'Checkout'</span>, () =&gt; {
  <span class="function">it</span>(<span class="string">'crea el pedido y emite OrderCreated'</span>, <span class="keyword">async</span> () =&gt; {
    <span class="keyword">const</span> <span class="property">res</span> = <span class="keyword">await</span> api.post(<span class="string">'/orders'</span>).send(cart);

    <span class="function">expect</span>(res.status).toBe(<span class="property">201</span>);
    <span class="function">expect</span>(events).toContainEvent(<span class="string">'OrderCreated'</span>);
  });
});`
    };

    // Crear pestañas adicionales dinámicamente
    const currentTab = editorHeader.querySelector('.editor-tab');
    if (currentTab) {
      currentTab.remove(); // Limpiar estático
    }

    const fileNames = Object.keys(snippets);
    const tabs = [];
    let activeIndex = 0;

    const showTab = (index) => {
      activeIndex = index;

      // Activar pestaña
      tabs.forEach((t, i) => t.classList.toggle('active', i === index));

      // Cambiar contenido de código
      codeBody.innerHTML = snippets[fileNames[index]];
      if (window.gsap && !prefersReducedMotion) {
        gsap.fromTo(codeBody, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      }
    };

    // Rotación automática cada 5s (spec → implementación → test).
    // Se pausa con el ratón encima, fuera de pantalla o con la pestaña oculta.
    const ROTATE_MS = 5000;
    let rotateTimer = null;
    let isHovered = false;
    let isOnScreen = true;

    const stopRotation = () => {
      clearInterval(rotateTimer);
      rotateTimer = null;
    };

    const startRotation = () => {
      stopRotation();
      if (isHovered || !isOnScreen || document.hidden) return;
      rotateTimer = setInterval(() => showTab((activeIndex + 1) % fileNames.length), ROTATE_MS);
    };

    // Agregar todas las pestañas de forma interactiva
    fileNames.forEach((fileName, index) => {
      const tab = document.createElement('div');
      tab.className = `editor-tab ${index === 0 ? 'active' : ''}`;
      tab.style.cursor = 'pointer';
      tab.style.marginRight = '0.5rem';
      tab.textContent = fileName;

      tab.addEventListener('click', () => {
        showTab(index);
        startRotation(); // Reiniciar el contador tras un click manual
      });

      tabs.push(tab);
      editorHeader.appendChild(tab);
    });

    codeMockup.addEventListener('mouseenter', () => { isHovered = true; stopRotation(); });
    codeMockup.addEventListener('mouseleave', () => { isHovered = false; startRotation(); });
    document.addEventListener('visibilitychange', startRotation);

    new IntersectionObserver(([entry]) => {
      isOnScreen = entry.isIntersecting;
      startRotation();
    }).observe(codeMockup);

    startRotation();

    // Agregar estilos CSS para la pestaña activa del editor
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      .editor-header .editor-tab {
        opacity: 0.6;
        transition: opacity 0.2s ease;
      }
      .editor-header .editor-tab.active {
        opacity: 1;
        background: var(--bg-primary);
        border-bottom-color: transparent;
      }
      .editor-header .editor-tab:hover {
        opacity: 0.9;
      }
    `;
    document.head.appendChild(styleSheet);
  }

  /* --------------------------------------------------------------------------
     6. CONTACT FORM VALIDATION & SIMULATION
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const messageInput = document.getElementById('message');
  const charCountNum = document.getElementById('char-count-num');

  // Contador de caracteres en textarea
  if (messageInput && charCountNum) {
    messageInput.addEventListener('input', () => {
      charCountNum.textContent = messageInput.value.length;
    });
  }

  // Tiempo de inicialización para Time-gate anti-bot
  const formInitTime = Date.now();

  // Función auxiliar para resetear Turnstile si está activo
  function resetTurnstile() {
    if (window.turnstile && typeof window.turnstile.reset === 'function') {
      try {
        window.turnstile.reset();
      } catch (err) {
        console.warn('Error al resetear Turnstile:', err);
      }
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      const formFeedback = document.getElementById('form-feedback');

      // 1. TRAMPA HONEYPOT: Si el campo oculto contiene algún valor, es un bot
      const honeypot = contactForm.querySelector('#contact-website-field');
      if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Bot detectado y neutralizado mediante trampa honeypot.');
        contactForm.reset();
        if (charCountNum) charCountNum.textContent = '0';
        resetTurnstile();
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = translations[currentLang].contacto.feedbackSuccess;
        setTimeout(() => {
          formFeedback.className = 'form-feedback hidden';
        }, 6000);
        return;
      }

      // 2. TIME-GATE: Detecta envíos sobrehumanos (< 2.5 segundos)
      const elapsedSeconds = (Date.now() - formInitTime) / 1000;
      if (elapsedSeconds < 2.5) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = translations[currentLang].contacto.feedbackError;
        return;
      }

      // 3. RATE LIMIT LOCAL: 1 envío cada 90 segundos por navegador
      const RATE_LIMIT_KEY = 'mld_contact_last_submit';
      const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
      if (lastSubmit) {
        const timeDiff = Date.now() - parseInt(lastSubmit, 10);
        if (timeDiff < 90000) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = translations[currentLang].contacto.feedbackRateLimit;
          return;
        }
      }

      // 4. CLOUDFLARE TURNSTILE: Validar que se ha completado la verificación
      const turnstileToken = contactForm.querySelector('[name="cf-turnstile-response"]')?.value
        || (window.turnstile && typeof window.turnstile.getResponse === 'function' ? window.turnstile.getResponse() : null);

      if (!turnstileToken) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = translations[currentLang].contacto.feedbackTurnstileRequired;
        return;
      }

      // Deshabilitar botón y mostrar spinner
      submitBtn.disabled = true;
      btnText.textContent = translations[currentLang].contacto.formSubmitting;
      btnSpinner.classList.remove('hidden');
      formFeedback.className = 'form-feedback hidden';

      const WORKER_ENDPOINT = 'https://marcoslunadev-contact-api.mdlunadev.workers.dev/';

      const payload = {
        name: (contactForm.name?.value || '').trim(),
        email: (contactForm.email?.value || '').trim(),
        phone: (contactForm.phone?.value || '').trim(),
        company: (contactForm.company?.value || '').trim(),
        service: contactForm.service?.value || '',
        message: (contactForm.message?.value || '').trim(),
        honeypot: honeypot ? honeypot.value.trim() : '',
        turnstileToken: turnstileToken,
        elapsedSeconds: elapsedSeconds
      };

      fetch(WORKER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(async (response) => {
          const result = await response.json().catch(() => ({}));
          if (!response.ok || !result.success) {
            throw new Error(result.error || `HTTP ${response.status}`);
          }

          submitBtn.disabled = false;
          btnText.textContent = translations[currentLang].contacto.formSubmit;
          btnSpinner.classList.add('hidden');

          formFeedback.classList.remove('hidden');
          formFeedback.classList.add('success');
          formFeedback.textContent = translations[currentLang].contacto.feedbackSuccess;

          // Registrar timestamp para el control de frecuencia
          localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());

          // Limpiar formulario y resetear Turnstile (tokens son de un solo uso)
          contactForm.reset();
          if (charCountNum) charCountNum.textContent = '0';
          resetTurnstile();

          // Ocultar mensaje de éxito después de 6 segundos
          setTimeout(() => {
            formFeedback.className = 'form-feedback hidden';
          }, 6000);
        })
        .catch((error) => {
          submitBtn.disabled = false;
          btnText.textContent = translations[currentLang].contacto.formSubmit;
          btnSpinner.classList.add('hidden');

          formFeedback.classList.remove('hidden');
          formFeedback.classList.add('error');
          formFeedback.textContent = translations[currentLang].contacto.feedbackError;
          console.error('Contact Form Worker Error:', error);

          // Resetear widget para permitir un nuevo intento
          resetTurnstile();

          setTimeout(() => {
            formFeedback.className = 'form-feedback hidden';
          }, 6000);
        });
    });
  }

  /* --------------------------------------------------------------------------
     7. NEWSLETTER FORM
     -------------------------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const button = newsletterForm.querySelector('button');

      button.disabled = true;
      button.style.opacity = '0.7';

      setTimeout(() => {
        button.disabled = false;
        button.style.opacity = '1';

        newsletterFeedback.className = 'newsletter-feedback success';
        newsletterFeedback.textContent = currentLang === 'es' ? '¡Suscrito con éxito!' : 'Subscribed successfully!';

        input.value = '';

        setTimeout(() => {
          newsletterFeedback.className = 'newsletter-feedback hidden';
        }, 4000);
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     8. SCROLL REVEAL (FADE-IN ANIMATION)
     Fallback sin GSAP: si GSAP + ScrollTrigger están cargados, animations.js
     se encarga del reveal; con movimiento reducido no se oculta nada.
     -------------------------------------------------------------------------- */
  const gsapReady = !!(window.gsap && window.ScrollTrigger);
  const revealElements = (gsapReady || prefersReducedMotion) ? [] : document.querySelectorAll('.service-card, .tech-card-wrapper, .portfolio-card, .metodologia-card, .ai-card, .developer-profile-card, .contacto-info-card, .contacto-form-card');

  // Agregar clase inicial para la transición CSS
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target); // Dejar de observar una vez animado
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Activar ligeramente antes de entrar completamente
    threshold: 0.05
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --------------------------------------------------------------------------
     9. MULTI-LANGUAGE SYSTEM (i18n)
     -------------------------------------------------------------------------- */
  // Function to translate the page DOM
  const translatePage = (lang) => {
    // 1. Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // 2. Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const text = getNestedValue(translations[lang], key);
      if (text !== undefined) {
        element.innerHTML = text;
      }
    });

    // 3. Translate elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const text = getNestedValue(translations[lang], key);
      if (text !== undefined) {
        element.setAttribute('placeholder', text);
      }
    });

    // 4. Update page SEO meta tags and Title
    if (translations[lang].meta) {
      document.title = translations[lang].meta.title;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', translations[lang].meta.description);

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', translations[lang].meta.keywords);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', translations[lang].meta.ogTitle);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', translations[lang].meta.ogDesc);

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', translations[lang].meta.ogTitle);

      const twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', translations[lang].meta.ogDesc);
    }
  };

  // Helper to retrieve nested object values from string key path (e.g. "hero.title")
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  // Function to change current language
  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    translatePage(lang);

    // Update switcher buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  // Hook up language switch event listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Initialize page in selected language
  translatePage(currentLang);
  // Sync the active class in lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  /* --------------------------------------------------------------------------
     10. LOGO LIGHTBOX MODAL (VENTANA FLOTANTE AMPLIDA)
     -------------------------------------------------------------------------- */
  const createLogoModal = () => {
    let modal = document.getElementById('logo-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'logo-modal';
      modal.className = 'logo-modal-overlay';
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="logo-modal-content">
          <button class="logo-modal-close" aria-label="Cerrar">&times;</button>
          <img id="logo-modal-img" src="" alt="MarcosLunaDev Logo Ampliado" />
        </div>
      `;
      document.body.appendChild(modal);

      const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      };

      // Close on backdrop click (clicking outside image) or close button click
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('logo-modal-close')) {
          closeModal();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeModal();
        }
      });
    }
    return modal;
  };

  // Attach click listener to footer logo image
  const logoElements = document.querySelectorAll('.footer-logo-img');
  logoElements.forEach(logoEl => {
    logoEl.style.cursor = 'pointer';
    logoEl.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const modal = createLogoModal();
      const modalImg = modal.querySelector('#logo-modal-img');

      let imgSrc = 'assets/logo-horizontal-oscuro.png';
      if (logoEl.tagName === 'IMG') {
        imgSrc = logoEl.getAttribute('src');
      } else {
        const img = logoEl.querySelector('img');
        if (img) imgSrc = img.getAttribute('src');
      }

      modalImg.src = imgSrc;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
});

