# Plan Maestro de Mejora - dcmsystem.co

## Auditoría Completada: 2026-03-29

---

## DIAGNÓSTICO ACTUAL

### Lo que tiene el sitio hoy (DCM_WebSite/)
- **Stack**: Vite + Vanilla JS + GSAP 3.14.2 + Globe.gl + Three.js + cobe
- **Tema**: Dark sci-fi (#0f172a fondo, #3b82f6 primario, glassmorphism)
- **Tipografía**: Outfit (headings) + Inter (body)
- **Secciones existentes**:
  1. Hero con globo 3D + widgets de telemetría
  2. Arquitectura Enterprise (blueprint animado Docker/Supabase/n8n)
  3. Agentes Inteligentes (chat interactivo con 4 escenarios)
  4. AcademIA (enlace a portal externo)
  5. Footer mínimo (solo CTA WhatsApp)

### Problemas Críticos Detectados
1. **Link roto**: `https://wa.me/co` en footer — no tiene número real
2. **Script duplicado**: `main.js` se importa 2 veces (líneas 686-687)
3. **Nav link huérfano**: "#casos" (Impacto Real) en menú pero la sección NO existe
4. **Footer vacío**: Solo dice "El Futuro es Ahora" + botón WhatsApp roto
5. **Sin formulario de contacto**: Solo depende de WhatsApp
6. **Sin About/Team**: No hay sección de empresa, equipo, o historia
7. **Sin servicios completos**: Solo muestra infra + agentes, falta el resto
8. **Sin testimonios ni métricas**: Cero social proof
9. **Sin casos de éxito**: Sección prometida en nav pero inexistente
10. **Mobile**: Arquitectura blueprint ilegible en pantallas < 768px
11. **SEO Schema**: Usa SoftwareApplication, debería ser Organization + LocalBusiness
12. **Inline styles excesivos**: +60% del HTML son estilos inline

---

## PLAN DE MEJORA — 6 FASES

### FASE 1: Correcciones Críticas (Quick Wins)
> Prioridad: URGENTE — Cosas rotas que dañan credibilidad

- [ ] 1.1 Corregir link WhatsApp con número real de DCM
- [ ] 1.2 Eliminar import duplicado de main.js (línea 687)
- [ ] 1.3 Corregir/eliminar link "#casos" del nav hasta que la sección exista
- [ ] 1.4 Verificar que todas las imágenes (dcm-icon.png, dcm-text.png, dcm-logo-3d.jpg, logo-icon.svg) estén en /public

---

### FASE 2: Secciones Faltantes (Contenido Comercial)
> Prioridad: ALTA — Sin esto no puedes vender

- [ ] 2.1 **Sección "Quiénes Somos"** — Historia, misión, 7+ años, alcance internacional
- [ ] 2.2 **Sección "Servicios Completos"** — Portfolio completo:
  - Desarrollo de Software (Apps, Web, E-commerce)
  - Agentes Autónomos IA (ya existe, enlazar)
  - Automatización RPA
  - Infraestructura Cloud Privada (ya existe, enlazar)
  - Consultoría Tecnológica
  - IoT / BLE / RFID / NFC
  - Seguridad Informática
  - E-learning (AcademIA)
  - SEO & Marketing Digital
- [ ] 2.3 **Sección "Impacto Real" (Casos de Éxito)** — 3-4 casos con:
  - Cliente / Industria
  - Problema
  - Solución DCM
  - Métricas de resultado (%, tiempos, ahorro)
- [ ] 2.4 **Sección "Métricas / Social Proof"** — Contador animado:
  - +7 años de experiencia
  - +XX proyectos entregados
  - +XX clientes activos
  - +XX países alcanzados
- [ ] 2.5 **Sección "Tecnologías / Partners"** — Logos de tech stack:
  - React, Angular, Laravel, Node.js, Python, n8n
  - OpenAI, Anthropic, Google Cloud
  - Supabase, PostgreSQL, Docker
- [ ] 2.6 **Footer Completo** — Rediseñar con:
  - Logo + descripción breve
  - Links de navegación
  - Datos de contacto (email, teléfono, dirección Barranquilla)
  - Redes sociales (LinkedIn, Instagram @dcmcolombia)
  - Formulario de contacto rápido o CTA
  - Copyright + NIT / razón social

---

### FASE 3: SEO Avanzado
> Prioridad: ALTA — Para posicionamiento orgánico

- [ ] 3.1 **Schema.org mejorado**: Cambiar de SoftwareApplication a:
  - Organization (empresa)
  - LocalBusiness (ubicación Barranquilla)
  - Service (por cada servicio)
  - FAQPage (preguntas frecuentes)
- [ ] 3.2 **Sitemap.xml** + robots.txt
- [ ] 3.3 **Alt text completo** en todas las imágenes
- [ ] 3.4 **Jerarquía de headings**: Un solo H1, H2 por sección, H3 por subsección
- [ ] 3.5 **URLs semánticas** si se migra a multi-página
- [ ] 3.6 **Velocidad**:
  - Lazy loading agresivo para secciones below-the-fold
  - Desactivar globo 3D en mobile (reemplazar con imagen estática)
  - Mover inline styles a CSS classes
  - Code splitting si el JS crece
- [ ] 3.7 **Open Graph optimizado**: Imagen OG de 1200x630 (no solo el icono)
- [ ] 3.8 **Hreflang** si se planea versión en inglés
- [ ] 3.9 **Google Analytics 4** + Google Search Console
- [ ] 3.10 **Core Web Vitals**: Target LCP < 2.5s, CLS < 0.1, INP < 200ms

---

### FASE 4: Rediseño Visual (Alineación con agentes.dcmsystem.co)
> Prioridad: MEDIA — Elevar la calidad visual

- [ ] 4.1 **Animaciones GSAP + ScrollTrigger**: Mejorar las existentes:
  - Text reveal con split (palabra por palabra)
  - Parallax en secciones
  - Scale-in para tarjetas de servicios
  - Counters animados para métricas
- [ ] 4.2 **Globo 3D mejorado**:
  - Pinpoints en ubicaciones de clientes/proyectos
  - Arcos de conexión entre Barranquilla y destinos
  - Overlay con texto "Alcance Global"
- [ ] 4.3 **Micro-interacciones**:
  - Hover effects en tarjetas de servicios (glow + lift)
  - Cursor follower sutil
  - Smooth scroll con snap opcional
- [ ] 4.4 **Responsive completo**:
  - Navbar colapsable funcional
  - Blueprint simplificado para mobile (stack vertical)
  - Tamaños de fuente adaptativos (clamp)
  - Touch-friendly cards
- [ ] 4.5 **Nuevos componentes visuales**:
  - Timeline vertical para "Quiénes Somos" (historia)
  - Grid de logos para tecnologías
  - Carousel de testimonios
  - Modal/lightbox para casos de éxito

---

### FASE 5: Conversión y Captación de Leads
> Prioridad: ALTA — El objetivo es VENDER

- [ ] 5.1 **Formulario de contacto funcional**:
  - Nombre, email, empresa, servicio de interés, mensaje
  - Integrar con n8n/email/CRM
- [ ] 5.2 **CTAs estratégicos** por cada sección:
  - Hero: "Solicitar Diagnóstico Gratuito"
  - Servicios: "Ver Detalle" por servicio
  - Casos: "Quiero resultados similares"
  - Footer: "Iniciar Proyecto" + WhatsApp
- [ ] 5.3 **Widget de WhatsApp flotante** (siempre visible)
- [ ] 5.4 **Pop-up o banner de lead magnet**:
  - Whitepaper, caso de estudio descargable, o demo gratuita
- [ ] 5.5 **Página de cada servicio** (evolución a multi-página si el scope lo permite)
- [ ] 5.6 **Booking integration**: Calendly o similar para agendar llamadas

---

### FASE 6: Refinamiento y Lanzamiento
> Prioridad: MEDIA — Polish final

- [ ] 6.1 **Testing cross-browser**: Chrome, Safari, Firefox, Edge
- [ ] 6.2 **Testing mobile**: iOS Safari, Android Chrome
- [ ] 6.3 **Lighthouse audit**: Target 90+ en todas las categorías
- [ ] 6.4 **Accessibility audit**: WCAG 2.1 AA mínimo
- [ ] 6.5 **Deploy optimizado**: Build production + CDN
- [ ] 6.6 **Monitoreo post-launch**: Analytics, heatmaps, form tracking

---

## ARQUITECTURA DE SECCIONES PROPUESTA (Orden Final)

```
1. Navbar (pill glassmorphism - ya existe, mejorar links)
2. Hero (globo 3D + headline + CTA principal)
3. Social Proof Bar (métricas: años, proyectos, clientes, países)
4. Servicios (grid de 6-9 cards con iconos y CTA cada una)
5. Arquitectura Enterprise (blueprint - ya existe)
6. Agentes Inteligentes (chat demo - ya existe)
7. Casos de Éxito / Impacto Real (3-4 cases con métricas)
8. Tecnologías & Partners (logo grid)
9. AcademIA (enlace - ya existe)
10. Quiénes Somos (timeline + equipo)
11. Contacto (formulario + mapa + datos)
12. Footer completo
```

---

## STACK RECOMENDADO

| Componente | Actual | Recomendación |
|---|---|---|
| Bundler | Vite | **Mantener** - excelente para SPA |
| JS | Vanilla + GSAP | **Mantener** - liviano y performante |
| 3D | Globe.gl + Three.js + cobe | **Mantener** con optimización mobile |
| CSS | Vanilla CSS | **Mantener** + migrar inline styles a clases |
| Formularios | Ninguno | **Agregar** integración n8n o Formspree |
| Analytics | Ninguno visible | **Agregar** GA4 + Search Console |
| Deploy | Actual (hosting propio) | **Mantener** o migrar a Vercel/Netlify |

---

## PRIORIDAD DE EJECUCIÓN

```
Semana 1: Fase 1 (Quick Wins) + Fase 2.6 (Footer)
Semana 2: Fase 2.1-2.5 (Secciones faltantes)
Semana 3: Fase 3 (SEO) + Fase 5.1-5.3 (Conversión)
Semana 4: Fase 4 (Rediseño visual + animaciones)
Semana 5: Fase 5.4-5.6 (Lead gen avanzado) + Fase 6 (QA)
```

---

## NOTAS

- El sitio actual ya tiene excelente base visual (dark theme, glassmorphism, animaciones sci-fi)
- El problema NO es el diseño base, sino la FALTA DE CONTENIDO COMERCIAL
- Sin servicios, casos, testimonios y formulario = landing bonita pero que no vende
- La coherencia visual con agentes.dcmsystem.co ya existe (mismo stack GSAP + dark theme)
- Priorizar contenido > diseño en las primeras fases
