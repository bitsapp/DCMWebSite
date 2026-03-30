# DCM System — Sitio Web Corporativo

Sitio web principal de [DCM System SAS](https://dcmsystem.co), empresa B2B de tecnología con más de 20 años transformando operaciones críticas con IA, automatización RPA y desarrollo de software enterprise.

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Bundler | Vite 6 + `vite-plugin-singlefile` |
| JS | Vanilla ES Modules + GSAP 3.14 |
| 3D / Globe | Globe.gl + Three.js + cobe |
| Animaciones | GSAP ScrollTrigger |
| Fuentes | Outfit · Inter · JetBrains Mono (Google Fonts) |
| Iconos | Font Awesome 6 |
| Formulario | Telegram Bot API |
| Output | HTML autocontenido (~2MB) |

## Estructura del Proyecto

```
portada/
├── src/
│   ├── main.js          # Orquestador principal
│   ├── style.css        # Estilos globales
│   ├── animations.js    # GSAP ScrollTrigger
│   ├── globe.js         # Globo 3D interactivo
│   ├── particles.js     # Canvas de partículas
│   ├── navigation.js    # Navbar + hamburger
│   ├── services.js      # Panel de detalle de servicios
│   ├── counter.js       # Contadores animados
│   ├── terminal.js      # Simulador de logs
│   ├── contact.js       # Formulario → Telegram
│   ├── i18n.js          # Internacionalización ES/EN
│   ├── robot.js         # Widget robot flotante
│   └── security.js      # Hardening básico
├── public/
│   ├── dcm-icon.png
│   ├── dcm-logo-white.png
│   ├── dcm-text.png
│   ├── proposal.png
│   ├── robots.txt
│   └── sitemap.xml
├── dist/                # Build de producción (singlefile)
├── index.html           # Fuente principal (10 secciones)
├── vite.config.js
└── package.json
```

## Secciones del Sitio

1. **Hero** — Globo 3D + headline + telemetría animada
2. **Social Proof** — Contadores: 20+ años, 150+ proyectos, 50+ clientes, 8 países
3. **Servicios** — Grid de 10 servicios con panel de detalle interactivo
4. **Demo en Vivo** — Chat simulado con 4 escenarios de agentes IA
5. **Chatbots en Producción** — Casos reales: Cannon, JUDAH AI, Bitfin CFO
6. **Arquitectura Enterprise** — Terminal de logs en tiempo real
7. **Impacto Real** — Métricas SVG animadas + proyectos destacados
8. **Industrias** — 6 sectores con hover effects
9. **Tecnologías** — Marquee infinito del tech stack
10. **AcademIA** — CTA a portal dedicado
11. **Contacto** — Formulario funcional + datos de contacto
12. **Footer** — Links, redes sociales, copyright

## Desarrollo Local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build de Producción

```bash
npm run build
```

Genera `dist/index.html` como archivo único autocontenido con todo el JS y CSS inlinado. Subir todo el contenido de `dist/` al `public_html` del servidor.

## Deploy en cPanel

1. Ejecutar `npm run build`
2. Subir **todo** el contenido de `dist/` al directorio `public_html` vía File Manager o FTP
3. Verificar que `dcm-icon.png` y demás assets estén en la raíz junto al `index.html`

## Internacionalización

El sitio soporta español (ES) e inglés (EN) con toggle en el navbar. Las traducciones están en `src/i18n.js`.

## Formulario de Contacto

Los leads del formulario se envían en tiempo real al chat de Telegram de DCM System via Telegram Bot API con el siguiente formato:

```
🚀 Nuevo Lead — dcmsystem.co

👤 Nombre: ...
📧 Email: ...
🏢 Empresa: ...
🎯 Servicio: ...
💬 Mensaje: ...

🕐 [fecha/hora Colombia]
```

## Contacto

- **Web:** https://dcmsystem.co
- **Email:** ventas@dcmsystem.co
- **WhatsApp:** +57 301 368 5757
- **Instagram:** [@dcmsystem](https://instagram.com/dcmsystem)
- **Sede:** Barranquilla, Atlántico, Colombia
