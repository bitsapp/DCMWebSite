/**
 * Navigation — Navbar, Hamburger, Language Toggle
 */
import { setLang } from './i18n.js';

export function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link, .nav-cta');

    // Hamburger toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu before scroll so navbar doesn't cover section
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#')) return;

                hamburger.classList.remove('active');
                navLinks.classList.remove('active');

                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();
                // Espera al cierre del menú antes de scrollear
                setTimeout(() => {
                    const offset = 100;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }, 50);
            });
        });
    }

    // Language Toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (btn && btn.dataset.lang) {
                setLang(btn.dataset.lang);
            }
        });
    }

    // Navbar command center activation on scroll
    const navbar = document.getElementById('main-nav');
    if (navbar) {
        let wasScrolled = false;
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 80;
            if (scrolled === wasScrolled) return;
            wasScrolled = scrolled;

            if (scrolled) {
                navbar.style.background = 'linear-gradient(135deg, rgba(10, 14, 26, 0.95), rgba(15, 23, 42, 0.92))';
                navbar.style.boxShadow = '0 10px 40px rgba(0,0,0,0.6), 0 0 1px rgba(56, 189, 248, 0.25), inset 0 1px 0 rgba(255,255,255,0.03)';
                navbar.style.borderColor = 'rgba(56, 189, 248, 0.15)';
                navbar.style.padding = '0.5rem 1.5rem';
            } else {
                navbar.style.background = '';
                navbar.style.boxShadow = '';
                navbar.style.borderColor = '';
                navbar.style.padding = '';
            }
        }, { passive: true });
    }
}
