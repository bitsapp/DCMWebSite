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
        "hero.subtitle": "Más de 12 años construyendo tecnología que genera resultados reales: Agentes Autónomos IA, automatización RPA con n8n e integraciones profundas a tu ERP. Escala la rentabilidad de tu empresa.",
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
        "footer.desc": "Transformando la tecnología en un motor de crecimiento para empresas y ciudades inteligentes desde 2014.",
        "footer.nav": "Navegación",
        "footer.platforms": "Plataformas",
        "footer.contact": "Contacto",
        "footer.rights": "Todos los derechos reservados.",

        // Service cards — hardcoded content
        "svc.dev.h3": "Desarrollo a Medida",
        "svc.dev.p": "Fábrica de software enterprise. Apps móviles, plataformas web, e-commerce y sistemas a medida con React, Angular, Laravel y Node.js.",
        "svc.dev.tag": "Proyecto: ZUTRICS — App Salud con IA",
        "svc.maint.h3": "Software de Mantenimiento",
        "svc.maint.p": "Gestión completa de órdenes de servicio, activos físicos, mantenimiento preventivo y correctivo con reportes en tiempo real.",
        "svc.maint.tag": "Proyecto: Cannon — Sistema Industrial",
        "svc.ai.h3": "IA Avanzada Industrial",
        "svc.ai.p": "Modelos de inteligencia artificial para análisis predictivo, visión por computadora, NLP y automatización de decisiones críticas.",
        "svc.agents.h3": "Agentes Inteligentes",
        "svc.agents.p": "Clones digitales entrenados con tus procesos. Venden, agendan, cobran y atienden clientes 24/7 con precisión humana.",
        "svc.agents.tag": "En Producción — 6 Clientes Activos",
        "svc.rpa.h3": "Automatización RPA",
        "svc.rpa.p": "Eliminamos el 80% de tareas repetitivas con flujos inteligentes en n8n y Make. Integraciones API, webhooks y orquestación de datos.",
        "svc.rpa.tag": "+200 flujos automatizados",
        "svc.security.h3": "Seguridad Ciudadana",
        "svc.security.p": "CCTV inteligente con IA, detección de anomalías en tiempo real, monitoreo urbano centralizado y alertas automáticas ante emergencias.",
        "svc.security.tag": "Ciudades Inteligentes Colombia",
        "svc.iot.h3": "IoT / BLE / RFID / NFC",
        "svc.iot.p": "Sensores industriales, rastreo de activos con BLE y RFID, control de procesos por proximidad y geofencing inteligente.",
        "svc.iot.tag": "Proyecto: ID Digital — Carnet Digital",
        "svc.integration.h3": "Integración de Sistemas",
        "svc.integration.p": "Conectamos tu ERP, CRM, facturación y plataformas legacy en un ecosistema unificado. SAP, Oracle, Dynamics, Salesforce, HubSpot.",
        "svc.analytics.h3": "Analítica y Smart Cities",
        "svc.analytics.p": "Dashboards ejecutivos con KPIs predictivos, data lakes, business intelligence avanzado y soluciones de ciudades inteligentes.",
        "svc.analytics.tag": "Utilities + Energía + Gobierno",
        "svc.academy.h3": "Capacitación en IA",
        "svc.academy.p": "Programas de formación empresarial en inteligencia artificial, automatización y transformación digital. Workshops y certificaciones.",

        // Chatbots section
        "chatbots.badge": "En Producción",
        "chatbots.title": "Chatbots que Construimos y Operamos",
        "chatbots.desc": "Estos agentes están en vivo atendiendo clientes reales. Cada uno fue diseñado, entrenado y desplegado por DCM System.",
        "chatbots.cannon.p": "Agente IA con 8 herramientas: dashboard de contenedores, tracking en tiempo real, alertas por nivel de retraso y notificación a administradores. Colombia y Las Vegas, EE.UU. Supabase + n8n.",
        "chatbots.judah.p": "Asistente con RAG sobre 33 documentos. Admisiones, sedes, programas y eventos. Búsqueda híbrida 70% vector + 30% keyword. n8n con 20 nodos.",
        "chatbots.bitfin.p": "Asesor financiero IA que analiza 55,680+ movimientos contables, indicadores de liquidez, solvencia y rentabilidad. Conectado a SIIGO. Gemini 2.0 Flash + RAG.",
        "chatbots.stat.tools": "Herramientas IA",
        "chatbots.stat.engine": "Motor IA",
        "chatbots.stat.nodes": "Nodos n8n",
        "chatbots.stat.docs": "Docs RAG",
        "chatbots.stat.moves": "Movimientos",
        "chatbots.cannon.phone1": "Soy el agente de soporte de Cannon. Puedo darte info sobre contenedores, alertas y órdenes de servicio.",
        "chatbots.cannon.phone2": "Dashboard de contenedores",
        "chatbots.cannon.phone3": "Contenedor MSKU-284719 con 9 días de retraso. ¿Notifico al administrador?",
        "chatbots.judah.phone1": "Bienvenido al Boston International School. Soy JUDAH AI. Puedo ayudarle con admisiones, matrículas, sedes y programas.",
        "chatbots.judah.phone2": "Proceso de admisión",
        "chatbots.judah.phone3": "El proceso incluye entrevista familiar, evaluación del estudiante y revisión de documentos.",
        "chatbots.bitfin.phone1": "Soy tu CFO Virtual. Acceso a balance general, indicadores y movimientos contables en tiempo real.",
        "chatbots.bitfin.phone2": "Liquidez de la empresa",
        "chatbots.bitfin.phone3": "Liquidez saludable. Margen neto bajo 0.5% vs mes anterior. Revisa gastos operativos.",
        "chatbots.cta1": "Quiero Mi Propio Agente IA",
        "chatbots.cta2": "Ver Más Agentes",
        "chatbots.cta.desc": "3 agentes en producción con datos reales. Construimos el tuyo con la misma tecnología.",

        // Projects
        "projects.title": "Proyectos Destacados en Producción",
        "projects.live": "EN VIVO",
        "projects.id.title": "ID Digital / Carnet Digital",
        "projects.id.p": "Plataforma de identificación digital con IoT, BLE y NFC. Gestión de credenciales empresariales inteligentes desplegada en Colombia.",
        "projects.zutrics.title": "ZUTRICS — PROCAPS",
        "projects.zutrics.p": "App de IA predictiva para gestión de diabetes. Control de glucometría, reportes personalizados, análisis de tendencias y círculo de cuidados. Desarrollada para PROCAPS, laboratorio farmacéutico líder en Colombia.",
        "projects.cannon.title": "Cannon",
        "projects.cannon.p": "Sistema de inteligencia artificial y automatización industrial para gestión de mantenimiento, órdenes de servicio y soporte técnico. Operando en Colombia y Las Vegas, EE.UU.",

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
        "hero.subtitle": "12+ years delivering technology that drives real results: Autonomous AI Agents, RPA automation with n8n, and deep ERP integrations. Scale your company's profitability.",
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
        "footer.desc": "Turning technology into a growth engine for businesses and smart cities since 2014.",
        "footer.nav": "Navigation",
        "footer.platforms": "Platforms",
        "footer.contact": "Contact",
        "footer.rights": "All rights reserved.",

        // Service cards
        "svc.dev.h3": "Custom Software Development",
        "svc.dev.p": "Enterprise software factory. Mobile apps, web platforms, e-commerce, and custom systems built with React, Angular, Laravel, and Node.js.",
        "svc.dev.tag": "Project: ZUTRICS — Health AI App",
        "svc.maint.h3": "Maintenance Management Software",
        "svc.maint.p": "Full work order management, physical assets, preventive and corrective maintenance with real-time reporting.",
        "svc.maint.tag": "Project: Cannon — Industrial System",
        "svc.ai.h3": "Industrial AI",
        "svc.ai.p": "AI models for predictive analytics, computer vision, NLP, and automated critical decision-making.",
        "svc.agents.h3": "AI Agents",
        "svc.agents.p": "Autonomous agents trained on your processes. They sell, schedule, collect, and support customers 24/7 with human precision.",
        "svc.agents.tag": "Live — 6 Active Clients",
        "svc.rpa.h3": "RPA Automation",
        "svc.rpa.p": "We eliminate 80% of repetitive tasks with intelligent workflows in n8n and Make. API integrations, webhooks, and data orchestration.",
        "svc.rpa.tag": "+200 automated workflows",
        "svc.security.h3": "Public Safety & Surveillance",
        "svc.security.p": "AI-powered CCTV, real-time anomaly detection, centralized urban monitoring, and automated emergency alerts.",
        "svc.security.tag": "Smart Cities Colombia",
        "svc.iot.h3": "IoT / BLE / RFID / NFC",
        "svc.iot.p": "Industrial sensors, asset tracking with BLE and RFID, proximity-based process control, and intelligent geofencing.",
        "svc.iot.tag": "Project: ID Digital — Digital ID Card",
        "svc.integration.h3": "Systems Integration",
        "svc.integration.p": "We connect your ERP, CRM, billing, and legacy platforms into a unified ecosystem. SAP, Oracle, Dynamics, Salesforce, HubSpot.",
        "svc.analytics.h3": "Analytics & Smart Cities",
        "svc.analytics.p": "Executive dashboards with predictive KPIs, data lakes, advanced business intelligence, and smart city solutions.",
        "svc.analytics.tag": "Utilities + Energy + Government",
        "svc.academy.h3": "AI Training & Enablement",
        "svc.academy.p": "Corporate training programs in artificial intelligence, automation, and digital transformation. Workshops and certifications.",

        // Chatbots section
        "chatbots.badge": "Live in Production",
        "chatbots.title": "Chatbots We Built and Operate",
        "chatbots.desc": "These agents are live, serving real clients. Each one was designed, trained, and deployed by DCM System.",
        "chatbots.cannon.p": "AI agent with 8 tools: container dashboard, real-time tracking, delay-level alerts, and admin notifications. Colombia & Las Vegas, USA. Supabase + n8n.",
        "chatbots.judah.p": "RAG assistant over 33 documents. Admissions, campuses, programs and events. Hybrid search 70% vector + 30% keyword. n8n with 20 nodes.",
        "chatbots.bitfin.p": "AI financial advisor analyzing 55,680+ accounting entries, liquidity, solvency, and profitability indicators. Connected to SIIGO. Gemini 2.0 Flash + RAG.",
        "chatbots.stat.tools": "AI Tools",
        "chatbots.stat.engine": "AI Engine",
        "chatbots.stat.nodes": "n8n Nodes",
        "chatbots.stat.docs": "RAG Docs",
        "chatbots.stat.moves": "Transactions",
        "chatbots.cannon.phone1": "I'm Cannon's support agent. I can give you info on containers, alerts, and service orders.",
        "chatbots.cannon.phone2": "Container dashboard",
        "chatbots.cannon.phone3": "Container MSKU-284719 is 9 days delayed. Notify the admin?",
        "chatbots.judah.phone1": "Welcome to Boston International School. I'm JUDAH AI. I can help with admissions, enrollment, campuses, and programs.",
        "chatbots.judah.phone2": "Admission process",
        "chatbots.judah.phone3": "The process includes a family interview, student assessment, and document review.",
        "chatbots.bitfin.phone1": "I'm your Virtual CFO. I have access to the balance sheet, indicators, and accounting entries in real time.",
        "chatbots.bitfin.phone2": "Company liquidity",
        "chatbots.bitfin.phone3": "Healthy liquidity. Net margin down 0.5% vs last month. Review operating expenses.",
        "chatbots.cta1": "I Want My Own AI Agent",
        "chatbots.cta2": "See More Agents",
        "chatbots.cta.desc": "3 agents in production with real data. We'll build yours with the same technology.",

        // Projects
        "projects.title": "Featured Projects in Production",
        "projects.live": "LIVE",
        "projects.id.title": "ID Digital / Digital ID Card",
        "projects.id.p": "Digital identification platform with IoT, BLE, and NFC. Smart enterprise credential management deployed across Colombia.",
        "projects.zutrics.title": "ZUTRICS — PROCAPS",
        "projects.zutrics.p": "AI predictive app for diabetes management. Glucose tracking, personalized reports, trend analysis, and care circles. Built for PROCAPS, Colombia's leading pharmaceutical company.",
        "projects.cannon.title": "Cannon",
        "projects.cannon.p": "AI and industrial automation system for maintenance management, work orders, and technical support. Operating in Colombia and Las Vegas, USA.",

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
