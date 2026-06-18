/* ═══════════════════════════════════════════════════════════════════
   NIVELES Y DATOS DE IMÁGENES
   ─────────────────────────────────────────────────────────────────
   HOW TO EDIT:
   · Cada nivel tiene su propio array `images`.
   · Cada imagen tiene los mismos campos que antes (src, gradient, type…)
   · Para AGREGAR una imagen: copiá cualquier objeto { src:… } dentro
     del array images del nivel que corresponda.
   · Para CAMBIAR LA DIFICULTAD de un nivel editá:
       showClues: true/false  → muestra u oculta las pistas al revelar
       timerSecs: N / null    → segundos por imagen (null = sin timer)
   · Para CAMBIAR UNA FRASE DE TRANSICIÓN editá el campo `transition`
     del nivel correspondiente (el último nivel tiene transition: null).

   CAMPOS POR IMAGEN:
   · src         → ruta a la foto real (ej: "img/foto.jpg"). Vacío = usa gradient.
   · gradient    → CSS gradient de placeholder (se usa mientras src = '').
   · type        → "real" o "ia"
   · caption     → leyenda handwritten bajo el polaroid
   · explanation → texto explicativo; soporta <strong>
   · clues       → tags de pistas (solo visibles si showClues: true en el nivel)
   · moral       → frase de cierre
   ═══════════════════════════════════════════════════════════════════ */
