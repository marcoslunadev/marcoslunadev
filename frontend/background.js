/* ==========================================================================
   BACKGROUND.JS - FONDO VIVO DE LA PÁGINA
   Un único <canvas> fijo detrás de todo el contenido:
   - Rejilla con degradado cyan → esmeralda que cambia de tono con el scroll
     y se desplaza más lenta que el contenido (parallax).
   - Pulsos de corriente que viajan por las líneas de la rejilla, giran en
     las intersecciones y dejan una estela.
   - En escritorio, la rejilla se ilumina alrededor del cursor.
   Independiente de GSAP. Con prefers-reduced-motion se dibuja solo la
   rejilla estática. Se pausa solo con la pestaña oculta (requestAnimationFrame).
   ========================================================================== */

(() => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.className = 'bg-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  const CELL = isTouch ? 44 : 56;          // tamaño de celda en px
  const PARALLAX = 0.25;                   // la rejilla avanza al 25% del scroll
  const PULSE_COUNT = isTouch ? 7 : 14;
  const FRAME_MS = isTouch ? 1000 / 30 : 0; // en móvil basta con 30fps
  const DPR = Math.min(window.devicePixelRatio || 1, isTouch ? 1.25 : 1.5);

  // Colores de marca (RGB) para mezclar según el scroll
  const CYAN = [6, 182, 212];
  const EMERALD = [16, 185, 129];
  const BG = [8, 11, 17];

  let width = 0;
  let height = 0;
  let pointer = null; // { x, y } en px de pantalla
  const pulses = [];

  /* ------------------------------------------------------------------------
     Zonas de texto: la corriente se desvanece al entrar en ellas y reaparece
     al salir, como si pasara por debajo. Los rectángulos se guardan en
     coordenadas de documento y se refrescan cada segundo y al redimensionar.
     ------------------------------------------------------------------------ */
  const TEXT_ZONES = [
    '.hero-content', '.code-editor-mockup', '.section-header', '.service-card',
    '.tech-card-wrapper', '.tech-secondary', '.ai-carousel', '.ai-carousel-controls',
    '.portfolio-card', '.metodologia-card', '.metodologia-principles',
    '.developer-profile-card', '.contacto-info-card', '.contacto-form-card', '.footer .container'
  ].join(', ');
  const ZONE_PADDING = 32; // el pulso empieza a apagarse antes de tocar el bloque
  let textZones = [];

  const measureTextZones = () => {
    const scrollY = window.scrollY;
    textZones = [...document.querySelectorAll(TEXT_ZONES)]
      .map(el => el.getBoundingClientRect())
      .filter(r => r.width > 0 && r.height > 0)
      .map(r => ({
        left: r.left - ZONE_PADDING,
        right: r.right + ZONE_PADDING,
        top: r.top + scrollY - ZONE_PADDING,
        bottom: r.bottom + scrollY + ZONE_PADDING
      }));
  };

  const isOverText = (x, docY) => textZones.some(z => x > z.left && x < z.right && docY > z.top && docY < z.bottom);

  // Comprueba la estela completa (no solo la cabeza), muestreada cada 28px,
  // para que ninguna parte del pulso cruce un bloque de texto
  const trailTouchesText = (pulse, toDocY) => {
    let prev = { x: pulse.x, y: pulse.y };
    if (isOverText(prev.x, prev.y + toDocY)) return true;
    for (let i = pulse.trail.length - 1; i >= 0; i--) {
      const point = pulse.trail[i];
      const distance = Math.abs(point.x - prev.x) + Math.abs(point.y - prev.y);
      const steps = Math.max(1, Math.ceil(distance / 28));
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        if (isOverText(prev.x + (point.x - prev.x) * t, prev.y + (point.y - prev.y) * t + toDocY)) return true;
      }
      prev = point;
    }
    return false;
  };

  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const rgba = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;
  const rand = (min, max) => min + Math.random() * (max - min);

  /* ------------------------------------------------------------------------
     Tamaño: en móvil solo se redimensiona si cambia el ancho o la altura
     crece, para no reasignar el canvas cada vez que se oculta la barra del
     navegador al hacer scroll.
     ------------------------------------------------------------------------ */
  const resize = (force) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (!force && w === width && h <= height) return;
    width = w;
    height = Math.max(h, force ? 0 : height);
    canvas.width = Math.round(width * DPR);
    canvas.height = Math.round(height * DPR);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };

  const scrollProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  /* ------------------------------------------------------------------------
     Pulsos: viven en coordenadas de rejilla "mundo" (y absoluta de la
     rejilla), así se desplazan junto a ella con el parallax.
     ------------------------------------------------------------------------ */
  const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const spawnPulse = (pulse, gridShift) => {
    const cols = Math.ceil(width / CELL) + 1;
    const rows = Math.ceil(height / CELL) + 1;
    const startRow = Math.floor(gridShift / CELL);
    const x = Math.floor(rand(0, cols)) * CELL;
    const y = (startRow + Math.floor(rand(0, rows))) * CELL;
    const dir = DIRS[Math.floor(rand(0, 4))];
    Object.assign(pulse, {
      x, y,
      dx: dir[0], dy: dir[1],
      speed: rand(70, 170),           // px/s
      trailLength: rand(90, 220),     // px
      color: Math.random() < 0.5 ? CYAN : EMERALD,
      trail: [{ x, y }],              // esquinas recorridas (la cabeza se añade al dibujar)
      travelled: 0,                   // px desde la última intersección
      life: rand(5, 11),              // s antes de reaparecer en otro sitio
      age: 0,
      visibility: 1                   // 0 bajo un bloque de texto, 1 en zona libre
    });
    return pulse;
  };

  const updatePulse = (pulse, dt, gridShift) => {
    pulse.age += dt;
    const underText = trailTouchesText(pulse, window.scrollY - gridShift);
    pulse.visibility += ((underText ? 0 : 1) - pulse.visibility) * Math.min(1, dt * 9);
    let move = pulse.speed * dt;
    while (move > 0) {
      const toNext = CELL - pulse.travelled;
      const step = Math.min(move, toNext);
      pulse.x += pulse.dx * step;
      pulse.y += pulse.dy * step;
      pulse.travelled += step;
      move -= step;
      if (pulse.travelled >= CELL) {
        // Intersección: registrar esquina y decidir si gira
        pulse.travelled = 0;
        pulse.x = Math.round(pulse.x / CELL) * CELL;
        pulse.y = Math.round(pulse.y / CELL) * CELL;
        if (Math.random() < 0.35) {
          const turnLeft = Math.random() < 0.5;
          [pulse.dx, pulse.dy] = turnLeft ? [pulse.dy, -pulse.dx] : [-pulse.dy, pulse.dx];
          pulse.trail.push({ x: pulse.x, y: pulse.y });
        }
      }
    }

    // Recortar la estela a su longitud máxima: el punto que la sobrepasa se
    // acerca hacia la cabeza hasta quedar justo a trailLength
    let length = 0;
    let prev = { x: pulse.x, y: pulse.y };
    for (let i = pulse.trail.length - 1; i >= 0; i--) {
      const point = pulse.trail[i];
      const segment = Math.abs(prev.x - point.x) + Math.abs(prev.y - point.y);
      if (length + segment > pulse.trailLength) {
        const keep = pulse.trailLength - length;
        const t = segment > 0 ? keep / segment : 0;
        pulse.trail.splice(0, i + 1, { x: prev.x + (point.x - prev.x) * t, y: prev.y + (point.y - prev.y) * t });
        break;
      }
      length += segment;
      prev = point;
    }

    // Fuera de la zona visible o al final de su vida: reaparecer
    const screenY = pulse.y - gridShift;
    if (pulse.age > pulse.life || pulse.x < -CELL || pulse.x > width + CELL ||
        screenY < -CELL * 3 || screenY > height + CELL * 3) {
      spawnPulse(pulse, gridShift);
    }
  };

  // Sprite de la cabeza del pulso (se pre-renderiza una vez por color)
  const headSprite = (color) => {
    const size = 32;
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = size;
    const s = sprite.getContext('2d');
    const g = s.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    g.addColorStop(0.2, rgba(color, 0.45));
    g.addColorStop(1, rgba(color, 0));
    s.fillStyle = g;
    s.fillRect(0, 0, size, size);
    return sprite;
  };
  const sprites = new Map([[CYAN, headSprite(CYAN)], [EMERALD, headSprite(EMERALD)]]);

  const drawPulse = (pulse, gridShift) => {
    const fade = Math.min(1, pulse.age / 0.6, (pulse.life - pulse.age) / 0.6) * pulse.visibility;
    if (fade <= 0.01) return;
    const headX = pulse.x;
    const headY = pulse.y - gridShift;
    const tail = pulse.trail[0];
    const tailY = tail.y - gridShift;

    const gradient = ctx.createLinearGradient(headX, headY, tail.x, tailY);
    gradient.addColorStop(0, rgba(pulse.color, 0.5 * fade));
    gradient.addColorStop(1, rgba(pulse.color, 0));

    ctx.beginPath();
    ctx.moveTo(headX, headY);
    for (let i = pulse.trail.length - 1; i >= 0; i--) {
      ctx.lineTo(pulse.trail[i].x, pulse.trail[i].y - gridShift);
    }
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.15;
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 1;
    ctx.stroke();

    ctx.globalAlpha = fade * 0.8;
    ctx.drawImage(sprites.get(pulse.color), headX - 16, headY - 16);
    ctx.globalAlpha = 1;
  };

  /* ------------------------------------------------------------------------
     Rejilla
     ------------------------------------------------------------------------ */
  const gridPath = (offsetY, bounds) => {
    const left = bounds ? Math.max(0, Math.floor(bounds.x0 / CELL) * CELL) : 0;
    const right = bounds ? Math.min(width, bounds.x1) : width;
    const top = bounds ? Math.max(-CELL, bounds.y0) : -CELL;
    const bottom = bounds ? Math.min(height, bounds.y1) : height;
    ctx.beginPath();
    for (let x = left; x <= right; x += CELL) {
      ctx.moveTo(x + 0.5, top);
      ctx.lineTo(x + 0.5, bottom);
    }
    const firstY = Math.floor((top - offsetY) / CELL) * CELL + offsetY;
    for (let y = firstY; y <= bottom; y += CELL) {
      ctx.moveTo(left, y + 0.5);
      ctx.lineTo(right, y + 0.5);
    }
  };

  const drawGrid = (gridShift, progress) => {
    const offsetY = -(gridShift % CELL);
    const top = mix(CYAN, EMERALD, progress);
    const bottom = mix(EMERALD, CYAN, progress);

    // Halos de color de fondo que se desplazan suavemente con el scroll
    const glowA = ctx.createRadialGradient(width * 0.15, height * (0.2 + progress * 0.4), 0, width * 0.15, height * (0.2 + progress * 0.4), Math.max(width, height) * 0.6);
    glowA.addColorStop(0, rgba(top, 0.09));
    glowA.addColorStop(1, rgba(top, 0));
    ctx.fillStyle = glowA;
    ctx.fillRect(0, 0, width, height);

    const glowB = ctx.createRadialGradient(width * 0.9, height * (0.9 - progress * 0.5), 0, width * 0.9, height * (0.9 - progress * 0.5), Math.max(width, height) * 0.55);
    glowB.addColorStop(0, rgba(bottom, 0.07));
    glowB.addColorStop(1, rgba(bottom, 0));
    ctx.fillStyle = glowB;
    ctx.fillRect(0, 0, width, height);

    // Líneas de la rejilla con degradado vertical
    const lines = ctx.createLinearGradient(0, 0, 0, height);
    lines.addColorStop(0, rgba(top, 0.085));
    lines.addColorStop(1, rgba(bottom, 0.085));
    gridPath(offsetY);
    ctx.strokeStyle = lines;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Linterna del cursor: segunda pasada más brillante solo cerca del puntero
    if (pointer) {
      const r = 240;
      const spot = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, r);
      spot.addColorStop(0, rgba(top, 0.22));
      spot.addColorStop(1, rgba(top, 0));
      gridPath(offsetY, { x0: pointer.x - r, x1: pointer.x + r, y0: pointer.y - r, y1: pointer.y + r });
      ctx.strokeStyle = spot;
      ctx.stroke();
    }

    // Viñeta: funde la rejilla hacia los bordes
    const vignette = ctx.createRadialGradient(width / 2, height / 2, Math.min(width, height) * 0.25, width / 2, height / 2, Math.max(width, height) * 0.75);
    vignette.addColorStop(0, rgba(BG, 0));
    vignette.addColorStop(1, rgba(BG, 0.75));
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);
  };

  /* ------------------------------------------------------------------------
     Bucle
     ------------------------------------------------------------------------ */
  let lastTime = performance.now();
  let lastFrame = 0;

  const render = (now) => {
    const gridShift = reducedMotion ? 0 : window.scrollY * PARALLAX;
    const progress = scrollProgress();
    ctx.clearRect(0, 0, width, height);
    drawGrid(gridShift, progress);
    if (reducedMotion) return;

    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    ctx.globalCompositeOperation = 'lighter';
    pulses.forEach(pulse => {
      updatePulse(pulse, dt, gridShift);
      drawPulse(pulse, gridShift);
    });
    ctx.globalCompositeOperation = 'source-over';
  };

  const loop = (now) => {
    requestAnimationFrame(loop);
    if (FRAME_MS && now - lastFrame < FRAME_MS) return;
    lastFrame = now;
    render(now);
  };

  resize(true);
  measureTextZones();
  window.addEventListener('load', measureTextZones);
  window.addEventListener('resize', measureTextZones);
  setInterval(measureTextZones, 1000); // cubre reveals, filtros y cambios de idioma

  if (reducedMotion) {
    // Rejilla estática: redibujar solo cuando cambie algo
    render(performance.now());
    window.addEventListener('resize', () => { resize(true); render(performance.now()); });
    window.addEventListener('scroll', () => render(performance.now()), { passive: true });
    return;
  }

  const initialShift = window.scrollY * PARALLAX;
  for (let i = 0; i < PULSE_COUNT; i++) {
    const pulse = spawnPulse({}, initialShift);
    pulse.age = rand(0, pulse.life * 0.8); // escalonar para que no aparezcan todos a la vez
    pulses.push(pulse);
  }

  window.addEventListener('resize', () => resize(false));
  if (!isTouch) {
    window.addEventListener('pointermove', e => { pointer = { x: e.clientX, y: e.clientY }; }, { passive: true });
    document.addEventListener('pointerleave', () => { pointer = null; });
  }

  requestAnimationFrame(loop);
})();
