/* ==========================================================================
   ANIMATIONS.JS - MOVIMIENTO CON GSAP + SCROLLTRIGGER
   Se carga con defer después de GSAP. Reglas de rendimiento:
   - Solo se animan transform y opacity (sin reflow/layout).
   - El título y el subtítulo del hero nunca se ocultan (LCP intacto).
   - prefers-reduced-motion: no se anima nada.
   - Las animaciones infinitas se pausan fuera de pantalla.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // Sin GSAP (CDN caído o bloqueado): app.js aplica su reveal de respaldo
  if (!window.gsap || !window.ScrollTrigger) {
    root.classList.remove('anim-pending');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // `scroll-behavior: smooth` (style.css) rompe las mediciones de ScrollTrigger:
  // al recalcular salta el scroll y con smooth el salto no es inmediato, así que
  // todos los triggers quedan desplazados (p. ej. el carrusel se cree fuera de
  // pantalla y se congela). Con GSAP activo se desactiva en CSS y el scroll
  // suave de los enlaces internos se hace por JS.
  root.style.scrollBehavior = 'auto';
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    const target = link && link.getAttribute('href').length > 1 && document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', link.getAttribute('href'));
  });

  // Si la salvaguarda de 3s ya mostró el hero, no lo volvemos a ocultar
  const heroPending = root.classList.contains('anim-pending');
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {

    /* ------------------------------------------------------------------------
       1. HERO INTRO
       ------------------------------------------------------------------------ */
    if (heroPending) {
      gsap.set('.hero [data-anim]', { autoAlpha: 0, y: 24 });

      gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
        .to('.hero .tag-pill', { autoAlpha: 1, y: 0 })
        .to('.hero-stack', { autoAlpha: 1, y: 0 }, '-=0.55')
        .to('.hero-actions', { autoAlpha: 1, y: 0 }, '-=0.55')
        .to('.hero-stats', { autoAlpha: 1, y: 0, onStart: countStats }, '-=0.55')
        .to('.hero-visual', { autoAlpha: 1, y: 0, duration: 1.1 }, 0.15);
    } else {
      countStats();
    }

    // Contadores 0 → valor final conservando el sufijo ("20+", "98%")
    function countStats() {
      document.querySelectorAll('.hero .stat-num').forEach(el => {
        const match = el.textContent.trim().match(/^(\d+)(.*)$/);
        if (!match) return;
        const target = parseInt(match[1], 10);
        const suffix = match[2];
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(counter.value) + suffix; }
        });
      });
    }

    // Flotación suave del editor, en pausa cuando el hero sale de pantalla
    gsap.to('.code-editor-mockup', {
      y: -10,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        toggleActions: 'play pause resume pause'
      }
    });

    // Parallax ligero del glow del hero
    gsap.to('.hero .glow-effect', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    /* ------------------------------------------------------------------------
       2. CABECERAS DE SECCIÓN (tag → título → subtítulo)
       ------------------------------------------------------------------------ */
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header.children, {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: header, start: 'top 85%', once: true }
      });
    });

    /* ------------------------------------------------------------------------
       3. REVEAL DE TARJETAS POR LOTES
       Se desactiva la transition CSS durante el tween para que no compita
       con GSAP y se restaura al terminar (los :hover siguen funcionando).
       ------------------------------------------------------------------------ */
    // Las .ai-card no entran aquí: las anima el carrusel 3D (sección 5)
    const revealSelector = [
      '.service-card', '.tech-card-wrapper', '.sec-badge', '.portfolio-card',
      '.metodologia-card', '.metodologia-principles li', '.developer-profile-card',
      '.contacto-info-card', '.contacto-form-card'
    ].join(', ');

    gsap.set(revealSelector, { opacity: 0, y: 30, transition: 'none' });

    ScrollTrigger.batch(revealSelector, {
      start: 'top 90%',
      once: true,
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        overwrite: true,
        clearProps: 'transform,transition'
      })
    });

    // Los filtros cambian el alto de la página: recalcular posiciones
    document.addEventListener('click', e => {
      if (e.target.closest('.filter-btn')) {
        setTimeout(() => ScrollTrigger.refresh(), 350);
      }
    });

    /* ------------------------------------------------------------------------
       4. METODOLOGÍA SDD: flujo de energía entre las cards
       ------------------------------------------------------------------------ */
    initSddFlow();

    /* ------------------------------------------------------------------------
       5. CARRUSEL 3D DEL STACK IA
       ------------------------------------------------------------------------ */
    initAiCarousel();
  });

  /* --------------------------------------------------------------------------
     FLUJO DE ENERGÍA SDD
     Un haz de luz recorre las cards de izquierda a derecha (de arriba abajo
     por debajo de 992px) en un loop de 10s. Al pasar, cada card se "carga" y
     en los huecos saltan chispas eléctricas. La geometría se mide con
     offsetLeft/offsetTop (ignora los transforms del reveal y del hover) y se
     recalcula cuando cambia el tamaño del grid.
     -------------------------------------------------------------------------- */
  function initSddFlow() {
    const grid = document.querySelector('.metodologia-grid');
    if (!grid) return;

    const cards = gsap.utils.toArray('.metodologia-card', grid);
    if (cards.length < 2) return;

    const LOOP = 10;         // segundos por ciclo completo
    const TRAVEL = 7.6;      // segundos que tarda el haz en cruzar; el resto es pausa
    const CHARGE_HOLD = 1.6; // segundos que una card permanece iluminada
    const desktopQuery = window.matchMedia('(min-width: 992px)');

    const flow = document.createElement('div');
    flow.className = 'sdd-flow';
    flow.setAttribute('aria-hidden', 'true');
    flow.innerHTML = '<div class="sdd-track"></div><div class="sdd-beam"><div class="sdd-beam-core"></div></div>';
    grid.prepend(flow);

    const track = flow.querySelector('.sdd-track');
    const beam = flow.querySelector('.sdd-beam');
    const beamCore = flow.querySelector('.sdd-beam-core');

    let timeline = null;
    let isOnScreen = false;

    // Zigzag aleatorio para que cada chispa sea distinta
    const zigzag = (length, amplitude, vertical) => {
      const segments = 7;
      const points = [];
      for (let i = 0; i <= segments; i++) {
        const along = (length / segments) * i;
        const across = i === 0 || i === segments ? 0 : gsap.utils.random(-amplitude, amplitude);
        points.push(vertical ? `${across},${along}` : `${along},${across}`);
      }
      return points.join(' ');
    };

    const build = () => {
      if (timeline) timeline.kill();
      flow.querySelectorAll('.sdd-spark').forEach(el => el.remove());
      cards.forEach(card => card.classList.remove('is-charged'));

      const horizontal = desktopQuery.matches;
      grid.classList.toggle('is-flow-vertical', !horizontal);
      flow.classList.toggle('is-vertical', !horizontal);

      const first = cards[0];
      const last = cards[cards.length - 1];
      const beamLength = horizontal ? 180 : 140;
      let trackStart, trackLength;
      const stops = [];  // posición (en la pista) del centro de cada card
      const gaps = [];   // { at, size } de cada hueco entre cards

      if (horizontal) {
        // Pista horizontal sobre el borde superior de las cards
        const y = first.offsetTop;
        trackStart = first.offsetLeft;
        trackLength = last.offsetLeft + last.offsetWidth - trackStart;
        gsap.set(track, { left: trackStart, top: y - 1, width: trackLength, height: 2 });
        gsap.set(beam, { width: beamLength, height: 3, top: y - 1.5, left: trackStart });
        cards.forEach((card, i) => {
          stops.push(card.offsetLeft + card.offsetWidth / 2 - trackStart);
          if (i < cards.length - 1) {
            const end = card.offsetLeft + card.offsetWidth;
            gaps.push({ at: (end + cards[i + 1].offsetLeft) / 2 - trackStart, size: cards[i + 1].offsetLeft - end, y });
          }
        });
      } else {
        // Pista vertical en el margen izquierdo, de la primera a la última card
        const x = 12;
        trackStart = first.offsetTop + 16;
        trackLength = last.offsetTop + last.offsetHeight - 16 - trackStart;
        gsap.set(track, { left: x - 1, top: trackStart, width: 2, height: trackLength });
        gsap.set(beam, { width: 3, height: beamLength, left: x - 1.5, top: trackStart });
        cards.forEach(card => stops.push(card.offsetTop + card.offsetHeight / 2 - trackStart));
      }

      // Chispas en los huecos (solo en horizontal: en vertical la pista va por fuera)
      const sparks = gaps.map(gap => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        const width = gap.size + 24;
        svg.setAttribute('class', 'sdd-spark');
        svg.setAttribute('width', width);
        svg.setAttribute('height', 1);
        svg.style.left = `${gap.at + trackStart - width / 2}px`;
        svg.style.top = `${gap.y}px`;
        svg.appendChild(line);
        flow.appendChild(svg);
        return { svg, line, width, at: gap.at };
      });

      // Momento en que la cabeza del haz alcanza una posición de la pista
      const timeAt = position => TRAVEL * (position + beamLength) / (trackLength + beamLength);
      const axis = horizontal ? 'x' : 'y';

      timeline = gsap.timeline({ repeat: -1, paused: !isOnScreen });
      timeline
        .fromTo(beam, { [axis]: -beamLength }, { [axis]: trackLength, duration: TRAVEL, ease: 'none' }, 0)
        .fromTo(beam, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, 0)
        .to(beam, { autoAlpha: 0, duration: 0.3 }, TRAVEL - 0.3)
        // Parpadeo eléctrico del haz durante el recorrido
        .fromTo(beamCore, { opacity: 1 }, { opacity: 0.6, duration: 0.06, repeat: Math.floor(TRAVEL / 0.06) - 1, yoyo: true, ease: 'none' }, 0)
        .set({}, {}, LOOP); // relleno: el ciclo dura exactamente LOOP segundos

      cards.forEach((card, i) => {
        const t = timeAt(stops[i]);
        timeline
          .call(() => card.classList.add('is-charged'), null, t)
          .call(() => card.classList.remove('is-charged'), null, Math.min(t + CHARGE_HOLD, LOOP - 0.05));
      });

      sparks.forEach(spark => {
        const t = timeAt(spark.at);
        timeline
          .call(() => spark.line.setAttribute('points', zigzag(spark.width, 7, false)), null, t - 0.02)
          .fromTo(spark.svg, { opacity: 0 }, { opacity: 1, duration: 0.04, ease: 'none' }, t)
          .to(spark.svg, { opacity: 0.25, duration: 0.05, ease: 'none' }, t + 0.06)
          .call(() => spark.line.setAttribute('points', zigzag(spark.width, 7, false)), null, t + 0.11)
          .to(spark.svg, { opacity: 1, duration: 0.04, ease: 'none' }, t + 0.12)
          .to(spark.svg, { opacity: 0, duration: 0.3, ease: 'power2.out' }, t + 0.18);
      });
    };

    build();

    // Solo corre mientras la sección está en pantalla
    ScrollTrigger.create({
      trigger: grid,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: self => {
        isOnScreen = self.isActive;
        if (timeline) isOnScreen ? timeline.play() : timeline.pause();
      }
    });

    // Recalcular si cambia el layout (resize, breakpoint, cambio de idioma...)
    let lastSize = `${grid.offsetWidth}x${grid.offsetHeight}`;
    let rebuildCall = null;
    new ResizeObserver(() => {
      const size = `${grid.offsetWidth}x${grid.offsetHeight}`;
      if (size === lastSize) return;
      lastSize = size;
      if (rebuildCall) rebuildCall.kill();
      rebuildCall = gsap.delayedCall(0.15, build);
    }).observe(grid);
  }

  function initAiCarousel() {
    const ring = document.querySelector('.ai-grid');
    if (!ring) return;

    const cards = gsap.utils.toArray('.ai-card', ring);
    const total = cards.length;
    const step = 360 / total;
    const AUTO_SPEED = -9; // grados por segundo
    const lang = document.documentElement.lang === 'en' ? 'en' : 'es';
    const t = (key, fallback) => (typeof translations !== 'undefined' && translations[lang].tecnologias[key]) || fallback;

    // Estructura: viewport con perspectiva > anillo (.ai-grid) > tarjetas
    const viewport = document.createElement('div');
    viewport.className = 'ai-carousel';
    viewport.tabIndex = 0;
    viewport.setAttribute('role', 'region');
    viewport.setAttribute('aria-roledescription', 'carousel');
    viewport.setAttribute('aria-label', 'Stack IA');
    ring.parentNode.insertBefore(viewport, ring);
    viewport.appendChild(ring);

    const floor = document.createElement('div');
    floor.className = 'ai-carousel-floor';
    viewport.appendChild(floor);

    const controls = document.createElement('div');
    controls.className = 'ai-carousel-controls';
    controls.innerHTML = `
      <button type="button" class="ai-carousel-btn" data-dir="-1" aria-label="${t('aiPrev', 'Anterior')}"><i class="ri-arrow-left-s-line"></i></button>
      <span class="ai-carousel-hint" data-i18n="tecnologias.aiDragHint">${t('aiDragHint', 'Arrastra para explorar')}</span>
      <button type="button" class="ai-carousel-btn" data-dir="1" aria-label="${t('aiNext', 'Siguiente')}"><i class="ri-arrow-right-s-line"></i></button>`;
    viewport.after(controls);

    ring.classList.add('is-carousel');
    cards.forEach(card => card.classList.remove('hidden'));

    // Estado del anillo
    const state = { radius: 0, tilt: 9 };
    let angle = 0;
    let speed = AUTO_SPEED;
    let targetSpeed = AUTO_SPEED;
    let isSnapping = false;
    let isHovered = false;
    let frontIndex = -1;
    let activeFilter = 'all';
    let holdCall = null;

    const computeRadius = () => Math.round((ring.offsetWidth + 24) / (2 * Math.tan(Math.PI / total)));
    const normalize = deg => ((deg % 360) + 540) % 360 - 180;
    const matchesFilter = card => activeFilter === 'all' ||
      (card.dataset.category || '').split(/[\s,]+/).includes(activeFilter);

    // Posición de cada tarjeta en el cilindro (solo cambia con el radio)
    const layout = () => {
      cards.forEach((card, i) => {
        card.style.transform = `rotateY(${i * step}deg) translateZ(${state.radius}px)`;
      });
    };

    // Por frame: girar el anillo, dar profundidad y marcar la tarjeta frontal
    const render = () => {
      // rotateX antes de translateZ: la inclinación pivota sobre la tarjeta frontal,
      // no sobre el centro del cilindro (que la desplazaría ~R·sen(tilt) en vertical)
      ring.style.transform = `rotateX(${state.tilt}deg) translateZ(${-state.radius}px) rotateY(${angle}deg)`;
      let best = 0;
      let bestCos = -2;
      cards.forEach((card, i) => {
        const cos = Math.cos(normalize(i * step + angle) * Math.PI / 180);
        if (cos > bestCos) { bestCos = cos; best = i; }
        card.style.opacity = (0.15 + Math.max(0, cos) * 0.85) * (matchesFilter(card) ? 1 : 0.18);
      });
      if (best !== frontIndex) {
        if (frontIndex >= 0) cards[frontIndex].classList.remove('is-front');
        cards[best].classList.add('is-front');
        frontIndex = best;
      }
    };

    const tick = (time, deltaMs) => {
      const dt = Math.min(deltaMs, 50) / 1000;
      if (!isDragging && !isSnapping) {
        const goal = isHovered ? targetSpeed * 0.2 : targetSpeed;
        speed += (goal - speed) * Math.min(1, dt * 2.5); // inercia → velocidad automática
        angle += speed * dt;
      }
      render();
    };

    // Llevar una tarjeta al frente y mantenerla unos segundos
    const goTo = index => {
      const i = (index + total) % total;
      const delta = normalize(-i * step - angle);
      const proxy = { a: angle };
      isSnapping = true;
      gsap.to(proxy, {
        a: angle + delta,
        duration: 0.9,
        ease: 'power3.inOut',
        overwrite: true,
        onUpdate: () => { angle = proxy.a; },
        onComplete: () => { isSnapping = false; speed = 0; }
      });
      targetSpeed = 0;
      if (holdCall) holdCall.kill();
      holdCall = gsap.delayedCall(3.5, () => { targetSpeed = AUTO_SPEED; });
    };

    // Arrastre con inercia (pointer events: ratón y táctil)
    let isDragging = false;
    let pointerStartX = 0;
    let lastX = 0;
    let lastTime = 0;
    let downCard = null;

    viewport.addEventListener('pointerdown', e => {
      pointerStartX = lastX = e.clientX;
      lastTime = performance.now();
      downCard = e.target.closest('.ai-card');
      viewport.addEventListener('pointermove', onPointerMove);
    });

    const onPointerMove = e => {
      if (!isDragging && Math.abs(e.clientX - pointerStartX) < 6) return;
      if (!isDragging) {
        isDragging = true;
        isSnapping = false;
        viewport.classList.add('is-dragging');
        viewport.setPointerCapture(e.pointerId);
      }
      const now = performance.now();
      const deltaDeg = (e.clientX - lastX) * 0.3;
      angle += deltaDeg;
      speed = deltaDeg / Math.max((now - lastTime) / 1000, 0.016);
      lastX = e.clientX;
      lastTime = now;
    };

    const endPointer = () => {
      viewport.removeEventListener('pointermove', onPointerMove);
      if (isDragging) {
        isDragging = false;
        viewport.classList.remove('is-dragging');
        speed = gsap.utils.clamp(-400, 400, speed);
      } else if (downCard) {
        goTo(cards.indexOf(downCard)); // click sin arrastre
      }
      downCard = null;
    };
    viewport.addEventListener('pointerup', endPointer);
    viewport.addEventListener('pointercancel', endPointer);

    viewport.addEventListener('mouseenter', () => { isHovered = true; });
    viewport.addEventListener('mouseleave', () => { isHovered = false; });

    viewport.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(frontIndex + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(frontIndex - 1); }
    });

    controls.addEventListener('click', e => {
      const btn = e.target.closest('.ai-carousel-btn');
      if (btn) goTo(frontIndex + Number(btn.dataset.dir));
    });

    // Filtros: atenuar lo que no coincide y girar hasta la primera coincidencia
    document.addEventListener('ai-filter', e => {
      activeFilter = e.detail;
      const firstMatch = cards.findIndex(matchesFilter);
      if (firstMatch >= 0) goTo(firstMatch);
    });

    // Entrada: las tarjetas salen del centro hacia el cilindro girando rápido
    gsap.set(viewport, { autoAlpha: 0 });
    layout();
    render();

    ScrollTrigger.create({
      trigger: viewport,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        speed = -260;
        gsap.to(viewport, { autoAlpha: 1, duration: 0.6 });
        gsap.to(state, { radius: computeRadius(), duration: 1.8, ease: 'expo.out', onUpdate: layout });
      }
    });

    // Inclinación ligada al scroll para dar profundidad
    gsap.to(state, {
      tilt: -4,
      ease: 'none',
      scrollTrigger: { trigger: viewport, start: 'top bottom', end: 'bottom top', scrub: true }
    });

    // El ticker solo corre mientras el carrusel está en pantalla
    ScrollTrigger.create({
      trigger: viewport,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: self => (self.isActive ? gsap.ticker.add(tick) : gsap.ticker.remove(tick))
    });

    // Recalcular el radio si cambia el ancho de tarjeta (breakpoints)
    let lastWidth = ring.offsetWidth;
    window.addEventListener('resize', () => {
      if (ring.offsetWidth === lastWidth || state.radius === 0) return;
      lastWidth = ring.offsetWidth;
      state.radius = computeRadius();
      layout();
    });
  }

  // Los estados iniciales ya están en línea: el CSS de espera sobra
  root.classList.remove('anim-pending');
});
