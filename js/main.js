// =====================================================================
// TETAPAN WHATSAPP: tukar di sini sahaja.
// Format Malaysia: 601XXXXXXXX (tanpa +, sengkang atau ruang).
// Nombor rasmi: Aimanul Hakim 013-251 0181
// =====================================================================
const WHATSAPP_NUMBER = '60132510181';
const DEFAULT_MESSAGE = 'Assalamualaikum, saya nak tahu tentang Haiyat Global Group.';

document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Pautan WhatsApp ---------- */
(function setupWhatsApp(){
  const valid = /^60\d{9,11}$/.test(WHATSAPP_NUMBER);
  document.querySelectorAll('.wa-link').forEach(link => {
    if (!valid) {
      link.href = '#hubungi';
      link.removeAttribute('target');
      return;
    }
    const msg = link.dataset.message || DEFAULT_MESSAGE;
    link.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  });
  if (!valid) console.warn('Haiyat: WHATSAPP_NUMBER tidak sah. Sila kemas kini dalam js/main.js.');
})();

/* ---------- Tahun footer ---------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Navigasi: latar bila skrol + menu mudah alih ---------- */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

function setMenu(open){
  navlinks.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  hamburger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  if (open) nav.classList.add('scrolled'); else onScroll();
}
hamburger.addEventListener('click', () => setMenu(!navlinks.classList.contains('open')));
navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navlinks.classList.contains('open')) { setMenu(false); hamburger.focus(); }
});
window.matchMedia('(min-width: 961px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

/* ---------- Animasi skrol ringan + kiraan nombor ---------- */
function countUp(el){
  const target = parseInt(el.dataset.count, 10);
  const width = el.textContent.trim().length;
  const fmt = n => String(n).padStart(width, '0');
  if (reduceMotion || isNaN(target)) { el.textContent = fmt(target); return; }
  const duration = 1200;
  const start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('[data-count]').forEach(countUp);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

/* ---------- Lightbox galeri ---------- */
(function setupLightbox(){
  const dialog = document.getElementById('lightbox');
  const items = Array.from(document.querySelectorAll('#gallery .gallery-item'));
  if (!dialog || typeof dialog.showModal !== 'function' || !items.length) return;

  const img = document.getElementById('lb-img');
  const cap = document.getElementById('lb-cap');
  let index = 0;
  let opener = null;

  function show(i){
    index = (i + items.length) % items.length;
    const item = items[index];
    img.src = item.dataset.full;
    img.alt = item.querySelector('img').alt;
    cap.textContent = item.dataset.caption + '  ·  ' + (index + 1) + ' / ' + items.length;
  }

  items.forEach((item, i) => item.addEventListener('click', () => {
    opener = item;
    show(i);
    dialog.showModal();
  }));

  dialog.addEventListener('click', e => {
    const action = e.target.closest('[data-lb]')?.dataset.lb;
    if (action === 'close' || e.target === dialog) dialog.close();
    else if (action === 'prev') show(index - 1);
    else if (action === 'next') show(index + 1);
  });
  dialog.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  dialog.addEventListener('close', () => opener && opener.focus());

  // Leret (swipe) pada telefon
  let startX = null;
  dialog.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  dialog.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();
