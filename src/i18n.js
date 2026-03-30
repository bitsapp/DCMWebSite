/**
 * i18n — Bilingual ES/EN system
 * Uses data-i18n attributes in HTML
 */

const translations = {
    es: {
        // Nav
        "nav.services": "Servicios",
        "nav.demo": "Demo en Vivo",
        "nav.impact": "Impacto Real",
        "nav.agents": "Agentes IA",
        "nav.cta": "Iniciar Proyecto",

        // Hero
        "hero.line1": "Agentes IA y Automatización para",
        "hero.line2": "Operaciones Críticas",
        "hero.subtitle": "Más de 20 años construyendo tecnología que genera resultados reales: Agentes Autónomos IA, automatización RPA con n8n e integraciones profundas a tu ERP. Escala la rentabilidad de tu empresa.",
        "hero.cta": "Descubrir Soluciones",
        "hero.cta2": "Ver Demo en Vivo",

        // Social Proof
        "proof.years": "Años de Experiencia",
        "proof.projects": "Proyectos Entregados",
        "proof.clients": "Clientes Activos",
        "proof.countries": "Países",

        // Services
        "services.badge": "Soluciones Enterprise",
        "services.title": "Todo lo que tu empresa necesita para evolucionar",
        "services.desc": "Desde desarrollo a medida hasta inteligencia artificial avanzada. Cada solución, diseñada para impactar tus resultados.",
        "services.cta": "Solicitar Información",
        "svc.dev.title": "Desarrollo a Medida",
        "svc.dev.short": "Fábrica de software con tecnologías modernas para apps, web y e-commerce.",
        "svc.maint.title": "Software de Mantenimiento",
        "svc.maint.short": "Gestión de órdenes de servicio, activos y mantenimiento preventivo.",
        "svc.ai.title": "IA Avanzada Industrial",
        "svc.ai.short": "Inteligencia artificial aplicada a procesos críticos y análisis predictivo.",
        "svc.agents.title": "Agentes Inteligentes",
        "svc.agents.short": "Clones digitales que venden, agendan, cobran y atienden 24/7.",
        "svc.rpa.title": "Automatización RPA",
        "svc.rpa.short": "Flujos automatizados con Make y n8n que eliminan tareas repetitivas.",
        "svc.security.title": "Seguridad Ciudadana",
        "svc.security.short": "CCTV con IA, monitoreo inteligente y respuesta automatizada ante emergencias.",
        "svc.iot.title": "IoT / BLE / RFID",
        "svc.iot.short": "Sensores, rastreo y control de procesos con tecnología de proximidad.",
        "svc.integration.title": "Integración de Sistemas",
        "svc.integration.short": "Conectamos tu ERP, CRM y plataformas en un ecosistema unificado.",
        "svc.analytics.title": "Analítica y Smart Cities",
        "svc.analytics.short": "Dashboards predictivos, KPIs en tiempo real y ciudades inteligentes.",
        "svc.academy.title": "Capacitación en IA",
        "svc.academy.short": "Programas de formación empresarial en inteligencia artificial y automatización.",

        // Demo
        "demo.badge": "Demo Interactivo",
        "demo.title": "Experimenta el Poder de los Agentes IA",
        "demo.desc": "Selecciona un escenario y observa cómo nuestros agentes resuelven situaciones reales de negocio en tiempo real.",
        "demo.sales.title": "Arquitecto de Ventas",
        "demo.sales.desc": "Califica leads B2B y genera cotizaciones.",
        "demo.schedule.title": "Sincronizador SDR",
        "demo.schedule.desc": "Agenda reuniones con prospectos.",
        "demo.billing.title": "Motor de Cobranza",
        "demo.billing.desc": "Negocia plazos y genera links de pago.",
        "demo.hr.title": "Núcleo HR",
        "demo.hr.desc": "Onboarding y soporte IT automatizado.",
        "demo.online": "En línea",
        "demo.welcome": "¡Hola! Selecciona un escenario para ver al Agente en acción.",
        "demo.placeholder": "Escribe un mensaje...",
        "demo.cta": "Conocer Todos los Agentes",

        // Architecture
        "arch.badge": "Arquitectura Enterprise",
        "arch.title": "Soberanía de Datos e IA Privada",
        "arch.desc": "Diseñamos, desplegamos y gestionamos Arquitecturas de Clústeres Dedicados con bases de datos, automatización RPA y motores de IA en tu propia infraestructura.",

        // Impact
        "impact.badge": "Resultados Comprobados",
        "impact.title": "Impacto Real en Números",
        "impact.ops": "Reducción en tiempos operativos",
        "impact.ops.industry": "Industria",
        "impact.energy": "Optimización de recursos",
        "impact.energy.industry": "Energía",
        "impact.health": "Mejora en capacidad de respuesta",
        "impact.health.industry": "Salud",

        // Industries
        "industries.badge": "Sectores que Transformamos",
        "industries.title": "Experiencia Multi-Industria",
        "ind.utilities": "Utilities",
        "ind.energy": "Energía",
        "ind.health": "Salud",
        "ind.security": "Seguridad Ciudadana",
        "ind.industry": "Industria",
        "ind.smart": "Smart Cities",

        // Tech
        "tech.title": "Tecnologías que Dominamos",

        // Academy
        "academy.badge": "Plataforma Independiente",
        "academy.title": "Academ IA",
        "academy.desc": "Todo el poder de nuestro ecosistema para educación en su propio portal dedicado. Transforma tu institución con IA.",
        "academy.cta": "Visitar Portal AcademIA",

        // Contact
        "contact.badge": "Hablemos",
        "contact.title": "Inicia tu Proyecto",
        "contact.desc": "Cuéntanos tu reto tecnológico. Nuestro equipo te contactará en menos de 24 horas.",
        "contact.name": "Nombre completo",
        "contact.email": "Email corporativo",
        "contact.company": "Empresa",
        "contact.service": "Servicio de interés",
        "contact.message": "Cuéntanos tu reto...",
        "contact.submit": "Enviar Mensaje",
        "contact.whatsapp": "WhatsApp",
        "contact.phone": "Teléfono",
        "contact.location": "Ubicación",

        // Footer
        "footer.desc": "Transformando la tecnología en un motor de crecimiento para empresas y ciudades inteligentes desde 2005.",
        "footer.nav": "Navegación",
        "footer.platforms": "Plataformas",
        "footer.contact": "Contacto",
        "footer.rights": "Todos los derechos reservados.",

        // Robot
        "robot.greeting": "¡Hola! Soy DCM Bot. Puedo mostrarte nuestros servicios o ayudarte a agendar una reunión. ¿Qué necesitas?",
        "robot.services": "Quiero ver los servicios",
        "robot.schedule": "Quiero agendar una reunión",
        "robot.services.response": "¡Tenemos 10 soluciones enterprise! Déjame llevarte a la sección de servicios.",
        "robot.schedule.response": "¡Excelente! Te llevo a nuestra sección de contacto para que reserves tu espacio ideal.",
    },
    en: {
        // Nav
        "nav.services": "Services",
        "nav.demo": "Live Demo",
        "nav.impact": "Case Studies",
        "nav.agents": "AI Agents",
        "nav.cta": "Start a Project",

        // Hero
        "hero.line1": "AI Agents & Automation for",
        "hero.line2": "Mission-Critical Operations",
        "hero.subtitle": "20+ years delivering technology that drives real results: Autonomous AI Agents, RPA automation with n8n, and deep ERP integrations. Scale your company's profitability.",
        "hero.cta": "Explore Solutions",
        "hero.cta2": "Watch Live Demo",

        // Social Proof
        "proof.years": "Years of Experience",
        "proof.projects": "Projects Delivered",
        "proof.clients": "Active Clients",
        "proof.countries": "Countries",

        // Services
        "services.badge": "Enterprise Solutions",
        "services.title": "Everything your business needs to scale",
        "services.desc": "From custom software to advanced AI. Every solution engineered to move your bottom line.",
        "services.cta": "Request a Quote",
        "svc.dev.title": "Custom Software Development",
        "svc.dev.short": "Software factory using modern stacks for mobile apps, web platforms, and e-commerce.",
        "svc.maint.title": "Maintenance Management Software",
        "svc.maint.short": "Work order management, asset tracking, and preventive maintenance with real-time reporting.",
        "svc.ai.title": "Industrial AI",
        "svc.ai.short": "AI models for predictive analytics, computer vision, NLP, and automated decision-making.",
        "svc.agents.title": "AI Agents",
        "svc.agents.short": "Autonomous agents trained on your processes that sell, schedule, collect, and support 24/7.",
        "svc.rpa.title": "RPA Automation",
        "svc.rpa.short": "Automated workflows with Make and n8n that eliminate up to 80% of repetitive tasks.",
        "svc.security.title": "Public Safety & Surveillance",
        "svc.security.short": "AI-powered CCTV, real-time anomaly detection, and automated emergency response.",
        "svc.iot.title": "IoT / BLE / RFID",
        "svc.iot.short": "Industrial sensors, asset tracking, and proximity-based process control.",
        "svc.integration.title": "Systems Integration",
        "svc.integration.short": "We connect your ERP, CRM, billing, and legacy platforms into a unified ecosystem.",
        "svc.analytics.title": "Analytics & Smart Cities",
        "svc.analytics.short": "Executive dashboards, predictive KPIs, data lakes, and smart city solutions.",
        "svc.academy.title": "AI Training & Enablement",
        "svc.academy.short": "Corporate training programs in AI, automation, and digital transformation.",

        // Demo
        "demo.badge": "Interactive Demo",
        "demo.title": "See AI Agents in Action",
        "demo.desc": "Pick a scenario and watch our agents handle real business situations in real time.",
        "demo.sales.title": "Sales Architect",
        "demo.sales.desc": "Qualifies B2B leads and generates proposals.",
        "demo.schedule.title": "Meeting Scheduler",
        "demo.schedule.desc": "Books meetings with prospects automatically.",
        "demo.billing.title": "Collections Agent",
        "demo.billing.desc": "Negotiates payment terms and generates payment links.",
        "demo.hr.title": "HR Assistant",
        "demo.hr.desc": "Automates onboarding and IT support tickets.",
        "demo.online": "Online",
        "demo.welcome": "Hi! Select a scenario to see the Agent in action.",
        "demo.placeholder": "Type a message...",
        "demo.cta": "See All AI Agents",

        // Architecture
        "arch.badge": "Enterprise Architecture",
        "arch.title": "Data Sovereignty & Private AI",
        "arch.desc": "We design, deploy, and manage Dedicated Cluster Architectures with databases, RPA automation, and AI engines running on your own private infrastructure.",

        // Impact
        "impact.badge": "Proven Results",
        "impact.title": "Real Impact in Numbers",
        "impact.ops": "Reduction in operational lead times",
        "impact.ops.industry": "Manufacturing",
        "impact.energy": "Resource cost optimization",
        "impact.energy.industry": "Energy & Utilities",
        "impact.health": "Improvement in response capacity",
        "impact.health.industry": "Healthcare",

        // Industries
        "industries.badge": "Industries We Transform",
        "industries.title": "Multi-Industry Expertise",
        "ind.utilities": "Utilities",
        "ind.energy": "Energy",
        "ind.health": "Healthcare",
        "ind.security": "Public Safety",
        "ind.industry": "Manufacturing",
        "ind.smart": "Smart Cities",

        // Tech
        "tech.title": "Technologies We Work With",

        // Academy
        "academy.badge": "Standalone Platform",
        "academy.title": "Academ IA",
        "academy.desc": "The full power of our ecosystem for education — in its own dedicated portal. Transform your institution with AI.",
        "academy.cta": "Visit AcademIA Portal",

        // Contact
        "contact.badge": "Get in Touch",
        "contact.title": "Start Your Project",
        "contact.desc": "Tell us your challenge. Our team will reach out within 24 hours.",
        "contact.name": "Full name",
        "contact.email": "Work email",
        "contact.company": "Company",
        "contact.service": "Service of interest",
        "contact.message": "Describe your challenge...",
        "contact.submit": "Send Message",
        "contact.whatsapp": "WhatsApp",
        "contact.phone": "Phone",
        "contact.location": "Location",

        // Footer
        "footer.desc": "Turning technology into a growth engine for businesses and smart cities since 2005.",
        "footer.nav": "Navigation",
        "footer.platforms": "Platforms",
        "footer.contact": "Contact",
        "footer.rights": "All rights reserved.",

        // Robot
        "robot.greeting": "Hi! I'm DCM Bot. I can walk you through our services or help you schedule a call. What do you need?",
        "robot.services": "Show me your services",
        "robot.schedule": "I'd like to schedule a call",
        "robot.services.response": "We have 10 enterprise solutions. Let me take you there!",
        "robot.schedule.response": "Great! Let me take you to our contact section to book a time.",
    }
};

let currentLang = 'es';

export function t(key) {
    return translations[currentLang]?.[key] || translations['es']?.[key] || key;
}

export function getLang() {
    return currentLang;
}

export function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('dcm-lang', lang);
    document.documentElement.lang = lang;

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val) el.textContent = val;
    });

    // Update [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = t(key);
        if (val) el.placeholder = val;
    });

    // Update [data-i18n-html]
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = t(key);
        if (val) el.innerHTML = val;
    });

    // Toggle active class on lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Fire event for other modules to react
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

export function initI18n() {
    // Detect saved language or browser language
    const saved = localStorage.getItem('dcm-lang');
    const browser = navigator.language?.startsWith('en') ? 'en' : 'es';
    const initial = saved || browser;

    // URL param override
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');

    setLang(urlLang || initial);
}
