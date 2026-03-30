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
        "hero.line1": "Transformacion digital para",
        "hero.line2": "Operaciones Criticas",
        "hero.subtitle": "Mas de 20 anos construyendo infraestructura inteligente: Agentes Autonomos, automatizacion RPA e integraciones profundas a tu ERP. Escala la rentabilidad de tu empresa.",
        "hero.cta": "Descubrir Soluciones",
        "hero.cta2": "Ver Demo en Vivo",

        // Social Proof
        "proof.years": "Anos de Experiencia",
        "proof.projects": "Proyectos Entregados",
        "proof.clients": "Clientes Activos",
        "proof.countries": "Paises",

        // Services
        "services.badge": "Soluciones Enterprise",
        "services.title": "Todo lo que tu empresa necesita para evolucionar",
        "services.desc": "Desde desarrollo a medida hasta inteligencia artificial avanzada. Cada solucion, disenada para impactar tus resultados.",
        "services.cta": "Solicitar Informacion",
        "svc.dev.title": "Desarrollo a Medida",
        "svc.dev.short": "Fabrica de software con tecnologias modernas para apps, web y e-commerce.",
        "svc.maint.title": "Software de Mantenimiento",
        "svc.maint.short": "Gestion de ordenes de servicio, activos y mantenimiento preventivo.",
        "svc.ai.title": "IA Avanzada Industrial",
        "svc.ai.short": "Inteligencia artificial aplicada a procesos criticos y analisis predictivo.",
        "svc.agents.title": "Agentes Inteligentes",
        "svc.agents.short": "Clones digitales que venden, agendan, cobran y atienden 24/7.",
        "svc.rpa.title": "Automatizacion RPA",
        "svc.rpa.short": "Flujos automatizados con Make y n8n que eliminan tareas repetitivas.",
        "svc.security.title": "Seguridad Ciudadana",
        "svc.security.short": "CCTV con IA, monitoreo inteligente y respuesta automatizada ante emergencias.",
        "svc.iot.title": "IoT / BLE / RFID",
        "svc.iot.short": "Sensores, rastreo y control de procesos con tecnologia de proximidad.",
        "svc.integration.title": "Integracion de Sistemas",
        "svc.integration.short": "Conectamos tu ERP, CRM y plataformas en un ecosistema unificado.",
        "svc.analytics.title": "Analitica y Smart Cities",
        "svc.analytics.short": "Dashboards predictivos, KPIs en tiempo real y ciudades inteligentes.",
        "svc.academy.title": "Capacitacion en IA",
        "svc.academy.short": "Programas de formacion empresarial en inteligencia artificial y automatizacion.",

        // Demo
        "demo.badge": "Demo Interactivo",
        "demo.title": "Experimenta el Poder de los Agentes IA",
        "demo.desc": "Selecciona un escenario y observa como nuestros agentes resuelven situaciones reales de negocio en tiempo real.",
        "demo.sales.title": "Arquitecto de Ventas",
        "demo.sales.desc": "Califica leads B2B y genera cotizaciones.",
        "demo.schedule.title": "Sincronizador SDR",
        "demo.schedule.desc": "Agenda reuniones con prospectos.",
        "demo.billing.title": "Motor de Cobranza",
        "demo.billing.desc": "Negocia plazos y genera links de pago.",
        "demo.hr.title": "Nucleo HR",
        "demo.hr.desc": "Onboarding y soporte IT automatizado.",
        "demo.online": "En linea",
        "demo.welcome": "Hola! Selecciona un escenario para ver al Agente en accion.",
        "demo.placeholder": "Escribe un mensaje...",
        "demo.cta": "Conocer Todos los Agentes",

        // Architecture
        "arch.badge": "Arquitectura Enterprise",
        "arch.title": "Soberania de Datos e IA Privada",
        "arch.desc": "Disenamos, desplegamos y gestionamos Arquitecturas de Clusters Dedicados con bases de datos, automatizacion RPA y motores de IA en tu propia infraestructura.",

        // Impact
        "impact.badge": "Resultados Comprobados",
        "impact.title": "Impacto Real en Numeros",
        "impact.ops": "Reduccion en tiempos operativos",
        "impact.ops.industry": "Industria",
        "impact.energy": "Optimizacion de recursos",
        "impact.energy.industry": "Energia",
        "impact.health": "Mejora en capacidad de respuesta",
        "impact.health.industry": "Salud",

        // Industries
        "industries.badge": "Sectores que Transformamos",
        "industries.title": "Experiencia Multi-Industria",
        "ind.utilities": "Utilities",
        "ind.energy": "Energia",
        "ind.health": "Salud",
        "ind.security": "Seguridad Ciudadana",
        "ind.industry": "Industria",
        "ind.smart": "Smart Cities",

        // Tech
        "tech.title": "Tecnologias que Dominamos",

        // Academy
        "academy.badge": "Plataforma Independiente",
        "academy.title": "Academ IA",
        "academy.desc": "Todo el poder de nuestro ecosistema para educacion en su propio portal dedicado. Transforma tu institucion con IA.",
        "academy.cta": "Visitar Portal AcademIA",

        // Contact
        "contact.badge": "Hablemos",
        "contact.title": "Inicia tu Proyecto",
        "contact.desc": "Cuentanos tu reto tecnologico. Nuestro equipo te contactara en menos de 24 horas.",
        "contact.name": "Nombre completo",
        "contact.email": "Email corporativo",
        "contact.company": "Empresa",
        "contact.service": "Servicio de interes",
        "contact.message": "Cuentanos tu reto...",
        "contact.submit": "Enviar Mensaje",
        "contact.whatsapp": "WhatsApp",
        "contact.phone": "Telefono",
        "contact.location": "Ubicacion",

        // Footer
        "footer.desc": "Transformando la tecnologia en un motor de crecimiento para empresas y ciudades inteligentes desde 2005.",
        "footer.nav": "Navegacion",
        "footer.platforms": "Plataformas",
        "footer.contact": "Contacto",
        "footer.rights": "Todos los derechos reservados.",

        // Robot
        "robot.greeting": "Hola! Soy DCM Bot. Puedo mostrarte nuestros servicios o ayudarte a agendar una reunion. Que necesitas?",
        "robot.services": "Quiero ver los servicios",
        "robot.schedule": "Quiero agendar una reunion",
        "robot.services.response": "Tenemos 10 soluciones enterprise. Dejame llevarte a la seccion de servicios!",
        "robot.schedule.response": "Excelente! Te llevo a nuestra agenda para que reserves tu horario ideal.",
    },
    en: {
        // Nav
        "nav.services": "Services",
        "nav.demo": "Live Demo",
        "nav.impact": "Real Impact",
        "nav.agents": "AI Agents",
        "nav.cta": "Start Project",

        // Hero
        "hero.line1": "Digital transformation for",
        "hero.line2": "Critical Operations",
        "hero.subtitle": "Over 20 years building intelligent infrastructure: Autonomous Agents, RPA automation, and deep ERP integrations. Scale your company's profitability.",
        "hero.cta": "Discover Solutions",
        "hero.cta2": "Watch Live Demo",

        // Social Proof
        "proof.years": "Years of Experience",
        "proof.projects": "Projects Delivered",
        "proof.clients": "Active Clients",
        "proof.countries": "Countries",

        // Services
        "services.badge": "Enterprise Solutions",
        "services.title": "Everything your company needs to evolve",
        "services.desc": "From custom development to advanced AI. Every solution designed to impact your results.",
        "services.cta": "Request Information",
        "svc.dev.title": "Custom Development",
        "svc.dev.short": "Software factory with modern tech for apps, web, and e-commerce.",
        "svc.maint.title": "Maintenance Software",
        "svc.maint.short": "Service order management, assets, and preventive maintenance.",
        "svc.ai.title": "Advanced Industrial AI",
        "svc.ai.short": "Artificial intelligence applied to critical processes and predictive analysis.",
        "svc.agents.title": "Intelligent Agents",
        "svc.agents.short": "Digital clones that sell, schedule, collect, and serve 24/7.",
        "svc.rpa.title": "RPA Automation",
        "svc.rpa.short": "Automated workflows with Make and n8n that eliminate repetitive tasks.",
        "svc.security.title": "Public Safety",
        "svc.security.short": "AI-powered CCTV, smart monitoring, and automated emergency response.",
        "svc.iot.title": "IoT / BLE / RFID",
        "svc.iot.short": "Sensors, tracking, and process control with proximity technology.",
        "svc.integration.title": "Systems Integration",
        "svc.integration.short": "We connect your ERP, CRM, and platforms into a unified ecosystem.",
        "svc.analytics.title": "Analytics & Smart Cities",
        "svc.analytics.short": "Predictive dashboards, real-time KPIs, and smart city solutions.",
        "svc.academy.title": "AI Training",
        "svc.academy.short": "Enterprise training programs in artificial intelligence and automation.",

        // Demo
        "demo.badge": "Interactive Demo",
        "demo.title": "Experience the Power of AI Agents",
        "demo.desc": "Select a scenario and watch how our agents solve real business situations in real time.",
        "demo.sales.title": "Sales Architect",
        "demo.sales.desc": "Qualifies B2B leads and generates quotes.",
        "demo.schedule.title": "SDR Synchronizer",
        "demo.schedule.desc": "Schedules meetings with prospects.",
        "demo.billing.title": "Collection Engine",
        "demo.billing.desc": "Negotiates terms and generates payment links.",
        "demo.hr.title": "HR Core",
        "demo.hr.desc": "Automated onboarding and IT support.",
        "demo.online": "Online",
        "demo.welcome": "Hi! Select a scenario to see the Agent in action.",
        "demo.placeholder": "Type a message...",
        "demo.cta": "Meet All Agents",

        // Architecture
        "arch.badge": "Enterprise Architecture",
        "arch.title": "Data Sovereignty & Private AI",
        "arch.desc": "We design, deploy, and manage Dedicated Cluster Architectures with databases, RPA automation, and AI engines on your own infrastructure.",

        // Impact
        "impact.badge": "Proven Results",
        "impact.title": "Real Impact in Numbers",
        "impact.ops": "Reduction in operational times",
        "impact.ops.industry": "Industry",
        "impact.energy": "Resource optimization",
        "impact.energy.industry": "Energy",
        "impact.health": "Improved response capacity",
        "impact.health.industry": "Healthcare",

        // Industries
        "industries.badge": "Sectors We Transform",
        "industries.title": "Multi-Industry Experience",
        "ind.utilities": "Utilities",
        "ind.energy": "Energy",
        "ind.health": "Healthcare",
        "ind.security": "Public Safety",
        "ind.industry": "Industry",
        "ind.smart": "Smart Cities",

        // Tech
        "tech.title": "Technologies We Master",

        // Academy
        "academy.badge": "Independent Platform",
        "academy.title": "Academ IA",
        "academy.desc": "The full power of our ecosystem for education in its own dedicated portal. Transform your institution with AI.",
        "academy.cta": "Visit AcademIA Portal",

        // Contact
        "contact.badge": "Let's Talk",
        "contact.title": "Start Your Project",
        "contact.desc": "Tell us your technology challenge. Our team will contact you within 24 hours.",
        "contact.name": "Full name",
        "contact.email": "Corporate email",
        "contact.company": "Company",
        "contact.service": "Service of interest",
        "contact.message": "Tell us your challenge...",
        "contact.submit": "Send Message",
        "contact.whatsapp": "WhatsApp",
        "contact.phone": "Phone",
        "contact.location": "Location",

        // Footer
        "footer.desc": "Transforming technology into a growth engine for businesses and smart cities since 2005.",
        "footer.nav": "Navigation",
        "footer.platforms": "Platforms",
        "footer.contact": "Contact",
        "footer.rights": "All rights reserved.",

        // Robot
        "robot.greeting": "Hi! I'm DCM Bot. I can show you our services or help you schedule a meeting. What do you need?",
        "robot.services": "Show me the services",
        "robot.schedule": "I want to schedule a meeting",
        "robot.services.response": "We have 10 enterprise solutions. Let me take you to the services section!",
        "robot.schedule.response": "Excellent! Let me take you to our calendar so you can book your ideal time.",
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
