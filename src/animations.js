/**
 * Animations — GSAP ScrollTrigger (fast & fluid)
 *
 * Philosophy: content appears quickly, transitions feel instant but smooth.
 * No dramatic delays. Everything responds within 0.3-0.6s.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Shared defaults — snappy ease, short duration */
const EASE = 'power2.out';
const FAST = 0.4;
const MEDIUM = 0.55;

export function initAnimations() {
    // Set GSAP defaults for snappier feel
    gsap.defaults({ ease: EASE, duration: FAST });

    // ---- Progress Line ----
    gsap.to('.progress-line-fill', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.main-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    syncLineNodes();
    heroEntrance();
    scrollReveals();
    parallaxEffects();
    serviceCardEffects();
    botPhoneEffects();
    industryCardEffects();
    impactRingEntrance();

    // Re-init on language change
    window.addEventListener('langchange', () => {
        setTimeout(() => {
            document.querySelectorAll('.text-reveal').forEach(title => {
                title.innerHTML = wrapText(title.innerHTML);
                gsap.set(title.querySelectorAll('.word'), { y: '0%', opacity: 1 });
            });
            ScrollTrigger.refresh();
        }, 50);
    });
}

// ===================== HERO ENTRANCE =====================
function heroEntrance() {
    const tl = gsap.timeline({ delay: 0.1 });

    // Title: quick fade + slight upward movement
    tl.fromTo('.hero-title',
        { y: 30, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power3.out' }
    );

    // Subtitle and actions — fast stagger
    tl.fromTo('.hero-fade-up',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
    );

    // Globe fade in
    tl.fromTo('#globe-container',
        { opacity: 0, scale: 0.92 },
        { opacity: 0.9, scale: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
    );

    // Navbar
    tl.fromTo('.navbar',
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: 'power2.out', clearProps: 'opacity' },
        '-=0.8'
    );
}

// ===================== SCROLL REVEALS =====================
function scrollReveals() {
    // Text reveal (word by word) — fast stagger
    document.querySelectorAll('.text-reveal').forEach(title => {
        title.innerHTML = wrapText(title.innerHTML);
        gsap.to(title.querySelectorAll('.word'), {
            scrollTrigger: { trigger: title, start: 'top 88%', once: true },
            y: '0%', opacity: 1, duration: FAST, stagger: 0.02, ease: EASE
        });
    });

    // Badges slide in
    document.querySelectorAll('.badge').forEach(badge => {
        gsap.fromTo(badge,
            { x: -20, opacity: 0 },
            {
                scrollTrigger: { trigger: badge, start: 'top 90%', once: true },
                x: 0, opacity: 1, duration: FAST, ease: EASE
            }
        );
    });

    // Fade items — simple & fast
    document.querySelectorAll('.fade-item').forEach(item => {
        gsap.fromTo(item,
            { opacity: 0, y: 25 },
            {
                scrollTrigger: { trigger: item, start: 'top 88%', once: true },
                opacity: 1, y: 0, duration: MEDIUM, ease: EASE
            }
        );
    });

    // Section descriptions
    document.querySelectorAll('.section-desc').forEach(desc => {
        gsap.fromTo(desc,
            { opacity: 0, y: 15 },
            {
                scrollTrigger: { trigger: desc, start: 'top 90%', once: true },
                opacity: 1, y: 0, duration: FAST, ease: EASE
            }
        );
    });

    // Social proof counters
    gsap.fromTo('.proof-item',
        { opacity: 0, y: 20 },
        {
            scrollTrigger: { trigger: '.social-proof', start: 'top 85%', once: true },
            opacity: 1, y: 0, duration: FAST, stagger: 0.08, ease: EASE
        }
    );

    // Proof dividers
    gsap.fromTo('.proof-divider',
        { scaleY: 0 },
        {
            scrollTrigger: { trigger: '.social-proof', start: 'top 85%', once: true },
            scaleY: 1, duration: FAST, stagger: 0.05, ease: EASE, delay: 0.1
        }
    );
}

// ===================== PARALLAX =====================
function parallaxEffects() {
    const globe = document.getElementById('globe-container');
    if (globe) {
        gsap.to(globe, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    document.querySelectorAll('.section-header').forEach(header => {
        gsap.fromTo(header,
            { y: 0 },
            {
                y: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: header,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5
                }
            }
        );
    });
}

// ===================== SERVICE CARDS =====================
function serviceCardEffects() {
    document.querySelectorAll('.service-card').forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, y: 25 },
            {
                scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                opacity: 1, y: 0,
                duration: FAST, delay: i * 0.04, ease: EASE
            }
        );
    });

    // 3D tilt on hover
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            gsap.to(card, {
                rotateX, rotateY,
                transformPerspective: 800,
                duration: 0.25,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0, rotateY: 0,
                duration: 0.35, ease: 'power2.out'
            });
        });
    });
}

