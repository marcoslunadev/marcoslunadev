/* ==========================================================================
   APP.JS - INTERACTIVIDAD Y DINAMISMO (VANILLA JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

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

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'ri-menu-line';
      });
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
  const filterButtons = document.querySelectorAll('.filter-btn');
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

          if (filterValue === 'all' || cardCategory === filterValue) {
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
    const snippets = {
      'app.js': `<span class="keyword">const</span> <span class="function">buildFuture</span> = () =&gt; {
  <span class="keyword">return</span> {
    <span class="property">technologies</span>: [
      <span class="string">'Angular'</span>,
      <span class="string">'React'</span>,
      <span class="string">'Vue'</span>,
      <span class="string">'Node'</span>,
      <span class="string">'Bun'</span>
    ],
    <span class="property">quality</span>: <span class="string">'exceptional'</span>
  };
};`,
      'server.ts': `<span class="keyword">import</span> { NestFactory } <span class="keyword">from</span> <span class="string">'@nestjs/core'</span>;
<span class="keyword">import</span> { AppModule } <span class="keyword">from</span> <span class="string">'./app.module'</span>;

<span class="keyword">async function</span> <span class="function">bootstrap</span>() {
  <span class="keyword">const</span> <span class="property">app</span> = <span class="keyword">await</span> NestFactory.create(AppModule);
  <span class="keyword">await</span> app.listen(<span class="property">3000</span>);
  console.log(<span class="string">'Server running on port 3000'</span>);
}
bootstrap();`,
      'styles.css': `<span class="keyword">:root</span> {
  <span class="property">--accent-cyan</span>: <span class="string">#06b6d4</span>;
  <span class="property">--accent-emerald</span>: <span class="string">#10b981</span>;
}

<span class="keyword">.text-gradient</span> {
  <span class="property">background</span>: linear-gradient(
    <span class="property">135deg</span>, 
    var(<span class="property">--accent-cyan</span>), 
    var(<span class="property">--accent-emerald</span>)
  );
  <span class="property">-webkit-background-clip</span>: text;
}`
    };

    // Crear pestañas adicionales dinámicamente
    const currentTab = editorHeader.querySelector('.editor-tab');
    if (currentTab) {
      currentTab.remove(); // Limpiar estático
    }

    // Agregar todas las pestañas de forma interactiva
    Object.keys(snippets).forEach((fileName, index) => {
      const tab = document.createElement('div');
      tab.className = `editor-tab ${index === 0 ? 'active' : ''}`;
      tab.style.cursor = 'pointer';
      tab.style.marginRight = '0.5rem';
      tab.textContent = fileName;

      tab.addEventListener('click', () => {
        // Activar pestaña
        editorHeader.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Cambiar contenido de código
        codeBody.innerHTML = snippets[fileName];
      });

      editorHeader.appendChild(tab);
    });

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

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const btnSpinner = submitBtn.querySelector('.btn-spinner');
      const formFeedback = document.getElementById('form-feedback');

      // Deshabilitar botón y mostrar spinner
      submitBtn.disabled = true;
      btnText.textContent = 'Enviando...';
      btnSpinner.classList.remove('hidden');
      formFeedback.className = 'form-feedback hidden';

      // Reemplaza 'service_vlp91on' y 'template_62a7zww' con tus IDs de EmailJS
      const serviceId = '___EMAILJS_SERVICE_ID___';
      const templateAdminId = '___EMAILJS_TEMPLATE_ADMIN_ID___';
      // Si creas una plantilla de auto-respuesta para el cliente en EmailJS, pon su ID aquí:
      const templateAutoId = '___EMAILJS_TEMPLATE_AUTO_ID___';

      emailjs.sendForm(serviceId, templateAdminId, contactForm)
        .then(() => {
          // Si el primer correo se envió correctamente, enviamos el segundo (auto-respuesta) si está configurado
          return emailjs.sendForm(serviceId, templateAutoId, contactForm);
        })
        .then(() => {
          submitBtn.disabled = false;
          btnText.textContent = 'Enviar Mensaje';
          btnSpinner.classList.add('hidden');

          formFeedback.classList.remove('hidden');
          formFeedback.classList.add('success');
          formFeedback.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente por correo. Nos pondremos en contacto contigo pronto.';

          // Limpiar formulario
          contactForm.reset();
          if (charCountNum) charCountNum.textContent = '0';

          // Ocultar mensaje de éxito después de 6 segundos
          setTimeout(() => {
            formFeedback.className = 'form-feedback hidden';
          }, 6000);
        })
        .catch((error) => {
          submitBtn.disabled = false;
          btnText.textContent = 'Enviar Mensaje';
          btnSpinner.classList.add('hidden');

          formFeedback.classList.remove('hidden');
          formFeedback.classList.add('error');
          formFeedback.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o envíanos un correo directo.';
          console.error('EmailJS Error:', error);

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
        newsletterFeedback.textContent = '¡Suscrito con éxito!';

        input.value = '';

        setTimeout(() => {
          newsletterFeedback.className = 'newsletter-feedback hidden';
        }, 4000);
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     8. SCROLL REVEAL (FADE-IN ANIMATION)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.service-card, .tech-card-wrapper, .portfolio-card, .developer-profile-card, .contacto-info-card, .contacto-form-card');

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
});
