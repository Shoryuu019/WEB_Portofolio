// ---------- 1. TYPING EFFECT ----------
const texts = [
    'Fresh Graduate Ilmu Komputer',
    'Web Developer',
    'Tech Enthusiast',
    'Problem Solver'
];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typed-text').textContent = letter;
    if (index === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // jeda sebelum mengetik kalimat berikutnya
    } else {
        setTimeout(type, 100); // kecepatan mengetik
    }
}

type();

// ---------- 2. HAMBURGER MENU ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Tutup menu saat link diklik (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ---------- 3. ACTIVE NAV LINK (SCROLL SPY) ----------
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ---------- 4. FADE-IN ANIMATION (Intersection Observer) ----------
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    observer.observe(el);
});