// ===================== BOT PHONE =====================
function botPhoneEffects() {
    document.querySelectorAll('.bot-preview').forEach((preview, i) => {
        const phone = preview.querySelector('.bot-preview-phone');
        const info = preview.querySelector('.bot-preview-info');

        if (phone) {
            const fromX = i % 2 === 0 ? -30 : 30;
            gsap.fromTo(phone,
                { opacity: 0, x: fromX },
                {
                    scrollTrigger: { trigger: preview, start: 'top 85%', once: true },
                    opacity: 1, x: 0,
                    duration: MEDIUM, ease: EASE
                }
            );
        }

        if (info) {
            gsap.fromTo(info,
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: { trigger: preview, start: 'top 80%', once: true },
                    opacity: 1, y: 0, duration: FAST, ease: EASE, delay: 0.1
                }
            );
        }

        // Subtle tilt on phone hover
        if (phone) {
            phone.addEventListener('mousemove', (e) => {
                const rect = phone.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(phone, {
                    rotateY: x * 6,
                    rotateX: y * -5,
                    transformPerspective: 600,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            phone.addEventListener('mouseleave', () => {
                gsap.to(phone, { rotateY: 0, rotateX: 2, duration: 0.4, ease: 'power2.out' });
            });
        }
    });
}

// ===================== INDUSTRY CARDS =====================
function industryCardEffects() {
    document.querySelectorAll('.industry-card').forEach((card, i) => {
        const color = card.dataset.color || '#3b82f6';

        gsap.fromTo(card,
            { opacity: 0, y: 25 },
            {
                scrollTrigger: { trigger: card, start: 'top 88%', once: true },
                opacity: 1, y: 0,
                duration: FAST, delay: i * 0.05, ease: EASE
            }
        );

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                borderColor: color,
                boxShadow: `0 0 25px ${color}22, 0 10px 30px rgba(0,0,0,0.3)`,
                duration: 0.25
            });
            const icon = card.querySelector('i');
            if (icon) gsap.to(icon, { color, scale: 1.15, duration: 0.25 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: 'none',
                duration: 0.25
            });
            const icon = card.querySelector('i');
            if (icon) gsap.to(icon, { color: '', scale: 1, duration: 0.25 });
        });
    });
}

// ===================== IMPACT & PROJECTS =====================
function impactRingEntrance() {
    gsap.fromTo('.project-card',
        { opacity: 0, y: 30 },
        {
            scrollTrigger: { trigger: '.projects-showcase', start: 'top 85%', once: true },
            opacity: 1, y: 0,
            duration: MEDIUM, stagger: 0.08, ease: EASE
        }
    );

    gsap.fromTo('.footer-separator',
        { scaleX: 0 },
        {
            scrollTrigger: { trigger: '.footer', start: 'top 92%', once: true },
            scaleX: 1, duration: 0.8, ease: 'power2.inOut'
        }
    );
}

// ===================== LINE NODES =====================
function syncLineNodes() {
    const sections = ['#servicios', '#demo', '#chatbots-live', '#impacto', '#academia', '#contacto'];
    const wrapper = document.querySelector('.progress-line-wrapper');
    if (!wrapper) return;

    sections.forEach((sel, i) => {
        const node = document.getElementById(`node-${i + 1}`);
        const target = document.querySelector(sel);
        if (!node || !target) return;

        ScrollTrigger.create({
            trigger: target,
            start: 'top 50%',
            toggleClass: { targets: node, className: 'active' }
        });

        gsap.from(node, {
            scale: 0,
            scrollTrigger: {
                trigger: target,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// ===================== TEXT WRAP UTILITY =====================
function wrapText(html) {
    return html.replace(/(>[^<]*<|^[^<]*<|>[^<]*$)/g, function (match) {
        let prefix = '', suffix = '', text = match;
        if (text.startsWith('>')) { prefix = '>'; text = text.slice(1); }
        if (text.endsWith('<')) { suffix = '<'; text = text.slice(0, -1); }
        if (!text.trim()) return prefix + text + suffix;

        const wrapped = text.split(/(\s+)/).map(word => {
            if (!word.trim()) return word;
            return `<span class="word-line" style="display:inline-block;overflow:hidden;"><span class="word" style="display:inline-block;">${word}</span></span>`;
        }).join('');

        return prefix + wrapped + suffix;
    });
}
