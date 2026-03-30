/**
 * DCM System — Main Orchestrator
 * Imports and initializes all modules in correct order
 */

import './style.css';
import { initSecurity } from './security.js';
import { initI18n } from './i18n.js';
import { initNavigation } from './navigation.js';
import { initParticles } from './particles.js';
import { initAnimations } from './animations.js';
import { initServices } from './services.js';
import { initCounters } from './counter.js';
import { initTerminal } from './terminal.js';
import { initContact } from './contact.js';
import { initRobot } from './robot.js';

// Phase 1: Immediate (no DOM needed)
initSecurity();

// Phase 2: DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initNavigation();
    initParticles();
    initAnimations();
    initServices();
    initCounters();
    initTerminal();
    initContact();
    initRobot();

    // Phase 3: Lazy load globe only on desktop when section is near viewport
    if (window.innerWidth >= 768) {
        const globeContainer = document.getElementById('globe-container');
        if (globeContainer) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    observer.disconnect();
                    import('./globe.js').then(m => m.initGlobe());
                }
            }, { rootMargin: '400px' });
            observer.observe(globeContainer);
        }
    }

    // Remove loading screen once DOM is ready
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.classList.add('loaded');
        setTimeout(() => loader.remove(), 400);
    }
});
