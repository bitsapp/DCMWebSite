/**
 * Particles — Canvas-based floating particles with twinkling + parallax
 */

export function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = window.innerWidth < 768 ? 50 : 120;
    const colors = ['rgba(255,255,255,0.8)', 'rgba(6,182,212,0.6)', 'rgba(59,130,246,0.5)'];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedY = Math.random() * -0.2 - 0.05;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.5 + 0.1;
            this.pulse = Math.random() * 0.02 + 0.005;
        }

        update() {
            this.y += this.speedY - window.scrollY * 0.0015;
            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
            this.alpha += this.pulse;
            if (this.alpha >= 1 || this.alpha <= 0.1) this.pulse *= -1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
            ctx.fillStyle = this.color;
            ctx.shadowBlur = this.size * 5;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    resize();
    init();
    animate();

    window.addEventListener('resize', () => { resize(); init(); });
}
