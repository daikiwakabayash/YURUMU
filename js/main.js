// Pricing tabs
document.querySelectorAll('.pricing__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pricing__tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.pricing__group').forEach(g => g.classList.remove('active'));
    document.getElementById('price-' + tab.dataset.duration).classList.add('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Staggered animation
document.querySelectorAll('.troubles__grid .reveal,.concept__points .reveal,.strengths__grid .reveal,.voices__grid .reveal,.column-grid .reveal').forEach((el, i) => {
  el.style.transitionDelay = (i * .1) + 's';
});

// Hero background fallback
const heroBg = document.querySelector('.hero__bg img');
if (heroBg) {
  heroBg.addEventListener('error', () => {
    const hero = document.querySelector('.hero');
    hero.classList.remove('hero--has-bg');
    heroBg.parentElement.remove();
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}
