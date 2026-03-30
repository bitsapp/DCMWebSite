/**
 * Counter — Animated counting numbers for social proof + impact rings
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCounters() {
    // Social Proof counters
    document.querySelectorAll('.proof-number').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const obj = { val: 0 };

        gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            snap: { val: 1 },
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                once: true
            },
            onUpdate: () => { el.textContent = Math.round(obj.val); }
        });
    });

    // Impact ring counters
    document.querySelectorAll('.impact-number').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const obj = { val: 0 };

        gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: 'power2.out',
            snap: { val: 1 },
            scrollTrigger: {
                trigger: el.closest('.impact-card'),
                start: 'top 80%',
                once: true
            },
            onUpdate: () => { el.textContent = Math.round(obj.val); }
        });
    });

    // SVG Ring fill animation
    document.querySelectorAll('.ring-fill').forEach(ring => {
        const percent = parseInt(ring.dataset.percent, 10);
        const circumference = 2 * Math.PI * 52; // r=52
        const offset = circumference - (percent / 100) * circumference;

        gsap.to(ring, {
            strokeDashoffset: offset,
            duration: 2.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ring.closest('.impact-card'),
                start: 'top 80%',
                once: true
            }
        });
    });
}
