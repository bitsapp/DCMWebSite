/**
 * Animations — GSAP ScrollTrigger + Apple-level effects
 *
 * Effects:
 * - Cinematic hero entrance (letter split + scale)
 * - Scroll-triggered section reveals with stagger
 * - Parallax depth layers
 * - Service cards 3D tilt on hover
 * - Impact rings cinematic entrance
 * - Smooth badge slide-in
 * - Section title word-by-word reveal
 * - Counter number roll
 * - Bot phone mockup float-in from sides
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
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

// ===================== HERO ENTRANCE (Cinematic) =====================
function heroEntrance() {
    const tl = gsap.timeline({ delay: 0.3 });

    // Title: scale from slightly large + blur
    tl.fromTo('.hero-title',
        { y: 60, opacity: 0, scale: 1.05, filter: 'blur(8px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power4.out' }
    );

    // Subtitle and actions stagger up
    tl.fromTo('.hero-fade-up',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
        '-=0.9'
    );

    // Globe fade in with scale
    tl.fromTo('#globe-container',
        { opacity: 0, scale: 0.85 },
        { opacity: 0.9, scale: 1, duration: 2, ease: 'power2.out' },
        '-=1.5'
    );

    // Navbar fades in (no position change — keep CSS intact)
    tl.fromTo('.navbar',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'opacity' },
        '-=1.8'
    );
}

// ===================== SCROLL REVEALS =====================
function scrollReveals() {
    // Text reveal (word by word)
    document.querySelectorAll('.text-reveal').forEach(title => {
        title.innerHTML = wrapText(title.innerHTML);
        gsap.to(title.querySelectorAll('.word'), {
            scrollTrigger: { trigger: title, start: 'top 85%' },
            y: '0%', opacity: 1, duration: 0.7, stagger: 0.025, ease: 'power3.out'
        });
    });

    // Badges slide in from left
    document.querySelectorAll('.badge').forEach(badge => {
        gsap.fromTo(badge,
            { x: -30, opacity: 0 },
            {
                scrollTrigger: { trigger: badge, start: 'top 88%' },
                x: 0, opacity: 1, duration: 0.6, ease: 'power3.out'
            }
        );
    });

    // Fade items with slight scale
    document.querySelectorAll('.fade-item').forEach(item => {
        gsap.fromTo(item,
            { opacity: 0, y: 40, scale: 0.97 },
            {
                scrollTrigger: { trigger: item, start: 'top 85%' },
                opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out'
            }
        );
    });

    // Section descriptions fade in
    document.querySelectorAll('.section-desc').forEach(desc => {
        gsap.fromTo(desc,
            { opacity: 0, y: 20 },
            {
                scrollTrigger: { trigger: desc, start: 'top 88%' },
                opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2
            }
        );
    });

    // Social proof counters scale-pop entrance
    gsap.fromTo('.proof-item',
        { opacity: 0, y: 30, scale: 0.8 },
        {
            scrollTrigger: { trigger: '.social-proof', start: 'top 80%' },
            opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'back.out(1.5)'
        }
    );

    // Proof dividers grow in height
    gsap.fromTo('.proof-divider',
        { scaleY: 0 },
        {
            scrollTrigger: { trigger: '.social-proof', start: 'top 80%' },
            scaleY: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.3
        }
    );
}

// ===================== PARALLAX LAYERS =====================
function parallaxEffects() {
    // Globe parallax (moves slower than scroll)
    const globe = document.getElementById('globe-container');
    if (globe) {
        gsap.to(globe, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5
            }
        });
    }

    // Section headers slight parallax (faster than content)
    document.querySelectorAll('.section-header').forEach(header => {
        gsap.fromTo(header,
            { y: 0 },
            {
                y: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: header,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 2
                }
            }
        );
    });
}

// ===================== SERVICE CARD EFFECTS =====================
function serviceCardEffects() {
    // Stagger entrance — each card individually to avoid grid issues
    document.querySelectorAll('.service-card').forEach((card, i) => {
        gsap.fromTo(card,
            { opacity: 0, y: 35 },
            {
                scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                opacity: 1, y: 0,
                duration: 0.6, delay: i * 0.05, ease: 'power3.out'
            }
        );
    });

    // 3D tilt on hover (magnetic effect)
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            gsap.to(card, {
                rotateX, rotateY,
                transformPerspective: 800,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0, rotateY: 0,
                duration: 0.5, ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ===================== BOT PHONE MOCKUP EFFECTS =====================
function botPhoneEffects() {
    document.querySelectorAll('.bot-preview').forEach((preview, i) => {
        const phone = preview.querySelector('.bot-preview-phone');
        const info = preview.querySelector('.bot-preview-info');

        if (phone) {
            // Phones slide in from alternating sides with rotation
            const fromX = i % 2 === 0 ? -60 : 60;
            gsap.fromTo(phone,
                { opacity: 0, x: fromX, rotateY: i % 2 === 0 ? 15 : -15 },
                {
                    scrollTrigger: { trigger: preview, start: 'top 80%' },
                    opacity: 1, x: 0, rotateY: 0,
                    duration: 1, ease: 'power3.out'
                }
            );
        }

        if (info) {
            gsap.fromTo(info,
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: { trigger: preview, start: 'top 75%' },
                    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3
                }
            );
        }

        // 3D tilt on phone hover
        if (phone) {
            phone.addEventListener('mousemove', (e) => {
                const rect = phone.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(phone, {
                    rotateY: x * 10,
                    rotateX: y * -8,
                    transformPerspective: 600,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
            phone.addEventListener('mouseleave', () => {
                gsap.to(phone, { rotateY: 0, rotateX: 2, duration: 0.6, ease: 'elastic.out(1, 0.6)' });
            });
        }
    });
}

// ===================== INDUSTRY CARD EFFECTS =====================
function industryCardEffects() {
    // Stagger with color glow on entrance
    document.querySelectorAll('.industry-card').forEach((card, i) => {
        const color = card.dataset.color || '#3b82f6';

        gsap.fromTo(card,
            { opacity: 0, y: 40, scale: 0.9 },
            {
                scrollTrigger: { trigger: card, start: 'top 85%' },
                opacity: 1, y: 0, scale: 1,
                duration: 0.6, delay: i * 0.08, ease: 'back.out(1.3)'
            }
        );

        // Color glow on hover
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                borderColor: color,
                boxShadow: `0 0 25px ${color}22, 0 10px 30px rgba(0,0,0,0.3)`,
                duration: 0.3
            });
            const icon = card.querySelector('i');
            if (icon) gsap.to(icon, { color, scale: 1.2, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: 'none',
                duration: 0.3
            });
            const icon = card.querySelector('i');
            if (icon) gsap.to(icon, { color: '', scale: 1, duration: 0.3 });
        });
    });
}

// ===================== IMPACT RINGS CINEMATIC =====================
function impactRingEntrance() {
    // Project cards stagger
    gsap.fromTo('.project-card',
        { opacity: 0, y: 50, rotateX: 10 },
        {
            scrollTrigger: { trigger: '.projects-showcase', start: 'top 80%' },
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.8, stagger: 0.15, ease: 'power3.out'
        }
    );

    // Footer separator draws in
    gsap.fromTo('.footer-separator',
        { scaleX: 0 },
        {
            scrollTrigger: { trigger: '.footer', start: 'top 90%' },
            scaleX: 1, duration: 1.2, ease: 'power3.inOut'
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