const LEVELS = [

  /* ──────────────────────────────────────────────────────────────
     NIVEL 1 — FÁCIL
     showClues: true → las pistas se muestran al revelar.
     Para cambiar las imágenes: editá src, caption, explanation.
     ────────────────────────────────────────────────────────────── */
  {
    id: 1,
    label: 'Nivel 1',
    desc: 'Los errores todavía se ven.',
    transition: 'Nivel 2 — el algoritmo aprendió a disimular.',
    showClues: true,
    timerSecs: null,
    images: [
      {
        src: 'img/n1-real-1.jpeg',
        gradient: 'radial-gradient(ellipse 70% 65% at 46% 42%, #7a6248 0%, #2c1e14 72%), linear-gradient(180deg, #4a3020, #1a0e08)',
        type: 'real',
        title: 'Cumpleaños en familia',
        caption: 'Una mesa compartida, risas y abrazos alrededor de la torta. Más que un cumpleaños, recuerdo la alegría de estar todos juntos celebrando otro año de vida.',
        explanation: 'Una foto de celular en plena fiesta: todos amontonados y abrazados, sin pose. La luz es la del ambiente, despareja. Ese desorden cálido es de un momento que pasó de verdad.',
        clues: ['Sin pose', 'Momento espontáneo'],
        moral: 'Lo que no se puede repetir se convierte en lo más real.',
      },
      {
        src: 'img/n1-ia-1.jpeg',
        gradient: 'radial-gradient(ellipse 60% 70% at 50% 46%, #4a3830 0%, #1a1210 74%), linear-gradient(160deg, #382820, #110c0a)',
        type: 'ia',
        title: 'Domingo de mates',
        caption: 'Un domingo al sol, sin apuros. Entre la ronda de mates y las risas, la tarde parecía infinita.',
        explanation: 'Todos sonríen igual y miran al frente, pero nadie se mira ni interactúa. Es una postal demasiado prolija: perfecta y, a la vez, vacía.',
        clues: ['Nadie interactúa', 'Demasiado prolija'],
        moral: '"El algoritmo conoce la escena pero no la vive."',
      },
      {
        src: 'img/n1-real-2.jpeg',
        gradient: 'radial-gradient(ellipse 75% 55% at 50% 44%, #8a7858 0%, #2c2018 68%), linear-gradient(180deg, #4a3c28, #1a140e)',
        type: 'real',
        title: 'Vacaciones en familia',
        caption: 'Un recuerdo de viaje y tiempo compartido, disfrutando de estar juntos en familia.',
        explanation: 'Colores desteñidos, polvo del escaneo y el encuadre torcido. Nadie acomodó nada para la foto. Una imagen así de gastada solo la guarda quien la vivió.',
        clues: ['Encuadre torcido', 'Colores desteñidos'],
        moral: 'Solo alguien que lo vivió guardaría una foto así.',
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────
     NIVEL 2 — MEDIO
     showClues: false → sin pistas al revelar.
     ────────────────────────────────────────────────────────────── */
  {
    id: 2,
    label: 'Nivel 2',
    desc: 'Los errores se ocultan entre los detalles.',
    transition: 'Nivel 3 — casi no quedan huellas.',
    showClues: false,
    timerSecs: null,
    images: [
      {
        src: 'img/n2-ia-2.jpeg',
        gradient: 'radial-gradient(ellipse 62% 60% at 44% 50%, #4a4030 0%, #1c1810 72%), linear-gradient(150deg, #363020, #100e08)',
        type: 'ia',
        title: 'Asado en lo de los abuelos',
        caption: 'La magia de la casa de los abuelos. El calorcito de la parrilla y la alegría inmensa de estar todos juntos.',
        explanation: 'Las caras y la luz tienen un acabado parejo, casi sin fallas, raro para una sobremesa familiar. Esa prolijidad demasiado perfecta es la marca de una imagen generada.',
        clues: ['Acabado perfecto', 'Demasiado prolija'],
        moral: '"El calor del ambiente no alcanza si los detalles físicos mienten."',
      },
      {
        src: 'img/n2-real-1.jpeg',
        gradient: 'radial-gradient(ellipse 80% 55% at 50% 44%, #8a7848 0%, #2c2418 68%), linear-gradient(185deg, #4a4028, #1a180e)',
        type: 'real',
        title: 'Cumpleaños de mi hermano',
        caption: 'Una tarde de juegos y risas en el pelotero, disfrutando de la infancia sin preocupaciones.',
        explanation: 'Flash duro y fondo movido por el envión del momento. Los chicos están en plena acción, sin pose. El desorden es lo que la hace real.',
        clues: ['Fondo movido', 'Flash duro'],
        moral: 'El desorden genuino de un momento no se puede encargar.',
      },
      {
        src: 'img/n2-ia-3.jpeg',
        gradient: 'radial-gradient(ellipse 55% 72% at 48% 46%, #303838 0%, #10181a 72%), linear-gradient(170deg, #283030, #0a1010)',
        type: 'ia',
        title: 'Caminata por la ciudad',
        caption: 'Tardes de caminar sin rumbo, todos hablando a la vez. Sentíamos que éramos dueños de la ciudad.',
        explanation: 'Demasiado ordenada para ser una calle real: los detalles del fondo se deshacen si los mirás de cerca. Le falta el caos de lo que de verdad ocurre.',
        clues: ['Fondo que se deforma', 'Sin azar'],
        moral: '"La IA conoce la estética de la amistad, pero no su desorden real."',
      },
    ],
  },

  /* ──────────────────────────────────────────────────────────────
     NIVEL 3 — DIFÍCIL
     showClues: false · timerSecs: 25 segundos por imagen.
     Para desactivar el timer: cambiá timerSecs a null.
     ────────────────────────────────────────────────────────────── */
  {
    id: 3,
    label: 'Nivel 3',
    desc: 'Aquí la IA ya no deja huellas visibles.',
    transition: null,
    showClues: false,
    timerSecs: 25,
    images: [
      {
        src: 'img/n3-real-2.jpeg',
        gradient: 'radial-gradient(ellipse 70% 55% at 48% 44%, #8a8060 0%, #2c2818 68%), linear-gradient(180deg, #484028, #18160e)',
        type: 'real',
        title: 'Tarde frente al mar',
        caption: 'Una tarde de verano frente al mar, entre caminatas, charlas y risas. La simple felicidad de compartir ese momento juntas.',
        explanation: 'Grano analógico y un fondo lleno de gente y cosas sin repetir. La escena es espontánea, no calculada. Lo imperfecto es lo que no se puede repetir.',
        clues: ['Grano analógico', 'Escena espontánea'],
        moral: 'El caos de la vida real no se puede fabricar sin que algo falle.',
      },
      {
        src: 'img/n3-ia-2.jpeg',
        gradient: 'radial-gradient(ellipse 65% 60% at 50% 50%, #384048 0%, #141820 72%), linear-gradient(200deg, #2c3440, #0c1018)',
        type: 'ia',
        title: 'Atardecer entre amigos',
        caption: 'La luz de la tarde cayendo. Esa comodidad única de estar con tus amigos de siempre, sin filtros.',
        explanation: 'Al fondo, los cuerpos se confunden entre sí y la luz no cae de forma coherente. Todo es demasiado perfecto: una imagen plausible que nunca ocurrió.',
        clues: ['Fondo confuso', 'Luz incoherente'],
        moral: '"Creíble de lejos, imposible al detalle."',
      },
      {
        src: 'img/n3-real-1.jpeg',
        gradient: 'radial-gradient(ellipse 72% 52% at 48% 58%, #7a6858 0%, #2a2018 72%), linear-gradient(185deg, #4a3828, #1a1208)',
        type: 'real',
        title: 'Primer día de clases',
        caption: 'El entusiasmo de empezar un nuevo año junto a mis amigas y compartir juntas ese primer día.',
        explanation: 'Sonrisas espontáneas y un encuadre improvisado, con el fondo del aula sin acomodar. No hubo puesta en escena: es el apuro alegre de un primer día.',
        clues: ['Sonrisas espontáneas', 'Fondo sin acomodar'],
        moral: 'Las imperfecciones son la firma de lo que realmente ocurrió.',
      },
    ],
  },

];  // fin de LEVELS

/* ═══════════════════════════════════════════════════════════════════
   ESTADO DEL JUEGO
   ═══════════════════════════════════════════════════════════════════ */
const state = {
  level:      0,    // índice del nivel actual (0-based)
  score:      0,    // aciertos en el nivel actual
  totalScore: 0,    // aciertos acumulados de niveles anteriores
  answers:    new Array(LEVELS[0].images.length).fill(null), // null | 'ok' | 'no'
  currentIdx: 0,
};

/* ═══════════════════════════════════════════════════════════════════
   ACCESORES Y LÓGICA DE NIVELES
   ═══════════════════════════════════════════════════════════════════ */

function currentImages() { return LEVELS[state.level].images; }
function currentLevel()  { return LEVELS[state.level]; }

/* Devuelve qué hacer después de que el usuario ve el veredicto */
function getNextAction() {
  const nextUnanswered = state.answers.findIndex(a => a === null);
  if (nextUnanswered !== -1)            return { type: 'image',   idx: nextUnanswered };
  if (state.level < LEVELS.length - 1) return { type: 'levelup' };
  return { type: 'result' };
}

/* Texto del botón según la acción */
function getNextLabel(action) {
  if (action.type === 'image')   return 'Siguiente imagen →';
  if (action.type === 'levelup') return `Nivel ${state.level + 2} →`;
  return 'Ver resultados →';
}

/* Ejecuta la acción correspondiente */
function executeNextAction(action) {
  if (action.type === 'image')   { openFocus(action.idx); return; }
  if (action.type === 'levelup') { showLevelUp(); return; }
  showResult();
}

/* Muestra la pantalla de transición entre niveles */
function showLevelUp() {
  const lv = currentLevel();
  document.getElementById('levelupEyebrow').textContent = `${lv.label} completado`;
  document.getElementById('levelupPhrase').textContent  = lv.transition;
  const correct = state.answers.filter(a => a === 'ok').length;
  document.getElementById('levelupStat').textContent =
    `${correct} de ${lv.images.length} identificadas en este nivel`;
  showScreen('screen-levelup');
}

/* ═══════════════════════════════════════════════════════════════════
   LETRAS RECORTADAS — ransom note (títulos principales)
   ─────────────────────────────────────────────────────────────────
   Se llama automáticamente en cada cambio de pantalla.
   ─────────────────────────────────────────────────────────────────
   PARA REEMPLAZAR UN TÍTULO POR PNG propio:
   1. Añadí la imagen en index.html con class="ransom-img"
      justo antes del <div class="ransom">
   2. Poné style="display:none" en ese <div class="ransom">
   3. El PNG se muestra; el JS deja de procesar ese div.
   ─────────────────────────────────────────────────────────────────
   PARA AGREGAR STICKERS PROPIOS:
   · Editar fillDecos() o fillRevealDecos() más abajo.
   ═══════════════════════════════════════════════════════════════════ */
const RFONTS = ["'Anton'","'Abril Fatface'","'Special Elite'","'Poppins',sans-serif","'Playfair Display',serif"];
const RBG    = ["#F3E9D8","#FAF8F4","#E8AAB9","#E0A82E","#3C968C","#C4463C","#C9A87C","#5A82B4","#9670A0","#28241F","#78A06E","#EED296"];
const RFGD   = ["#28241F","#28241F","#28241F","#FAF8F4","#FAF8F4","#FAF8F4","#28241F","#FAF8F4","#FAF8F4","#FAF8F4","#28241F","#28241F"];

function ransomize(root) {
  if (!root) return;
  root.querySelectorAll('.ransom:not([data-built])').forEach(el => {
    el.setAttribute('data-built', '1');
    const text = el.getAttribute('data-text') || '';
    el.innerHTML = '';
    [...text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'rl';
      span.textContent = ch === ' ' ? ' ' : ch;
      if (ch !== ' ') {
        const ri  = Math.floor(Math.random() * RFONTS.length);
        const bi  = Math.floor(Math.random() * RBG.length);
        const rot = (Math.random() * 9 - 4.5).toFixed(1);
        span.style.fontFamily = RFONTS[ri];
        span.style.background = RBG[bi];
        span.style.color      = RFGD[bi];
        span.style.setProperty('--rl-r', rot + 'deg');
      }
      el.appendChild(span);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════
   LETRAS PNG PARA CAPTIONS DE POLAROID
   ─────────────────────────────────────────────────────────────────
   Captions cuyas letras estén TODAS disponibles como PNG se renderizan
   con las letras recortadas. Las demás usan la tipografía Caveat normal.
   Letras disponibles: c e f i l m p r t u z (en minúsculas).
   Para agregar una letra nueva: añadí su ruta en CAPTION_LETTERS y
   actualizá el contador en CAPTION_AVAIL.
   ═══════════════════════════════════════════════════════════════════ */
const CAPTION_LETTERS = {
  c: ['img/perfect_c.png', 'img/cumpl_c.png'],
  e: ['img/perfect_e1.png', 'img/feliz_e.png', 'img/perfect_e2.png'],
  f: ['img/perfect_f.png', 'img/feliz_f.png'],
  i: 'img/feliz_i.png',
  l: ['img/feliz_l.png', 'img/cumpl_l.png'],
  m: 'img/cumpl_m.png',
  p: ['img/perfect_p.png', 'img/cumpl_p.png'],
  r: 'img/perfect_r.png',
  t: 'img/perfect_t.png',
  u: 'img/cumpl_u.png',
  z: 'img/feliz_z.png',
};
const CAPTION_AVAIL = { c:2, e:3, f:2, i:1, l:2, m:1, p:2, r:1, t:1, u:1, z:1 };

function canCaptionUsePNG(text) {
  const need = {};
  for (const ch of text.toLowerCase().replace(/[^a-z]/g, ''))
    need[ch] = (need[ch] || 0) + 1;
  return Object.entries(need).every(([ch, n]) => (CAPTION_AVAIL[ch] || 0) >= n);
}

function buildCaptionPNG(text) {
  const useCount = {};
  const ROTS = [-4, 2.5, -1.5, 5, -3, 1.5, -4.5, 3, -2, 2];
  const LYS  = [2, -3, 1, -2, 3, -1, 2];
  const spans = [...text.toLowerCase()].map((ch, i) => {
    if (!/[a-z]/.test(ch)) return '';
    const entry = CAPTION_LETTERS[ch];
    const idx   = useCount[ch] || 0;
    useCount[ch] = idx + 1;
    const src   = Array.isArray(entry) ? entry[idx % entry.length] : entry;
    const rot   = ROTS[i % ROTS.length];
    const ly    = LYS[i % LYS.length];
    return `<span style="display:inline-block;transform:rotate(${rot}deg) translateY(${ly}px);flex-shrink:0"><img src="${src}" alt="" style="height:clamp(1rem,2.8vw,1.5rem);width:auto;display:block"></span>`;
  }).join('');
  return `<span style="display:inline-flex;flex-wrap:wrap;justify-content:center;align-items:flex-end;gap:1px">${spans}</span>`;
}

function setCaption(elId, text) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (canCaptionUsePNG(text)) {
    el.innerHTML = buildCaptionPNG(text);
  } else {
    el.textContent = text;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   CURSOR PERSONALIZADO
   ═══════════════════════════════════════════════════════════════════ */
const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
});

// El anillo sigue al cursor con inercia suave
(function tickRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(tickRing);
})();

/* ═══════════════════════════════════════════════════════════════════
   NAVEGACIÓN ENTRE PANTALLAS
   ═══════════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  ransomize(el);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ═══════════════════════════════════════════════════════════════════
   INICIALIZACIÓN: grid de fondo del intro + títulos ransom
   ═══════════════════════════════════════════════════════════════════ */
const bgGrid = document.getElementById('introBgGrid');
for (let i = 0; i < 24; i++) {
  const cell = document.createElement('div');
  cell.className = 'intro-bg-cell';
  bgGrid.appendChild(cell);
}

// Construir letras ransom en la pantalla de intro (ya activa al cargar)
ransomize(document.getElementById('screen-intro'));

/* ═══════════════════════════════════════════════════════════════════
   PANTALLA 1 → 2: INTRO → GALERÍA
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('btnStart').addEventListener('click', () => {
  showScreen('screen-steps');
});

document.getElementById('btnStartGame').addEventListener('click', () => {
  showScreen('screen-gallery');
  buildGallery();
});

/* ═══════════════════════════════════════════════════════════════════
   PANTALLA 2: CONSTRUIR GALERÍA
   ═══════════════════════════════════════════════════════════════════ */

// Rotaciones fijas para consistencia visual entre renders
const ROTATIONS = [-2.5, 1.8, -1.2, 2.4, -0.8, 1.5, -2.1, 1.0, -1.6];

function buildGallery() {
  const lv   = currentLevel();
  const imgs = currentImages();

  // Actualizar encabezado con info del nivel actual
  document.getElementById('levelBadge').textContent =
    `Nivel ${lv.id} de ${LEVELS.length} — ${lv.desc}`;
  document.getElementById('panelScoreTotal').textContent = imgs.length;

  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  imgs.forEach((img, i) => {
    const answer   = state.answers[i];
    const isDone   = answer !== null;

    const card = document.createElement('div');
    card.className = 'card' + (isDone ? ' done' : '');
    card.style.setProperty('--r', `${ROTATIONS[i % ROTATIONS.length]}deg`);

    // Usa src real si existe, si no usa el gradient placeholder
    const bgStyle = img.src
      ? `background: url('${img.src}') center/cover`
      : `background: ${img.gradient}`;

    card.innerHTML = `
      <div class="card-photo" style="${bgStyle}">
        <div class="card-hover"><span>${isDone ? 'Ver de nuevo' : 'Veredicto'}</span></div>
      </div>
      <div class="card-caption">¿real o ia?</div>
      ${isDone ? `<div class="card-badge ${answer}">${answer === 'ok' ? '✓' : '✕'}</div>` : ''}
    `;

    card.addEventListener('click', () => openFocus(i));
    grid.appendChild(card);
  });

  updateProgress();
}

function updateProgress() {
  const done  = state.answers.filter(Boolean).length;
  const total = currentImages().length;
  document.getElementById('progressText').textContent = `${done} / ${total} reveladas`;
  document.getElementById('panelScoreTotal').textContent = total;

  const btnResult = document.getElementById('btnShowResult');
  if (done === total) {
    btnResult.classList.remove('hidden');
    const action = getNextAction();
    btnResult.textContent = getNextLabel(action);
  } else {
    btnResult.classList.add('hidden');
  }
}

/* ═══════════════════════════════════════════════════════════════════
   TIMER DE NIVEL 3
   Para desactivar: cambiá timerSecs a null en LEVELS[2] arriba.
   Para ajustar: cambiá el valor numérico de timerSecs (en segundos).
   ═══════════════════════════════════════════════════════════════════ */
let focusTimer = null;

function startFocusTimer() {
  const lv = currentLevel();
  if (!lv.timerSecs) return;
  clearFocusTimer();

  const timerWrap = document.getElementById('timerWrap');
  const timerBar  = document.getElementById('timerBar');
  timerWrap.classList.remove('hidden');
  timerBar.classList.remove('timer-urgent');
  timerBar.style.transition = 'none';
  timerBar.style.width = '100%';

  const totalMs   = lv.timerSecs * 1000;
  const startedAt = Date.now();

  focusTimer = setInterval(() => {
    const elapsed   = Date.now() - startedAt;
    const remaining = Math.max(0, totalMs - elapsed);
    timerBar.style.width = ((remaining / totalMs) * 100) + '%';
    if (remaining < 6000) timerBar.classList.add('timer-urgent');
    if (remaining <= 0) {
      clearFocusTimer();
      // Tiempo agotado: auto-responde con la opción incorrecta
      const img = currentImages()[state.currentIdx];
      guess(img.type === 'real' ? 'ia' : 'real');
    }
  }, 80);
}

function clearFocusTimer() {
  if (focusTimer !== null) { clearInterval(focusTimer); focusTimer = null; }
  const timerWrap = document.getElementById('timerWrap');
  const timerBar  = document.getElementById('timerBar');
  if (timerWrap) timerWrap.classList.add('hidden');
  if (timerBar)  { timerBar.classList.remove('timer-urgent'); timerBar.style.width = '100%'; }
}

/* ═══════════════════════════════════════════════════════════════════
   GALERÍA → FOCO: abrir una imagen
   ═══════════════════════════════════════════════════════════════════ */
function openFocus(idx) {
  const img = currentImages()[idx];
  state.currentIdx = idx;

  // Cargar imagen o gradiente en el marco
  const photo = document.getElementById('stagePhoto');
  photo.style.background = img.src
    ? `url('${img.src}') center/cover`
    : img.gradient;
  photo.classList.toggle('photo-rot90', !!img.rotateDeg);

  const stageTitleEl = document.getElementById('stageTitle');
  if (stageTitleEl) stageTitleEl.textContent = img.title || '';
  setCaption('stageCaption', img.caption);
  document.getElementById('panelKick').textContent =
    `Nivel ${currentLevel().id} · imagen ${String(idx + 1).padStart(2, '0')}`;

  // Actualizar marcador
  document.getElementById('panelScoreNum').textContent   = state.score;
  document.getElementById('panelScoreTotal').textContent = currentImages().length;

  // Resetear efectos visuales y timer
  const stageArea = document.getElementById('stageArea');
  stageArea.classList.remove('bloom', 'drain');
  clearDecos();
  clearFocusTimer();

  const alreadyAnswered = state.answers[idx] !== null;

  if (alreadyAnswered) {
    document.getElementById('questionBlock').classList.add('hidden');
    void stageArea.offsetWidth;
    stageArea.classList.add(img.type === 'real' ? 'bloom' : 'drain');
    if (img.type === 'real') fillDecos();
    showVerdict(img, state.answers[idx] === 'ok');
  } else {
    document.getElementById('questionBlock').classList.remove('hidden');
    document.getElementById('verdictBlock').classList.add('hidden');
    startFocusTimer(); // solo si es imagen nueva sin responder
  }

  showScreen('screen-focus');
}

/* ═══════════════════════════════════════════════════════════════════
   ADIVINAR: Real o IA
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('btnReal').addEventListener('click', () => guess('real'));
document.getElementById('btnIA').addEventListener('click',   () => guess('ia'));

function guess(choice) {
  clearFocusTimer();
  const img     = currentImages()[state.currentIdx];
  const correct = (choice === img.type);

  if (state.answers[state.currentIdx] === null) {
    if (correct) state.score++;
    state.answers[state.currentIdx] = correct ? 'ok' : 'no';
  }

  // Aplicar efecto visual
  const stageArea = document.getElementById('stageArea');
  stageArea.classList.remove('bloom', 'drain');
  void stageArea.offsetWidth; // forzar reflow para reiniciar transición

  if (img.type === 'real') {
    stageArea.classList.add('bloom');
    fillDecos();
  } else {
    stageArea.classList.add('drain');
    clearDecos();
  }

  // Ocultar pregunta, mostrar veredicto (actualiza el panel de fondo)
  document.getElementById('questionBlock').classList.add('hidden');
  showVerdict(img, correct);

  // Actualizar marcador
  document.getElementById('panelScoreNum').textContent = state.score;

  // ── Flash central + overlay inmersivo ──
  showFlash(correct);
  showRevealOverlay(img, correct);
}

/* ═══════════════════════════════════════════════════════════════════
   MOSTRAR VEREDICTO
   ═══════════════════════════════════════════════════════════════════ */
function showVerdict(img, correct) {
  const block = document.getElementById('verdictBlock');
  block.classList.remove('hidden');

  // Tag "Registro real" / "Generada por IA"
  const tag = document.getElementById('verdictTag');
  tag.className = 'verdict-tag ' + img.type;
  tag.textContent = img.type === 'real' ? 'Registro real' : 'Generada por IA';

  // Explicación con markup <strong>
  document.getElementById('verdictExp').innerHTML = img.explanation;

  // Pistas — solo en niveles que las muestran
  const clueList = document.getElementById('clueList');
  if (currentLevel().showClues) {
    clueList.style.display = '';
    clueList.innerHTML = '';
    img.clues.forEach(c => {
      const span = document.createElement('span');
      span.className = 'clue-tag';
      span.textContent = c;
      clueList.appendChild(span);
    });
  } else {
    clueList.style.display = 'none';
  }

  // Frase reflexiva
  const moral = document.getElementById('verdictMoral');
  moral.textContent = img.moral;
  moral.className = 'verdict-moral ' + (img.type === 'real' ? 'is-real' : 'is-ia');

  // Botón siguiente / nivel / resultados
  const action  = getNextAction();
  const btnNext = document.getElementById('btnNext');
  btnNext.textContent = getNextLabel(action);
  btnNext.onclick = () => executeNextAction(action);
}

/* ═══════════════════════════════════════════════════════════════════
   DECORACIONES BLOOM — pantalla de foco
   Se muestran cuando se confirma una foto real.
   ─────────────────────────────────────────────────────────────────
   PARA REEMPLAZAR POR STICKERS PROPIOS:
   · Reemplazá el innerHTML de cada deco con:
     <img src="img/sticker-corazon.png" style="width:60px">
   ═══════════════════════════════════════════════════════════════════ */
function fillDecos() {
  document.getElementById('deco1').innerHTML =
    `<img src="img/corazon.png" alt=""
          style="width:clamp(44px,6vw,64px);height:auto;display:block;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.15))">`;

  document.getElementById('deco2').innerHTML =
    `<img src="img/estrellas.png" alt=""
          style="width:clamp(42px,5.5vw,62px);height:auto;display:block;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.12))">`;

  document.getElementById('deco3').innerHTML =
    `<img src="img/corazon.png" alt=""
          style="width:clamp(36px,4.5vw,52px);height:auto;display:block;opacity:0.78;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.10))">`;

  document.getElementById('deco4').innerHTML =
    `<img src="img/papel_rasgado.png" alt=""
          style="width:clamp(70px,10vw,110px);height:auto;display:block;opacity:0.62">`;
}

function clearDecos() {
  ['deco1', 'deco2', 'deco3', 'deco4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
}

/* ═══════════════════════════════════════════════════════════════════
   DECORACIONES BLOOM — overlay de revelación
   Solo se muestran cuando la foto es REAL (fillRevealDecos).
   ─────────────────────────────────────────────────────────────────
   Pool de stickers: se eligen 5 al azar en cada revelación real.
   El slot d4 siempre muestra la píldora "real ✦".
   ═══════════════════════════════════════════════════════════════════ */
const _DECO_POOL = [
  'img/deco-estrella-rosa.png',
  'img/deco-camara.png',
  'img/deco-carita-feliz.png',
  'img/deco-exclamaciones.png',
  'img/deco-globo-corazon.png',
  'img/deco-flor-rosa.png',
  'img/deco-diamantes.png',
  'img/deco-asterisco-violeta.png',
  'img/deco-destello-verde.png',
  'img/deco-estrella-verde.png',
  'img/deco-estrella-capas.png',
  'img/deco-estrellas-amarillas.png',
  'img/deco-corazones-trio.png',
  'img/deco-exclamaciones-papel.png',
  'img/deco-mono.png',
  'img/deco-interrogacion.png',
  'img/corazon.png',
  'img/estrellas.png',
  'img/torta.png',
  'img/papel_rasgado.png',
];
const _DECO_SIZES = ['clamp(38px,5vw,62px)','clamp(56px,8vw,92px)','clamp(78px,11vw,118px)','clamp(28px,3.2vw,44px)'];
const _DECO_ROTS  = [-24,-18,-12,-7,-3,0,3,7,12,18,24];
function _rndItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function fillRevealDecos() {
  const d4 = document.getElementById('rovDeco4');
  if (d4) d4.innerHTML =
    `<div style="font-family:'Caveat',cursive;font-size:1.25rem;color:#FAF8F4;
                 background:#C4463C;padding:5px 15px;border-radius:30px;
                 transform:rotate(-3deg);display:inline-block;font-weight:700;
                 white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.22)"
          aria-hidden="true">real ✦</div>`;

  const shuffled = [..._DECO_POOL].sort(() => Math.random() - 0.5);
  ['rovDeco1','rovDeco2','rovDeco3','rovDeco5','rovDeco6'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const size = _rndItem(_DECO_SIZES);
    const rot  = _rndItem(_DECO_ROTS);
    el.innerHTML = `<img src="${shuffled[i]}" alt="" style="width:${size};height:auto;display:block;transform:rotate(${rot}deg);filter:drop-shadow(0 3px 7px rgba(0,0,0,0.20))">`;
  });
}

function clearRevealDecos() {
  ['rovDeco1','rovDeco2','rovDeco3','rovDeco4','rovDeco5','rovDeco6'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
  });
}

/* ═══════════════════════════════════════════════════════════════════
   OVERLAY DE REVELACIÓN — TIMING
   ─────────────────────────────────────────────────────────────────
   Ajustá estos valores (en ms) para cambiar el ritmo dramático:
   · transform → pausa de tensión antes del efecto visual
   · badge, exp, clues, moral, actions → escalonado del texto
   Para todo más rápido: dividí todos por 2.
   Para todo más lento: multiplicá por 1.5.
   ═══════════════════════════════════════════════════════════════════ */
const ROV_T = {
  transform:  620,   // pausa de tensión → dispara bloom / drain
  badge:     1000,   // aparece el tag "Real" / "IA"
  exp:       1260,   // aparece la explicación
  clues:     1490,   // aparecen los clue tags
  moral:     1700,   // aparece la frase reflexiva
  actions:   1940,   // aparecen los botones
};

/* Respeta prefers-reduced-motion: si está activo, todos los delays = 0 */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function rovDelay(ms) { return prefersReduced ? 0 : ms; }

/* ── Flash central: muestra "¡Acertaste!" o "La IA te engañó" brevemente ── */
function showFlash(correct) {
  const el  = document.getElementById('flash-result');
  const txt = document.getElementById('flashText');
  if (!el || !txt) return;
  txt.textContent = correct ? '¡Acertaste!' : 'La IA te engañó';
  el.className = 'flash-result ' + (correct ? 'flash-ok' : 'flash-no');
  void el.offsetWidth; // forzar reflow para reiniciar animación
  el.classList.add('flashing');
}

/* ── Mostrar el overlay de revelación ── */
function showRevealOverlay(img, correct) {
  const rov = document.getElementById('reveal-overlay');

  // Cargar imagen o gradiente (+ copias para las capas de glitch)
  const bg = img.src ? `url('${img.src}') center/cover` : img.gradient;
  const rovPhoto = document.getElementById('rovPhoto');
  rovPhoto.style.background = bg;
  rovPhoto.classList.toggle('photo-rot90', !!img.rotateDeg);
  document.getElementById('rovGlR').style.background   = bg;
  document.getElementById('rovGlB').style.background   = bg;
  const rovTitleEl = document.getElementById('rovTitle');
  if (rovTitleEl) rovTitleEl.textContent = img.title || '';
  setCaption('rovCap', img.caption);

  // Resultado del jugador
  const icon = document.getElementById('rovResultIcon');
  const txt  = document.getElementById('rovResultText');
  icon.textContent = correct ? '✓' : '✗';
  icon.className   = 'rov-result-icon ' + (correct ? 'ok' : 'no');
  txt.textContent  = correct ? '¡Acertaste!' : 'La IA te engañó.';
  txt.className    = 'rov-result-text ' + (correct ? 'ok' : 'no');

  // Badge Real / IA
  const tag = document.getElementById('rovTag');
  tag.className   = 'rov-tag ' + img.type;
  tag.textContent = img.type === 'real' ? 'Registro real' : 'Generada por IA';

  // Explicación y pistas
  document.getElementById('rovExp').innerHTML = img.explanation;
  // Pistas — solo en niveles que las muestran
  const clueWrap  = document.getElementById('rovClues');
  const showClues = currentLevel().showClues;
  if (showClues) {
    clueWrap.style.display = '';
    clueWrap.innerHTML = '';
    img.clues.forEach(c => {
      const span = document.createElement('span');
      span.className = 'clue-tag';
      span.textContent = c;
      clueWrap.appendChild(span);
    });
  } else {
    clueWrap.innerHTML = '';
    clueWrap.style.display = 'none';
  }

  // Frase reflexiva
  document.getElementById('rovMoral').textContent = img.moral;

  // Botón siguiente / nivel / resultados
  const action     = getNextAction();
  const rovBtnNext = document.getElementById('rovBtnNext');
  rovBtnNext.textContent = getNextLabel(action);
  rovBtnNext.onclick = () => closeRevealOverlay(() => executeNextAction(action));

  // Limpiar estado previo y clases de visibilidad
  rov.classList.remove('rov-is-bloom', 'rov-is-drain', 'rov-is-wrong', 'leaving', 'active');
  ['rovResultLine','rovTag','rovExp','rovClues','rovMoral','rovActions'].forEach(id =>
    document.getElementById(id).classList.remove('rov-visible')
  );
  document.getElementById('rovGlR').classList.remove('glitching');
  document.getElementById('rovGlB').classList.remove('glitching');

  // Mostrar overlay (con reflow para reiniciar la animación de entrada)
  void rov.offsetWidth;
  rov.classList.add('active');

  // ── Pausa de tensión → TRANSFORMACIÓN → escalonado de texto ──
  setTimeout(() => {
    rov.classList.add(img.type === 'real' ? 'rov-is-bloom' : 'rov-is-drain');
    if (img.type === 'ia') {
      document.getElementById('rovGlR').classList.add('glitching');
      document.getElementById('rovGlB').classList.add('glitching');
      clearRevealDecos();
    } else {
      fillRevealDecos();
    }
  }, rovDelay(ROV_T.transform));

  // Error del usuario: desaturación dramática 400ms después del bloom/drain
  if (!correct) {
    setTimeout(() => rov.classList.add('rov-is-wrong'), rovDelay(ROV_T.transform + 400));
  }

  setTimeout(() => rovShow('rovResultLine'), rovDelay(ROV_T.badge));
  setTimeout(() => rovShow('rovTag'),        rovDelay(ROV_T.badge + 150));
  setTimeout(() => rovShow('rovExp'),        rovDelay(ROV_T.exp));
  if (showClues) setTimeout(() => rovShow('rovClues'), rovDelay(ROV_T.clues));
  setTimeout(() => rovShow('rovMoral'),   rovDelay(ROV_T.moral));
  setTimeout(() => rovShow('rovActions'), rovDelay(ROV_T.actions));
}

function rovShow(id) {
  document.getElementById(id).classList.add('rov-visible');
}

/* ── Cerrar el overlay con fade-out ── */
function closeRevealOverlay(callback) {
  const rov = document.getElementById('reveal-overlay');
  rov.classList.add('leaving');
  setTimeout(() => {
    rov.classList.remove('active', 'leaving', 'rov-is-bloom', 'rov-is-drain', 'rov-is-wrong');
    clearRevealDecos();
    if (callback) callback();
  }, prefersReduced ? 0 : 280);
}

/* ═══════════════════════════════════════════════════════════════════
   NAVEGACIÓN DESDE PANTALLA DE FOCO
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('btnBack').addEventListener('click', () => {
  clearFocusTimer();
  showScreen('screen-gallery');
  buildGallery();
});

document.getElementById('btnGallery').addEventListener('click', () => {
  clearFocusTimer();
  showScreen('screen-gallery');
  buildGallery();
});

document.getElementById('btnShowResult').addEventListener('click', () => {
  executeNextAction(getNextAction());
});

/* ═══════════════════════════════════════════════════════════════════
   PANTALLA DE RESULTADO FINAL
   ═══════════════════════════════════════════════════════════════════ */
const RESULT_CARDS = [
  { min: 9, max: 9, src: 'img/resultado-9-mirada-lucida.png',     alt: 'Mirada Lúcida — 9/9' },
  { min: 7, max: 8, src: 'img/resultado-7-ojo-entrenado.png',     alt: 'Ojo Entrenado — 7-8/9' },
  { min: 5, max: 6, src: 'img/resultado-6-entre-dos-mundos.png',  alt: 'Entre Dos Mundos — 5-6/9' },
  { min: 2, max: 4, src: 'img/resultado-3-seduccion-perfecta.png', alt: 'Seducción Perfecta — 2-4/9' },
  { min: 0, max: 1, src: 'img/resultado-0-el-encantado.png',      alt: 'El Encantado — 0-1/9' },
];

function showResult() {
  const TOTAL = 9;
  const raw   = state.totalScore + state.score;
  const aciertos = Math.min(Math.max(raw, 0), TOTAL);
  const pct   = aciertos / TOTAL;

  document.getElementById('resultScore').textContent = aciertos;
  document.getElementById('resultTotal').textContent = TOTAL;

  let message, sub, lesson;

  if (pct === 1) {
    message = 'Tu mirada aún distingue lo real de lo algorítmico.';
    sub     = 'Pero los modelos mejoran cada semana. Lo que hoy detectás mañana será invisible. La pregunta no es si podés verlo ahora —es cuándo dejarás de poder.';
    lesson  = 'La post-fotografía no es el fin de las imágenes: es el fin de la certeza sobre su origen. Cada foto perfecta que no reconocemos como generada reescribe la memoria colectiva en silencio.';
  } else if (pct >= 0.5) {
    message = 'Todavía reconocés las huellas de lo vivido.';
    sub     = 'La perfección algorítmica te engañó algunas veces. Los modelos no recuerdan: imaginan. Y cada vez imaginan con más detalle, con menos errores detectables.';
    lesson  = 'Cuando una IA "mejora" una fotografía, no restaura: inventa. Los detalles que agrega nunca ocurrieron. La imagen resultante es plausible, pero dejó de ser un documento.';
  } else {
    message = 'La IA logró borrarse de tu percepción.';
    sub     = 'Las imágenes perfectas que no reconocemos como generadas son las más peligrosas: reescriben la memoria sin dejar rastro, sin que lo notemos.';
    lesson  = 'La fotografía fue durante siglos la prueba de que algo sucedió. La IA disuelve esa certeza: ahora lo perfecto es sospechoso, y lo imperfecto —el parpado, el dedo en el encuadre, el grano— se vuelve valioso como evidencia.';
  }

  document.getElementById('resultMessage').textContent = message;
  document.getElementById('resultSub').textContent     = sub;
  document.getElementById('resultLesson').textContent  = lesson;

  // Tarjeta imagen según puntaje — if/else if en orden descendente
  let cardSrc, cardAlt;
  if (aciertos >= 9) {
    cardSrc = 'img/resultado-9-mirada-lucida.png';
    cardAlt = 'Mirada Lúcida — 9/9';
  } else if (aciertos >= 7) {
    cardSrc = 'img/resultado-7-ojo-entrenado.png';
    cardAlt = 'Ojo Entrenado — 7-8/9';
  } else if (aciertos >= 5) {
    cardSrc = 'img/resultado-6-entre-dos-mundos.png';
    cardAlt = 'Entre Dos Mundos — 5-6/9';
  } else if (aciertos >= 2) {
    cardSrc = 'img/resultado-3-seduccion-perfecta.png';
    cardAlt = 'Seducción Perfecta — 2-4/9';
  } else {
    cardSrc = 'img/resultado-0-el-encantado.png';
    cardAlt = 'El Encantado — 0-1/9';
  }
  document.getElementById('resultScoreLine').textContent = `Acertaste ${aciertos} de ${TOTAL}`;
  const cardImg = document.getElementById('resultCardImg');
  cardImg.src = cardSrc;
  cardImg.alt = cardAlt;

  showScreen('screen-result');
  showArchetypeCard(aciertos);
}

/* ═══════════════════════════════════════════════════════════════════
   TARJETA DE ARQUETIPO — resultado final
   ═══════════════════════════════════════════════════════════════════ */
const ARCHETYPES = [
  {
    min: 9, max: 9,
    name: 'MIRADA LÚCIDA',
    quote: 'No te dejás llevar por lo perfecto.\nSabés que lo real tiene textura.',
    theme: 'ac-warm-1',
    deco1: 'img/corazon.png',
    deco2: 'img/estrellas.png',
  },
  {
    min: 7, max: 8,
    name: 'OJO ENTRENADO',
    quote: 'Casi siempre ves lo que\nla IA no puede fingir.',
    theme: 'ac-warm-2',
    deco1: 'img/estrellas.png',
    deco2: 'img/corazon.png',
  },
  {
    min: 5, max: 6,
    name: 'ENTRE DOS MUNDOS',
    quote: 'A veces ves el truco.\nA veces el truco te ve a vos.',
    theme: 'ac-mid',
    deco1: 'img/papel_rasgado.png',
    deco2: '',
  },
  {
    min: 3, max: 4,
    name: 'SEDUCCIÓN PERFECTA',
    quote: 'Lo perfecto te atrae.\nTodavía no aprendiste a desconfiar de ello.',
    theme: 'ac-cold-1',
    deco1: '',
    deco2: '',
  },
  {
    min: 0, max: 2,
    name: 'EL ENCANTADO',
    quote: 'La IA te habló y creíste.\nLo perfecto vacío te sedujo.',
    theme: 'ac-cold-2',
    deco1: '',
    deco2: '',
  },
];

function showArchetypeCard(score) {
  const arch = ARCHETYPES.find(a => score >= a.min && score <= a.max)
             || ARCHETYPES[ARCHETYPES.length - 1];
  const card = document.getElementById('archetypeCard');

  card.className = 'archetype-card ' + arch.theme;

  document.getElementById('acScoreNum').textContent  = score;
  document.getElementById('acArchName').textContent  = arch.name;
  document.getElementById('acArchQuote').textContent = arch.quote;

  const d1 = document.getElementById('acDeco1');
  const d2 = document.getElementById('acDeco2');
  if (arch.deco1) { d1.src = arch.deco1; d1.style.display = 'block'; }
  else            { d1.style.display = 'none'; }
  if (arch.deco2) { d2.src = arch.deco2; d2.style.display = 'block'; }
  else            { d2.style.display = 'none'; }

  document.getElementById('archetypeSection').classList.remove('hidden');
}

document.getElementById('btnDownloadCard').addEventListener('click', () => {
  if (typeof html2canvas === 'undefined') return;
  const btn  = document.getElementById('btnDownloadCard');
  const card = document.getElementById('archetypeCard');
  btn.textContent = 'Descargando…';
  btn.disabled    = true;
  html2canvas(card, { scale: 2, useCORS: true, backgroundColor: null, logging: false })
    .then(canvas => {
      const a  = document.createElement('a');
      a.download = 'mi-arquetipo.png';
      a.href     = canvas.toDataURL('image/png');
      a.click();
    })
    .finally(() => {
      btn.textContent = '↓ Descargar tarjeta';
      btn.disabled    = false;
    });
});

/* ═══════════════════════════════════════════════════════════════════
   REINICIAR
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('btnRestart').addEventListener('click', () => {
  state.level      = 0;
  state.score      = 0;
  state.totalScore = 0;
  state.answers    = new Array(LEVELS[0].images.length).fill(null);
  state.currentIdx = 0;
  clearFocusTimer();
  document.getElementById('archetypeSection').classList.add('hidden');
  showScreen('screen-gallery');
  buildGallery();
});

/* ═══════════════════════════════════════════════════════════════════
   TRANSICIÓN ENTRE NIVELES — botón "Continuar"
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('btnLevelContinue').addEventListener('click', () => {
  state.totalScore += state.score;     // acumular aciertos del nivel completado
  state.level++;
  state.score      = 0;
  state.answers    = new Array(LEVELS[state.level].images.length).fill(null);
  state.currentIdx = 0;
  showScreen('screen-gallery');
  buildGallery();
});

/* ═══════════════════════════════════════════════════════════════════
   OVERLAY — botón "Ver galería"
   ═══════════════════════════════════════════════════════════════════ */
document.getElementById('rovBtnGallery').addEventListener('click', () => {
  closeRevealOverlay(() => {
    clearFocusTimer();
    showScreen('screen-gallery');
    buildGallery();
  });
});

/* ═══════════════════════════════════════════════════════════════════
   LOGO / MARCA DE AGUA → VOLVER AL INICIO
   ═══════════════════════════════════════════════════════════════════ */
function goHome() {
  state.level      = 0;
  state.score      = 0;
  state.totalScore = 0;
  state.answers    = new Array(LEVELS[0].images.length).fill(null);
  state.currentIdx = 0;
  clearFocusTimer();
  document.getElementById('albumScene').classList.remove('is-leaving');
  showScreen('screen-album');
}

const btnLogo = document.getElementById('btnLogo');
btnLogo.addEventListener('click', goHome);
btnLogo.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goHome(); }
});

/* Álbum de recuerdos — cross-dissolve al entrar */
document.getElementById('btnOpenAlbum').addEventListener('click', () => {
  if (prefersReduced) { showScreen('screen-intro'); return; }
  document.getElementById('albumScene').classList.add('is-leaving');
  setTimeout(() => showScreen('screen-intro'), 620);
});


/* ═══════════════════════════════════════════════════════════════════
   REPULSIÓN — fondo del intro empuja objetos con el mouse
   ═══════════════════════════════════════════════════════════════════ */
const REPULSE_R = 175;  // radio de influencia en px
const REPULSE_P = 95;   // desplazamiento máximo en px
const _repulseItems = [];
let   _repulseReady = false;
let   _repulseRAF   = false;
let   _rmx = 0, _rmy = 0;

function _initRepulse() {
  _repulseItems.length = 0;
  document.querySelectorAll('.intro-parallax .prlx-photo, .intro-parallax .prlx-sticker')
    .forEach(el => {
      el.style.transform = '';
      const r      = el.getBoundingClientRect();
      const rot    = (getComputedStyle(el).getPropertyValue('--pr') || '0deg').trim();
      const factor = parseFloat(el.closest('.prlx-layer')?.dataset.factor || '0.02') * 3;
      _repulseItems.push({ el, rot, ox: r.left + r.width / 2, oy: r.top + r.height / 2, factor });
      el.style.transform = `rotate(${rot})`;
    });
  _repulseReady = true;
}

document.addEventListener('mousemove', e => {
  if (prefersReduced || !document.getElementById('screen-intro').classList.contains('active')) return;
  _rmx = e.clientX; _rmy = e.clientY;
  if (!_repulseReady) _initRepulse();
  if (_repulseRAF) return;
  _repulseRAF = true;
  requestAnimationFrame(() => {
    _repulseRAF = false;
    const cx = _rmx - window.innerWidth  / 2;
    const cy = _rmy - window.innerHeight / 2;
    _repulseItems.forEach(it => {
      const dx   = it.ox - _rmx;
      const dy   = it.oy - _rmy;
      const dist = Math.hypot(dx, dy);
      const plx  = cx * it.factor;
      const ply  = cy * it.factor;
      if (dist < REPULSE_R && dist > 1) {
        const s  = (1 - dist / REPULSE_R) ** 1.6;
        const px = (dx / dist) * s * REPULSE_P + plx;
        const py = (dy / dist) * s * REPULSE_P + ply;
        it.el.style.transition = 'transform 0.06s linear';
        it.el.style.transform  = `rotate(${it.rot}) translate(${px.toFixed(1)}px,${py.toFixed(1)}px)`;
      } else {
        it.el.style.transition = 'transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94)';
        it.el.style.transform  = `rotate(${it.rot}) translate(${plx.toFixed(1)}px,${ply.toFixed(1)}px)`;
      }
    });
  });
});


/* ═══════════════════════════════════════════════════════════════════
   LIGHTBOX — zoom interactivo de imagen
   ═══════════════════════════════════════════════════════════════════ */
let _lbScale = 1, _lbDx = 0, _lbDy = 0;
let _lbDragging = false, _lbLX = 0, _lbLY = 0;
let _lbPinchD0 = 0, _lbScale0 = 1;
const _lbTouches = {};

function openLightbox(src) {
  const img = document.getElementById('lbImg');
  img.src = src;
  _lbScale = 1; _lbDx = 0; _lbDy = 0;
  _lbApply();
  document.getElementById('lightbox').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
  document.body.style.overflow = '';
}
function _lbApply() {
  const img = document.getElementById('lbImg');
  img.style.transform = `translate(${_lbDx}px,${_lbDy}px) scale(${_lbScale})`;
  img.style.cursor    = _lbScale > 1 ? 'grab' : 'zoom-in';
}

// Zoom con rueda
document.getElementById('lightbox').addEventListener('wheel', e => {
  e.preventDefault();
  const d = e.deltaY < 0 ? 1.12 : 0.9;
  _lbScale = Math.max(1, Math.min(6, _lbScale * d));
  if (_lbScale === 1) { _lbDx = 0; _lbDy = 0; }
  _lbApply();
}, { passive: false });

// Drag con mouse
const _lbImgEl = document.getElementById('lbImg');
_lbImgEl.addEventListener('mousedown', e => {
  if (_lbScale <= 1) return;
  _lbDragging = true; _lbLX = e.clientX; _lbLY = e.clientY;
  _lbImgEl.style.cursor = 'grabbing';
  e.preventDefault();
});
document.addEventListener('mousemove', e => {
  if (!_lbDragging) return;
  _lbDx += e.clientX - _lbLX; _lbDy += e.clientY - _lbLY;
  _lbLX = e.clientX; _lbLY = e.clientY;
  _lbApply();
});
document.addEventListener('mouseup', () => {
  if (!_lbDragging) return;
  _lbDragging = false; _lbApply();
});

// Pinch + drag táctil
_lbImgEl.addEventListener('touchstart', e => {
  [...e.changedTouches].forEach(t => { _lbTouches[t.identifier] = { x: t.clientX, y: t.clientY }; });
  if (e.touches.length === 2) {
    _lbPinchD0 = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    _lbScale0 = _lbScale;
  }
  e.preventDefault();
}, { passive: false });

_lbImgEl.addEventListener('touchmove', e => {
  if (e.touches.length >= 2) {
    const d = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    _lbScale = Math.max(1, Math.min(6, _lbScale0 * (d / _lbPinchD0)));
    if (_lbScale === 1) { _lbDx = 0; _lbDy = 0; }
  } else if (e.touches.length === 1 && _lbScale > 1) {
    const t    = e.touches[0];
    const prev = _lbTouches[t.identifier] || { x: t.clientX, y: t.clientY };
    _lbDx += t.clientX - prev.x; _lbDy += t.clientY - prev.y;
  }
  [...e.changedTouches].forEach(t => { _lbTouches[t.identifier] = { x: t.clientX, y: t.clientY }; });
  _lbApply();
  e.preventDefault();
}, { passive: false });

_lbImgEl.addEventListener('touchend', e => {
  [...e.changedTouches].forEach(t => { delete _lbTouches[t.identifier]; });
});

// Cerrar
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox') ||
      e.target === document.getElementById('lbImgWrap')) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !document.getElementById('lightbox').classList.contains('hidden'))
    closeLightbox();
});

// Abrir al hacer click en la foto de la pantalla de foco
document.getElementById('stageFrame').addEventListener('click', e => {
  if (e.target.closest('.stage-caption')) return; // no activar desde leyenda
  const bg = document.getElementById('stagePhoto').style.backgroundImage;
  const m  = bg.match(/url\(["']?([^"')]+)["']?\)/);
  if (m && m[1]) openLightbox(m[1]);
});

// Abrir al hacer click en la foto del overlay de revelación
document.getElementById('rovFrame').addEventListener('click', e => {
  if (e.target.closest('.rov-cap')) return;
  const bg = document.getElementById('rovPhoto').style.backgroundImage;
  const m  = bg.match(/url\(["']?([^"')]+)["']?\)/);
  if (m && m[1]) openLightbox(m[1]);
});
