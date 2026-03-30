/**
 * DCM Robot AI — Physics-based animated assistant
 *
 * BEHAVIOR:
 * - Follows scroll with spring physics (lags behind, catches up smoothly)
 * - Tilts in direction of movement (like a drone banking)
 * - Thrusters fire when moving (particles + glow intensify)
 * - Eyes track cursor in real-time
 * - Blinks naturally at random intervals
 * - Reacts to sections with expression changes
 * - Chat opens with context-aware messages per section
 * - Idle: gentle floating + occasional head tilts
 * - Moving: thruster boost + lean + speed particles
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { t, getLang } from './i18n.js';

gsap.registerPlugin(ScrollTrigger);

// ===================== ROBOT SVG — Modern Mascot (Helmet + Big Eyes + Clean) =====================
const ROBOT_SVG = `
<svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="robot-body-svg" id="robot-svg">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <!-- Head gradient — smooth metallic -->
    <linearGradient id="headG" x1="0.3" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="#60a5fa"/><stop offset="40%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <!-- Body gradient -->
    <linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1e40af"/>
    </linearGradient>
    <!-- Eye glow -->
    <radialGradient id="eyeG" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#bae6fd"/><stop offset="60%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#0c4a6e"/>
    </radialGradient>
  </defs>

  <!-- Shadow on ground -->
  <ellipse cx="60" cy="156" rx="22" ry="4" fill="#38bdf8" opacity="0.08" id="robot-shadow"/>

  <!-- THRUSTERS -->
  <g id="thruster-group" opacity="0.3">
    <ellipse cx="44" cy="148" rx="5" ry="8" fill="#38bdf8" opacity="0.4">
      <animate attributeName="ry" values="5;14;5" dur="0.3s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="44" cy="148" rx="2.5" ry="5" fill="#bae6fd" opacity="0.6">
      <animate attributeName="ry" values="3;8;3" dur="0.25s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="76" cy="148" rx="5" ry="8" fill="#38bdf8" opacity="0.4">
      <animate attributeName="ry" values="5;14;5" dur="0.3s" repeatCount="indefinite" begin="0.1s"/>
    </ellipse>
    <ellipse cx="76" cy="148" rx="2.5" ry="5" fill="#bae6fd" opacity="0.6">
      <animate attributeName="ry" values="3;8;3" dur="0.25s" repeatCount="indefinite" begin="0.1s"/>
    </ellipse>
  </g>

  <!-- ANTENNA — Simple clean -->
  <line x1="60" y1="8" x2="60" y2="0" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
  <circle cx="60" cy="0" r="4" fill="#60a5fa" filter="url(#glow)">
    <animate attributeName="r" values="3.5;5;3.5" dur="2s" repeatCount="indefinite"/>
  </circle>
  <!-- Signal -->
  <circle cx="60" cy="0" r="7" stroke="#60a5fa" stroke-width="0.5" fill="none" opacity="0.2">
    <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite"/>
  </circle>

  <!-- ===== HEAD — Aerodynamic helmet (taller, tapered top) ===== -->
  <!-- Outer helmet — egg shape: wider at bottom, narrower at top -->
  <path d="M18 48 C18 28 30 8 60 8 C90 8 102 28 102 48 C102 58 88 66 60 66 C32 66 18 58 18 48 Z"
        fill="url(#headG)" stroke="#60a5fa" stroke-width="1.2"/>
  <!-- Specular highlight (top-left light reflection) -->
  <ellipse cx="46" cy="20" rx="20" ry="8" fill="#fff" opacity="0.07"/>
  <ellipse cx="42" cy="16" rx="10" ry="4" fill="#fff" opacity="0.05"/>
  <!-- Aero ridge line -->
  <path d="M30 14 Q60 6 90 14" stroke="#4b7fe8" stroke-width="0.5" fill="none" opacity="0.2"/>

  <!-- ===== FACE — Binocular-style eyes on dark visor ===== -->
  <!-- Visor panel (wide, dark, rounded) -->
  <rect x="26" y="25" width="68" height="34" rx="15" fill="#050a18" stroke="#1e3a8a" stroke-width="0.8"/>
  <rect x="28" y="27" width="64" height="30" rx="13" fill="none" stroke="#1e40af" stroke-width="0.3" opacity="0.2"/>

  <!-- ===== EYES — Binocular lenses connected by bridge ===== -->
  <g id="robot-eyes">
    <!-- Left eye housing (rounded square lens) -->
    <rect x="30" y="30" width="22" height="22" rx="8" fill="#0c1929" stroke="#2563eb" stroke-width="0.8"/>
    <!-- Left lens inner ring -->
    <rect x="32" y="32" width="18" height="18" rx="6" fill="none" stroke="#1e40af" stroke-width="0.4" opacity="0.4"/>
    <!-- Left iris glow -->
    <circle cx="41" cy="41" r="8" fill="url(#eyeG)" opacity="0.8"/>
    <!-- Left iris (follows cursor) -->
    <circle cx="41" cy="41" r="6" fill="#0ea5e9" id="iris-l" filter="url(#softGlow)"/>
    <!-- Left pupil -->
    <circle cx="41" cy="41" r="3" fill="#020617" id="pupil-l"/>
    <!-- Left sparkles -->
    <circle cx="37" cy="37" r="2.5" fill="#fff" opacity="0.85"/>
    <circle cx="43" cy="36" r="1.2" fill="#fff" opacity="0.5"/>

    <!-- Bridge connecting eyes (mechanical crossbar) -->
    <rect x="52" y="38" width="16" height="4" rx="2" fill="#0f172a" stroke="#1e3a8a" stroke-width="0.5"/>
    <line x1="55" y1="40" x2="65" y2="40" stroke="#38bdf8" stroke-width="0.4" opacity="0.3"/>

    <!-- Right eye housing -->
    <rect x="68" y="30" width="22" height="22" rx="8" fill="#0c1929" stroke="#2563eb" stroke-width="0.8"/>
    <rect x="70" y="32" width="18" height="18" rx="6" fill="none" stroke="#1e40af" stroke-width="0.4" opacity="0.4"/>
    <circle cx="79" cy="41" r="8" fill="url(#eyeG)" opacity="0.8"/>
    <circle cx="79" cy="41" r="6" fill="#0ea5e9" id="iris-r" filter="url(#softGlow)"/>
    <circle cx="79" cy="41" r="3" fill="#020617" id="pupil-r"/>
    <circle cx="75" cy="37" r="2.5" fill="#fff" opacity="0.85"/>
    <circle cx="81" cy="36" r="1.2" fill="#fff" opacity="0.5"/>
  </g>

  <!-- ===== MOUTH — Small LED curve below visor ===== -->
  <g id="robot-mouth">
    <path d="M53 58 Q60 62 67 58" stroke="#38bdf8" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5">
      <animate attributeName="d" values="M53 58 Q60 62 67 58;M54 59 Q60 61 66 59;M53 58 Q60 62 67 58" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.65;0.4" dur="5s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- Ear modules (side receivers) -->
  <ellipse cx="19" cy="38" rx="4" ry="6" fill="#1e40af" stroke="#3b82f6" stroke-width="0.7"/>
  <circle cx="19" cy="38" r="1.8" fill="#0ea5e9" opacity="0.35">
    <animate attributeName="opacity" values="0.15;0.5;0.15" dur="3s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="101" cy="38" rx="4" ry="6" fill="#1e40af" stroke="#3b82f6" stroke-width="0.7"/>
  <circle cx="101" cy="38" r="1.8" fill="#0ea5e9" opacity="0.35">
    <animate attributeName="opacity" values="0.15;0.5;0.15" dur="3s" repeatCount="indefinite" begin="1.5s"/>
  </circle>

  <!-- ===== NECK ===== -->
  <rect x="50" y="68" width="20" height="8" rx="4" fill="#1e3a8a" stroke="#2563eb" stroke-width="0.6"/>
  <line x1="56" y1="70" x2="56" y2="74" stroke="#38bdf8" stroke-width="0.5" opacity="0.4"/>
  <line x1="60" y1="69" x2="60" y2="75" stroke="#38bdf8" stroke-width="0.5" opacity="0.6"/>
  <line x1="64" y1="70" x2="64" y2="74" stroke="#38bdf8" stroke-width="0.5" opacity="0.4"/>

  <!-- ===== BODY — Compact rounded ===== -->
  <rect x="32" y="76" width="56" height="46" rx="18" fill="url(#bodyG)" stroke="#60a5fa" stroke-width="1.2"/>
  <!-- Body specular -->
  <rect x="38" y="79" width="44" height="8" rx="4" fill="#fff" opacity="0.04"/>

  <!-- CHEST CORE -->
  <circle cx="60" cy="96" r="9" fill="#0a1628" stroke="#3b82f6" stroke-width="1"/>
  <circle cx="60" cy="96" r="8" stroke="#38bdf8" stroke-width="0.4" fill="none" opacity="0.3" stroke-dasharray="3 2">
    <animateTransform attributeName="transform" type="rotate" from="0 60 96" to="360 60 96" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="60" cy="96" r="5.5" fill="#38bdf8" id="chest-core" filter="url(#softGlow)">
    <animate attributeName="r" values="5;6.5;5" dur="1.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/>
  </circle>

  <!-- Body status LEDs -->
  <circle cx="42" cy="106" r="1.5" fill="#22c55e" opacity="0.5">
    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="78" cy="106" r="1.5" fill="#22c55e" opacity="0.5">
    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" begin="1s"/>
  </circle>

  <!-- ===== ARMS — Smooth drop/petal shape (EVA-inspired) ===== -->
  <g id="arm-l">
    <!-- Left arm — single smooth teardrop flowing from shoulder down and outward -->
    <path d="M32 84 C26 82 18 86 14 94 C10 102 12 112 16 116 C19 118 22 116 24 110 C26 104 30 94 32 88 Z"
          fill="#2563eb" stroke="#60a5fa" stroke-width="0.8"/>
    <!-- Arm highlight for volume -->
    <path d="M30 86 C26 86 22 90 19 96 C17 101 17 106 18 110"
          stroke="#fff" stroke-width="1" fill="none" opacity="0.06" stroke-linecap="round"/>
  </g>
  <g id="arm-r">
    <!-- Right arm — mirror -->
    <path d="M88 84 C94 82 102 86 106 94 C110 102 108 112 104 116 C101 118 98 116 96 110 C94 104 90 94 88 88 Z"
          fill="#2563eb" stroke="#60a5fa" stroke-width="0.8"/>
    <path d="M90 86 C94 86 98 90 101 96 C103 101 103 106 102 110"
          stroke="#fff" stroke-width="1" fill="none" opacity="0.06" stroke-linecap="round"/>
  </g>

  <!-- ===== FEET — Small rounded boots ===== -->
  <ellipse cx="44" cy="128" rx="10" ry="7" fill="#1e40af" stroke="#60a5fa" stroke-width="0.8"/>
  <ellipse cx="76" cy="128" rx="10" ry="7" fill="#1e40af" stroke="#60a5fa" stroke-width="0.8"/>
  <!-- Foot highlights -->
  <ellipse cx="44" cy="126" rx="6" ry="3" fill="#fff" opacity="0.04"/>
  <ellipse cx="76" cy="126" rx="6" ry="3" fill="#fff" opacity="0.04"/>
</svg>
`;

// ===================== SECTION CONTEXT =====================
const sectionContext = {
    hero: { expr: 'excited', es: 'Bienvenido! Soy el asistente de DCM System. Llevamos +12 años transformando empresas. Quieres que te muestre algo?', en: 'Welcome! I\'m DCM System\'s assistant. 12+ years transforming businesses. Want me to show you something?',
        opts: [{ es: 'Ver servicios', en: 'See services', act: 'scroll', to: '#servicios' }, { es: 'Agendar reunion', en: 'Book a meeting', act: 'url', to: 'https://cal.com/dcmsystem' }] },
    servicios: { expr: 'thinking', es: '10 soluciones enterprise: IA, agentes, RPA, desarrollo, seguridad... Cual te interesa?', en: '10 enterprise solutions: AI, agents, RPA, development, security... Which interests you?',
        opts: [{ es: 'IA y Agentes', en: 'AI & Agents', act: 'scroll', to: '#demo' }, { es: 'Quiero cotizar', en: 'Get a quote', act: 'scroll', to: '#contacto' }] },
    demo: { expr: 'happy', es: 'Prueba nuestros agentes en accion! Cada uno resuelve problemas reales de negocio 24/7.', en: 'Try our agents in action! Each one solves real business problems 24/7.',
        opts: [{ es: 'Quiero mi agente', en: 'I want my agent', act: 'url', to: 'https://agentes.dcmsystem.co' }, { es: 'Agendar demo', en: 'Schedule demo', act: 'url', to: 'https://cal.com/dcmsystem' }] },
    impacto: { expr: 'proud', es: '40% menos tiempos operativos. Proyectos como Cannon (Colombia y Las Vegas) y ZUTRICS-PROCAPS en producción!', en: '40% less operational time. Projects like Cannon (Colombia & Las Vegas) and ZUTRICS-PROCAPS live in production!',
        opts: [{ es: 'Quiero resultados asi', en: 'I want results like these', act: 'scroll', to: '#contacto' }] },
    contacto: { expr: 'listening', es: 'Excelente! Llena el formulario o agendemos una videollamada.', en: 'Great! Fill the form or let\'s schedule a video call.',
        opts: [{ es: 'Videollamada', en: 'Video call', act: 'url', to: 'https://cal.com/dcmsystem' }, { es: 'WhatsApp', en: 'WhatsApp', act: 'url', to: 'https://wa.me/573013685757' }] }
};

// ===================== PHYSICS STATE =====================
let targetY = 0;          // Where the robot SHOULD be (based on scroll)
let currentY = 0;         // Where the robot IS (smoothed)
let velocityY = 0;        // Current velocity (for tilt calculation)
let prevScrollY = 0;      // Previous scroll position
let scrollVelocity = 0;   // How fast user is scrolling
let mouseX = 0, mouseY = 0;
let robotEl = null;
let chatOpen = false;
let currentSection = 'hero';
let isMoving = false;

// ===================== INIT =====================
export function initRobot() {
    if (window.innerWidth < 768) return;
    createDOM();
    robotEl = document.getElementById('dcm-robot');
    if (!robotEl) return;

    // Position robot initially
    currentY = window.innerHeight / 2 - 60;
    targetY = currentY;
    robotEl.style.top = currentY + 'px';

    startPhysicsLoop();
    trackEyes();
    trackSections();
    setupChat();

    // Auto-greeting after 5s
    setTimeout(() => {
        if (!chatOpen) showTooltip(getLang() === 'en' ? 'Hey! Click me!' : 'Hey! Hazme click!');
        // Little excited bounce
        gsap.to(robotEl, { y: '-=20', duration: 0.2, yoyo: true, repeat: 5, ease: 'sine.inOut' });
    }, 5000);
}

// ===================== PHYSICS LOOP — Fluid & Innovative =====================
let time = 0;
let horizontalWave = 0;
let breathScale = 1;

function startPhysicsLoop() {
    window.addEventListener('scroll', () => {
        scrollVelocity = window.scrollY - prevScrollY;
        prevScrollY = window.scrollY;
    }, { passive: true });

    function tick() {
        time += 0.016; // ~60fps delta

        // Target: viewport center with gentle vertical offset
        targetY = window.scrollY + window.innerHeight * 0.45;

        // Softer spring with more elasticity (bouncy, playful)
        const springK = 0.03;   // softer spring = more lag = more fluid
        const dampingK = 0.82;  // less damping = more bounce
        const springForce = (targetY - currentY) * springK;
        velocityY = (velocityY + springForce) * dampingK;
        currentY += velocityY;

        const speed = Math.abs(velocityY);

        if (robotEl) {
            const viewportY = currentY - window.scrollY;
            robotEl.style.top = viewportY + 'px';

            // --- HORIZONTAL WAVE (figure-8 idle drift) ---
            const idleDrift = Math.sin(time * 0.5) * 4 + Math.sin(time * 0.8) * 2;
            horizontalWave = speed > 2 ? horizontalWave * 0.9 : idleDrift; // dampen wave when moving fast
            robotEl.style.left = (20 + horizontalWave) + 'px';

            // --- TILT (gentle, max ±10deg for friendly look) ---
            const tilt = Math.max(-10, Math.min(10, velocityY * -0.8));

            // --- SQUASH & STRETCH (Pixar-style) ---
            const squashX = 1 + speed * 0.008;  // wider when moving fast
            const squashY = 1 - speed * 0.006;  // shorter when moving fast
            // When idle: gentle breathing
            breathScale = 1 + Math.sin(time * 1.2) * 0.015;

            const svgEl = robotEl.querySelector('.robot-body-svg');
            if (svgEl) {
                const sx = speed > 1 ? squashX : breathScale;
                const sy = speed > 1 ? squashY : (2 - breathScale); // inverse for breathing
                svgEl.style.transform = `rotate(${tilt}deg) scaleX(${sx.toFixed(3)}) scaleY(${sy.toFixed(3)})`;
            }

            // --- THRUSTERS (intensity + color shift) ---
            const thrusterGroup = document.getElementById('thruster-group');
            if (thrusterGroup) {
                const intensity = Math.min(1, speed / 4);
                thrusterGroup.style.opacity = (0.15 + intensity * 0.85).toFixed(2);
            }

            // --- SHADOW ---
            const shadow = document.getElementById('robot-shadow');
            if (shadow) {
                const ss = Math.max(0.4, 1 - speed / 15);
                shadow.setAttribute('rx', (20 * ss).toFixed(1));
                shadow.setAttribute('opacity', (0.1 * ss).toFixed(3));
            }

            // --- BOOST STATE ---
            const wasMoving = isMoving;
            isMoving = speed > 1.2;
            if (isMoving && !wasMoving) robotEl.classList.add('boosting');
            else if (!isMoving && wasMoving) robotEl.classList.remove('boosting');

            // --- THRUSTER PARTICLES + SMOKE ---
            // Always emit light particles (idle propulsion)
            if (Math.random() > 0.7) spawnThrusterParticle();
            // Extra particles when moving fast
            if (speed > 1.5 && Math.random() > 0.3) spawnThrusterParticle();
            if (speed > 3 && Math.random() > 0.4) spawnThrusterParticle();

            // --- ARM ANIMATIONS (life-like gestures) ---
            animateArms(time, speed);
        }

        requestAnimationFrame(tick);
    }
    tick();
}

// ===================== ARM ANIMATION SYSTEM =====================
let lastGesture = 0;
let gestureIndex = 0;

function animateArms(time, speed) {
    // Idle arm sway (subtle, always running)
    const armL = document.getElementById('arm-l');
    const armR = document.getElementById('arm-r');
    if (!armL || !armR) return;

    // Gentle idle sway synced with breathing
    const idleSway = Math.sin(time * 1.2) * 3;
    armL.style.transform = `rotate(${idleSway}deg)`;
    armL.style.transformOrigin = '30px 86px';

    // Right arm: idle counter-sway unless doing a gesture
    if (time - lastGesture > 2) {
        armR.style.transform = `rotate(${-idleSway * 0.8}deg)`;
        armR.style.transformOrigin = '90px 86px';
    }

    // Gesture triggers
    const gestureCooldown = chatOpen ? 8 : 12; // more frequent when chat closed
    if (time - lastGesture > gestureCooldown && !isMoving) {
        lastGesture = time;
        gestureIndex = (gestureIndex + 1) % 4;
        performGesture(gestureIndex);
    }

    // When moving fast, arms trail back
    if (speed > 3) {
        gsap.set('#arm-l', { rotation: speed * 2, transformOrigin: '30px 86px' });
        gsap.set('#arm-r', { rotation: -speed * 2, transformOrigin: '90px 86px' });
    }
}

function performGesture(index) {
    const gestures = [
        // 0: Friendly wave (hello!)
        () => {
            gsap.timeline()
                .to('#arm-r', { rotation: -45, transformOrigin: '90px 86px', duration: 0.25, ease: 'back.out(2)' })
                .to('#arm-r', { rotation: -30, duration: 0.12, yoyo: true, repeat: 5, ease: 'sine.inOut' })
                .to('#arm-r', { rotation: 0, duration: 0.3, ease: 'power2.inOut' });
        },
        // 1: Beckoning "come here" gesture
        () => {
            gsap.timeline()
                .to('#arm-r', { rotation: -35, transformOrigin: '90px 86px', duration: 0.2, ease: 'power2.out' })
                .to('#arm-r', { rotation: -20, duration: 0.15, ease: 'power2.in' })
                .to('#arm-r', { rotation: -35, duration: 0.15, ease: 'power2.out' })
                .to('#arm-r', { rotation: -20, duration: 0.15, ease: 'power2.in' })
                .to('#arm-r', { rotation: -35, duration: 0.15, ease: 'power2.out' })
                .to('#arm-r', { rotation: 0, duration: 0.3, ease: 'power2.inOut' });
        },
        // 2: Both arms excited (like celebrating)
        () => {
            gsap.timeline()
                .to('#arm-l', { rotation: 30, transformOrigin: '30px 86px', duration: 0.2, ease: 'back.out(2)' }, 0)
                .to('#arm-r', { rotation: -30, transformOrigin: '90px 86px', duration: 0.2, ease: 'back.out(2)' }, 0)
                .to('#arm-l', { rotation: 20, duration: 0.1, yoyo: true, repeat: 3 }, 0.25)
                .to('#arm-r', { rotation: -20, duration: 0.1, yoyo: true, repeat: 3 }, 0.25)
                .to('#arm-l', { rotation: 0, duration: 0.3, ease: 'power2.inOut' })
                .to('#arm-r', { rotation: 0, duration: 0.3, ease: 'power2.inOut' }, '<');
        },
        // 3: Point up (like saying "look at this!")
        () => {
            gsap.timeline()
                .to('#arm-r', { rotation: -60, transformOrigin: '90px 86px', duration: 0.3, ease: 'back.out(1.5)' })
                .to('#arm-r', { rotation: -55, duration: 0.15, yoyo: true, repeat: 1 })
                .to('#arm-r', { rotation: -60, duration: 0.5 }) // hold
                .to('#arm-r', { rotation: 0, duration: 0.4, ease: 'power2.inOut' });
        },
    ];

    gestures[index]();

    // Show tooltip with gesture on wave/beckon if chat is closed
    if (!chatOpen && (index === 0 || index === 1)) {
        const tips = getLang() === 'en'
            ? ['Hey! Click me!', 'Need help?', 'I can guide you!', 'Let\'s talk!']
            : ['Hey! Hazme click!', 'Necesitas ayuda?', 'Te puedo guiar!', 'Hablemos!'];
        setTimeout(() => showTooltip(tips[Math.floor(Math.random() * tips.length)]), 300);
    }
}

// ===================== THRUSTER PARTICLES + SMOKE =====================
function spawnThrusterParticle() {
    const container = document.getElementById('robot-particles');
    if (!container) return;

    // Spark particle (bright, small, fast)
    const spark = document.createElement('div');
    spark.className = 'thruster-spark';
    const side = Math.random() > 0.5 ? 22 : 48;
    spark.style.left = side + 'px';
    spark.style.top = '90px';
    container.appendChild(spark);

    gsap.to(spark, {
        y: 20 + Math.random() * 30,
        x: (Math.random() - 0.5) * 15,
        opacity: 0,
        scale: 0,
        duration: 0.4 + Math.random() * 0.2,
        ease: 'power2.out',
        onComplete: () => spark.remove()
    });

    // Smoke puff (larger, slower, fades out — appears when moving)
    const smoke = document.createElement('div');
    smoke.className = 'thruster-smoke';
    smoke.style.left = (side + (Math.random() - 0.5) * 10) + 'px';
    smoke.style.top = '92px';
    container.appendChild(smoke);

    gsap.fromTo(smoke,
        { scale: 0.3, opacity: 0.5 },
        {
            y: 25 + Math.random() * 35,
            x: (Math.random() - 0.5) * 25,
            scale: 1.5 + Math.random(),
            opacity: 0,
            duration: 0.8 + Math.random() * 0.5,
            ease: 'power1.out',
            onComplete: () => smoke.remove()
        }
    );
}

// ===================== EYE TRACKING =====================
function trackEyes() {
    document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });

    function updateEyes() {
        if (!robotEl) { requestAnimationFrame(updateEyes); return; }
        const rect = robotEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height * 0.28; // eye center area
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(Math.sqrt(dx * dx + dy * dy) / 180, 1);
        const mx = Math.cos(angle) * dist * 3.5;  // bigger range for bigger eyes
        const my = Math.sin(angle) * dist * 3;

        ['l', 'r'].forEach(s => {
            const baseX = s === 'l' ? 41 : 79;
            const baseY = 41;
            // Clamp movement to stay inside the eye housing (max 3px in any direction)
            const clampedMx = Math.max(-3, Math.min(3, mx * 1.2));
            const clampedMy = Math.max(-3, Math.min(3, my * 1.0));
            const iris = document.getElementById('iris-' + s);
            const pupil = document.getElementById('pupil-' + s);
            if (iris) { iris.setAttribute('cx', baseX + clampedMx); iris.setAttribute('cy', baseY + clampedMy); }
            if (pupil) { pupil.setAttribute('cx', baseX + clampedMx); pupil.setAttribute('cy', baseY + clampedMy); }
        });
        requestAnimationFrame(updateEyes);
    }
    updateEyes();

    // Natural blink at random intervals
    function blink() {
        const eyes = document.getElementById('robot-eyes');
        if (eyes) {
            gsap.killTweensOf(eyes, 'scaleY');
            gsap.to(eyes, {
                scaleY: 0.08,
                transformOrigin: 'center 42px',
                duration: 0.06,
                yoyo: true,
                repeat: 1,
                onComplete: () => gsap.set(eyes, { scaleY: 1, transformOrigin: 'center 42px' })
            });
        }
        setTimeout(blink, 3000 + Math.random() * 4000);
    }
    setTimeout(blink, 2000);

    // Recover eyes if tab was backgrounded and blink got stuck
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            const eyes = document.getElementById('robot-eyes');
            if (eyes) gsap.set(eyes, { scaleY: 1, transformOrigin: 'center 42px' });
        }
    });
}

// ===================== SECTION TRACKING =====================
function trackSections() {
    ['hero', 'servicios', 'demo', 'impacto', 'contacto'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        ScrollTrigger.create({
            trigger: el, start: 'top 60%', end: 'bottom 40%',
            onEnter: () => changeSection(id),
            onEnterBack: () => changeSection(id),
        });
    });
}

function changeSection(id) {
    if (currentSection === id) return;
    currentSection = id;
    const ctx = sectionContext[id];
    if (!ctx || !robotEl) return;

    robotEl.setAttribute('data-expression', ctx.expr);

    // Excited bounce on section change
    gsap.to(robotEl, {
        scale: 1.15, duration: 0.15,
        onComplete: () => gsap.to(robotEl, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' })
    });

    if (chatOpen) showContextChat(id);
}

// ===================== CHAT =====================
function setupChat() {
    robotEl?.addEventListener('click', (e) => {
        if (e.target.closest('.robot-chat')) return;
        toggleChat();
    });
    document.getElementById('robot-chat-close')?.addEventListener('click', (e) => {
        e.stopPropagation(); toggleChat();
    });
    document.getElementById('robot-chat')?.addEventListener('click', e => e.stopPropagation());
    document.addEventListener('click', e => { if (chatOpen && !e.target.closest('.dcm-robot')) toggleChat(); });
}

function toggleChat() {
    const chat = document.getElementById('robot-chat');
    const tooltip = document.getElementById('robot-tooltip');
    if (!chat) return;
    chatOpen = !chatOpen;
    chat.classList.toggle('open', chatOpen);
    if (tooltip) tooltip.classList.remove('show');
    if (chatOpen) {
        showContextChat(currentSection);
        gsap.fromTo(chat, { opacity: 0, y: 10, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(2)' });
    }
}

function showContextChat(sectionId) {
    const ctx = sectionContext[sectionId] || sectionContext.hero;
    const msgs = document.getElementById('robot-messages');
    const opts = document.getElementById('robot-options');
    if (!msgs || !opts) return;
    const lang = getLang();

    msgs.innerHTML = '';
    opts.innerHTML = '';

    const m = document.createElement('div');
    m.className = 'robot-msg';
    m.textContent = lang === 'en' ? ctx.en : ctx.es;
    msgs.appendChild(m);

    setTimeout(() => {
        (ctx.opts || []).forEach(o => {
            const btn = document.createElement('button');
            btn.className = 'robot-opt';
            btn.textContent = lang === 'en' ? o.en : o.es;
            btn.addEventListener('click', () => {
                if (o.act === 'scroll') {
                    const target = document.querySelector(o.to);
                    if (target) {
                        const offset = 110;
                        const top = target.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                    setTimeout(toggleChat, 800);
                }
                else if (o.act === 'url') { window.open(o.to, '_blank'); }
            });
            opts.appendChild(btn);
        });
    }, 300);
}

function showTooltip(text) {
    const tt = document.getElementById('robot-tooltip');
    if (!tt || chatOpen) return;
    tt.textContent = text;
    tt.classList.add('show');
    setTimeout(() => tt.classList.remove('show'), 4000);
}

// ===================== DOM CREATION =====================
function createDOM() {
    const el = document.createElement('div');
    el.id = 'dcm-robot';
    el.className = 'dcm-robot';
    el.innerHTML = `
        <div class="robot-particles" id="robot-particles"></div>
        ${ROBOT_SVG}
        <div class="robot-chat" id="robot-chat">
            <div class="robot-chat-header">
                <div class="robot-chat-indicator"></div>
                <span>DCM AI Assistant</span>
                <button class="robot-chat-close" id="robot-chat-close">&times;</button>
            </div>
            <div class="robot-chat-messages" id="robot-messages"></div>
            <div class="robot-chat-options" id="robot-options"></div>
        </div>
        <div class="robot-tooltip" id="robot-tooltip"></div>
    `;
    document.body.appendChild(el);
    injectStyles();
}

function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
    .dcm-robot {
        position: fixed;
        left: 20px;
        top: 50%;
        width: 70px;
        height: 100px;
        z-index: 998;
        cursor: pointer;
        filter: drop-shadow(0 0 15px rgba(14,165,233,0.35)) drop-shadow(0 0 30px rgba(59,130,246,0.15));
        transition: filter 0.3s ease;
    }
    .dcm-robot:hover {
        filter: drop-shadow(0 0 25px rgba(14,165,233,0.6)) drop-shadow(0 0 50px rgba(59,130,246,0.3));
    }
    .dcm-robot.boosting {
        filter: drop-shadow(0 0 20px rgba(14,165,233,0.7)) drop-shadow(0 0 40px rgba(59,130,246,0.4));
    }
    .robot-body-svg {
        width: 100%;
        height: 100%;
        transition: transform 0.15s ease-out;
        transform-origin: center 60%;
    }
    .robot-particles {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none;
        overflow: visible;
    }
    .thruster-spark {
        position: absolute;
        width: 3px; height: 3px;
        background: #7dd3fc;
        border-radius: 50%;
        box-shadow: 0 0 6px #38bdf8, 0 0 12px #0ea5e9;
        pointer-events: none;
    }
    .thruster-smoke {
        position: absolute;
        width: 8px; height: 8px;
        background: radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0.05) 50%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        filter: blur(2px);
    }
    /* Circuit pulse */
    .circuit { animation: cPulse 3s ease-in-out infinite; }
    .circuit:nth-child(2n) { animation-delay: 0.7s; }
    @keyframes cPulse { 0%,100% { opacity: 0.15; } 50% { opacity: 0.7; } }

    /* Expression colors */
    .dcm-robot[data-expression="happy"] #robot-mouth { fill: #22c55e; }
    .dcm-robot[data-expression="excited"] #robot-mouth { fill: #f59e0b; }
    .dcm-robot[data-expression="thinking"] #robot-mouth { fill: #a855f7; }
    .dcm-robot[data-expression="listening"] #robot-mouth { fill: #3b82f6; }
    .dcm-robot[data-expression="proud"] #robot-mouth { fill: #22c55e; }
    .dcm-robot[data-expression="proud"] #chest-core { fill: #22c55e; }
    .dcm-robot[data-expression="excited"] #chest-core { fill: #f59e0b; }

    /* Chat */
    .robot-chat {
        position: absolute;
        bottom: 110px; left: 0; width: 310px;
        background: rgba(10,14,26,0.95);
        backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(14,165,233,0.25);
        border-radius: 16px;
        display: none; flex-direction: column;
        box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(14,165,233,0.08);
        overflow: hidden;
    }
    .robot-chat.open { display: flex; }
    .robot-chat-header {
        display: flex; align-items: center; gap: 8px;
        padding: 10px 14px;
        background: rgba(30,58,138,0.25);
        border-bottom: 1px solid rgba(14,165,233,0.12);
        font-size: 0.8rem; font-weight: 600; color: #e2e8f0;
        font-family: 'Inter', sans-serif;
    }
    .robot-chat-indicator {
        width: 7px; height: 7px; border-radius: 50%;
        background: #22c55e; box-shadow: 0 0 6px #22c55e;
    }
    .robot-chat-close {
        margin-left: auto; background: none; border: none;
        color: #64748b; font-size: 1.1rem; cursor: pointer;
    }
    .robot-chat-close:hover { color: #fff; }
    .robot-chat-messages {
        padding: 10px 14px; max-height: 160px; overflow-y: auto;
        display: flex; flex-direction: column; gap: 6px;
    }
    .robot-msg {
        font-size: 0.78rem; color: #cbd5e1; line-height: 1.5;
        padding: 8px 12px;
        background: rgba(59,130,246,0.07);
        border-radius: 10px;
        border: 1px solid rgba(59,130,246,0.1);
        animation: rIn 0.35s cubic-bezier(0.16,1,0.3,1);
        font-family: 'Inter', sans-serif;
    }
    @keyframes rIn { from { opacity:0; transform: translateY(6px) scale(0.95); } to { opacity:1; transform: none; } }
    .robot-chat-options { padding: 6px 14px 12px; display: flex; flex-direction: column; gap: 5px; }
    .robot-opt {
        padding: 7px 12px;
        background: rgba(14,165,233,0.06);
        border: 1px solid rgba(14,165,233,0.2);
        border-radius: 8px;
        color: #38bdf8; font-size: 0.73rem; font-weight: 600;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        text-align: left; font-family: 'Inter', sans-serif;
    }
    .robot-opt:hover {
        background: rgba(14,165,233,0.15);
        border-color: #0ea5e9;
        transform: translateX(5px);
        box-shadow: 0 0 12px rgba(14,165,233,0.12);
    }
    .robot-tooltip {
        position: absolute; bottom: 105px; left: 75px;
        background: rgba(10,14,26,0.9);
        border: 1px solid rgba(14,165,233,0.25);
        border-radius: 8px;
        padding: 6px 12px;
        font-size: 0.7rem; color: #94a3b8;
        white-space: nowrap;
        display: none;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    }
    .robot-tooltip.show { display: block; animation: rIn 0.3s ease-out; }

    @media (prefers-reduced-motion: reduce) {
        .dcm-robot, .robot-body-svg, .thruster-spark { animation: none !important; transition: none !important; }
    }
    `;
    document.head.appendChild(s);
}
