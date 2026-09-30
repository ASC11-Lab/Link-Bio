// script.js
// Fundo animado de bolinhas (partículas) para a página de projetos.

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

const PARTICLE_COUNT = 40;
const PARTICLE_SIZE = 1.5;
const SPEED = 0.3;

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * SPEED,
            vy: (Math.random() - 0.5) * SPEED,
            radius: Math.random() * PARTICLE_SIZE + 0.5
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    ctx.fillStyle = '#ffffff';

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();