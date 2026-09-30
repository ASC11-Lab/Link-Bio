// script.js
// Cria o fundo animado de bolinhas (partículas) de forma bem sutil.

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

// Configurações das partículas
const PARTICLE_COUNT = 40; // Quantidade de bolinhas
const PARTICLE_SIZE = 1.5; // Tamanho das bolinhas
const SPEED = 0.3; // Velocidade do movimento

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
    
    // Cor das bolinhas (branco)
    ctx.fillStyle = '#ffffff';

    particles.forEach(p => {
        // Move a partícula
        p.x += p.vx;
        p.y += p.vy;

        // Quica nas bordas da tela
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Desenha a bolinha
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

// Inicia e redimensiona
window.addEventListener('resize', init);
init();
animate();