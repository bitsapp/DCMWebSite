/**
 * DCM System — Main Orchestrator
 * Imports and initializes all modules in correct order
 */

import './style.css';
import { initSecurity } from './security.js';
import { initI18n } from './i18n.js';
import { initNavigation } from './navigation.js';
import { initParticles } from './particles.js';
import { initGlobe } from './globe.js';
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
    initGlobe();
    initAnimations();
    initServices();
    initCounters();
    initTerminal();
    initContact();
    initRobot();
});
