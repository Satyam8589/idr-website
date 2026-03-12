'use strict';

// ---- 3D Cube Mouse Parallax (Restored) ----
(function initCubeParallax() {
  const scene   = document.getElementById('cube-scene');
  const cube    = document.getElementById('cube-3d');
  const heroSection = document.getElementById('hero');
  if (!scene || !cube || !heroSection) return;

  const MAX_TILT = 20;   // max degrees of tilt
  let targetX = -20, targetY = 30;  // match CSS start angle
  let currentX = -20, currentY = 30;
  let rafId = null;

  // Lerp function for smooth easing
  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    currentX = lerp(currentX, targetX, 0.08);
    currentY = lerp(currentY, targetY, 0.08);
    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    rafId = requestAnimationFrame(animate);
  }

  // Track mouse position over the whole hero section
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    // Normalise to -1 … +1
    const nx = (e.clientX - rect.left)  / rect.width  * 2 - 1;
    const ny = (e.clientY - rect.top)   / rect.height * 2 - 1;
    // Map to tilt angles
    targetY = 30 + nx * MAX_TILT;
    targetX = -20 - ny * MAX_TILT * 0.6;
  }, { passive: true });

  // Reset to default angle when mouse leaves
  heroSection.addEventListener('mouseleave', () => {
    targetX = -20;
    targetY = 30;
  }, { passive: true });

  // Toggle animations on hover
  heroSection.addEventListener('mouseenter', () => {
    cube.style.animation = 'none'; // Pause CSS rotation
    if (!rafId) rafId = requestAnimationFrame(animate);
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    // Re-enable CSS rotation after tilt-reset animation finishes roughly
    setTimeout(() => {
        if (!heroSection.matches(':hover')) {
            cancelAnimationFrame(rafId);
            rafId = null;
            cube.style.transform = '';
            cube.style.animation = '';
        }
    }, 500);
  }, { passive: true });
})();



// ---- Sticky Header ----
const header = document.getElementById('site-header');
function onScroll() {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- Mobile Navigation ----
const hamburger  = document.getElementById('nav-hamburger');
const navDrawer  = document.getElementById('nav-drawer');
const navBackdrop = document.getElementById('nav-backdrop');

function openNav() {
  navDrawer.classList.add('open');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('nav-open');
  // Show backdrop
  if (navBackdrop) {
    navBackdrop.style.display = 'block';
    requestAnimationFrame(() => navBackdrop.classList.add('visible'));
  }
}

function closeNav() {
  navDrawer.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
  // Hide backdrop
  if (navBackdrop) {
    navBackdrop.classList.remove('visible');
    setTimeout(() => { navBackdrop.style.display = 'none'; }, 350);
  }
}

hamburger.addEventListener('click', () => {
  navDrawer.classList.contains('open') ? closeNav() : openNav();
});

// Close when clicking the backdrop
if (navBackdrop) navBackdrop.addEventListener('click', closeNav);

// Close button inside the drawer
const navCloseBtn = document.getElementById('nav-close');
if (navCloseBtn) navCloseBtn.addEventListener('click', closeNav);

// Close nav when a link is clicked
if (navDrawer) navDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});



// ---- Smooth Scroll with offset for sticky nav ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = header ? header.offsetHeight + 8 : 80;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ---- Active nav link highlighting ----
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);
sections.forEach(s => sectionObserver.observe(s));

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach((el, idx) => {
          setTimeout(() => el.classList.add('visible'), idx * 80);
        });
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -60px 0px', threshold: 0.08 }
);

// Apply .reveal to key elements
const revealTargets = [
  '.about-feature-card',
  '.service-card',
  '.pipeline-step',
  '.community-card',
  '.contact-info',
  '.contact-form',
  '.section-title',
  '.section-subtitle',
];
revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});

// ---- Contact Form ----
const form       = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success-msg');
const submitBtn  = document.getElementById('form-submit');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name  = document.getElementById('form-name');
    const email = document.getElementById('form-email');
    let valid = true;

    // Simple inline validation
    [name, email].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'rgba(255, 80, 80, 0.6)';
        field.style.boxShadow   = '0 0 0 3px rgba(255,80,80,0.08)';
        valid = false;
      } else {
        field.style.borderColor = '';
        field.style.boxShadow   = '';
      }
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = 'rgba(255, 80, 80, 0.6)';
      valid = false;
    }

    if (!valid) return;

    // Simulate submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Register Interest';
      successMsg.textContent = '✓ Thank you! We\'ll be in touch soon.';
      form.reset();
      setTimeout(() => { successMsg.textContent = ''; }, 5000);
    }, 1200);
  });

  // Clear error state on input
  form.querySelectorAll('.form-input').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
      field.style.boxShadow   = '';
    });
  });
}

// ---- Footer year ----
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
