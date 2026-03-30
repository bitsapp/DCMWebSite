/**
 * Services — Card selection, detail panel, animations
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { t, getLang } from './i18n.js';

gsap.registerPlugin(ScrollTrigger);

const serviceData = {
    desarrollo: {
        descKey: "svc.dev.detail",
        features: ["Apps moviles iOS & Android", "Aplicaciones web React/Angular", "E-commerce y marketplaces", "APIs REST y microservicios", "Metodologia agil con sprints"],
        featuresEn: ["iOS & Android mobile apps", "React/Angular web applications", "E-commerce & marketplaces", "REST APIs & microservices", "Agile methodology with sprints"]
    },
    mantenimiento: {
        descKey: "svc.maint.detail",
        features: ["Gestion de ordenes de trabajo", "Control de activos y equipos", "Mantenimiento preventivo planificado", "Reportes y KPIs operativos", "Integracion con ERP existente"],
        featuresEn: ["Work order management", "Asset & equipment control", "Planned preventive maintenance", "Operational reports & KPIs", "Integration with existing ERP"]
    },
    ia: {
        descKey: "svc.ai.detail",
        features: ["Analisis predictivo con ML", "Vision por computadora (CCTV)", "Procesamiento de lenguaje natural", "Modelos de IA personalizados", "Integracion OpenAI / Anthropic / Gemini"],
        featuresEn: ["Predictive analysis with ML", "Computer vision (CCTV)", "Natural language processing", "Custom AI models", "OpenAI / Anthropic / Gemini integration"]
    },
    agentes: {
        descKey: "svc.agents.detail",
        features: ["Agente de ventas automatico", "Agente de agendamiento", "Agente de atencion al cliente", "Integracion con WhatsApp y CRM", "Reportes e insights automatizados"],
        featuresEn: ["Automatic sales agent", "Scheduling agent", "Customer service agent", "WhatsApp & CRM integration", "Automated reports & insights"]
    },
    rpa: {
        descKey: "svc.rpa.detail",
        features: ["Automatizacion con n8n y Make", "Integracion de APIs y webhooks", "Flujos de aprobacion automaticos", "Sincronizacion entre plataformas", "Reduccion de tareas manuales 80%+"],
        featuresEn: ["Automation with n8n & Make", "API & webhook integration", "Automatic approval workflows", "Cross-platform synchronization", "80%+ manual task reduction"]
    },
    seguridad: {
        descKey: "svc.security.detail",
        features: ["CCTV inteligente con IA", "Deteccion de anomalias en tiempo real", "Monitoreo urbano centralizado", "Alertas automaticas ante incidentes", "Integracion con centros de mando"],
        featuresEn: ["AI-powered smart CCTV", "Real-time anomaly detection", "Centralized urban monitoring", "Automatic incident alerts", "Command center integration"]
    },
    iot: {
        descKey: "svc.iot.detail",
        features: ["Bluetooth Low Energy (BLE)", "RFID y NFC para rastreo", "Sensores industriales IoT", "Dashboards de monitoreo", "Alertas por geofencing"],
        featuresEn: ["Bluetooth Low Energy (BLE)", "RFID & NFC tracking", "Industrial IoT sensors", "Monitoring dashboards", "Geofencing alerts"]
    },
    integracion: {
        descKey: "svc.integration.detail",
        features: ["Conectores ERP (SAP, Oracle, Dynamics)", "Integracion CRM (Salesforce, HubSpot)", "Middleware y API Gateway", "ETL y migracion de datos", "Single Sign-On (SSO)"],
        featuresEn: ["ERP connectors (SAP, Oracle, Dynamics)", "CRM integration (Salesforce, HubSpot)", "Middleware & API Gateway", "ETL & data migration", "Single Sign-On (SSO)"]
    },
    analitica: {
        descKey: "svc.analytics.detail",
        features: ["Dashboards ejecutivos en tiempo real", "Modelos predictivos de KPIs", "Data lakes y data warehouses", "Smart City analytics", "Business Intelligence avanzado"],
        featuresEn: ["Real-time executive dashboards", "Predictive KPI models", "Data lakes & warehouses", "Smart City analytics", "Advanced Business Intelligence"]
    },
    academia: {
        descKey: "svc.academy.detail",
        features: ["Cursos de IA para empresas", "Workshops de automatizacion", "Certificaciones tecnicas", "Programas a medida", "Plataforma e-learning dedicada"],
        featuresEn: ["AI courses for enterprises", "Automation workshops", "Technical certifications", "Custom programs", "Dedicated e-learning platform"]
    }
};

let activeService = null;

export function initServices() {
    const cards = document.querySelectorAll('.service-card');
    const detail = document.getElementById('service-detail');
    const closeBtn = document.getElementById('service-detail-close');

    // Entrance animation handled by animations.js

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const svc = card.dataset.service;
            if (activeService === svc) {
                closeDetail();
                return;
            }
            activeService = svc;
            showDetail(svc);

            // Dim other cards
            cards.forEach(c => {
                c.classList.toggle('active', c.dataset.service === svc);
                c.classList.toggle('dimmed', c.dataset.service !== svc);
            });
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeDetail);
    }

    function showDetail(svc) {
        const data = serviceData[svc];
        if (!data || !detail) return;

        const titleEl = document.getElementById('svc-detail-title');
        const descEl = document.getElementById('svc-detail-desc');
        const featEl = document.getElementById('svc-detail-features');

        // Get title from the card
        const card = document.querySelector(`[data-service="${svc}"]`);
        if (titleEl && card) titleEl.textContent = card.querySelector('h3').textContent;
        if (descEl && card) descEl.textContent = card.querySelector('p').textContent;

        // Features based on language
        if (featEl) {
            const features = getLang() === 'en' ? data.featuresEn : data.features;
            featEl.innerHTML = features.map(f => `<li>${f}</li>`).join('');
        }

        detail.classList.add('open');

        // Animate in
        gsap.fromTo(detail, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });

        // Scroll to detail
        setTimeout(() => {
            detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    function closeDetail() {
        if (!detail) return;
        activeService = null;
        detail.classList.remove('open');
        document.querySelectorAll('.service-card').forEach(c => {
            c.classList.remove('active', 'dimmed');
        });
    }

    // Update on language change
    window.addEventListener('langchange', () => {
        if (activeService) showDetail(activeService);
    });
}
