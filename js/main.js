/* ============================================================
   ATELIER & JARDIN — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── MOBILE NAV TOGGLE ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    // Fermer au clic extérieur
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }

  // ── LIEN ACTIF DANS LA NAV ────────────────────────────────
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
    }
  });

  // ── FADE-IN AU SCROLL ─────────────────────────────────────
  // Les éléments avec data-scroll apparaissent quand ils entrent dans le viewport
  var scrollEls = document.querySelectorAll('[data-scroll]');
  if ('IntersectionObserver' in window && scrollEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    scrollEls.forEach(function (el) { io.observe(el); });
  }

  // ── CASES À COCHER INTERACTIVES (pages tuto) ───────────────
  document.querySelectorAll('.check-box').forEach(function (box) {
    box.addEventListener('click', function () {
      var checked = this.dataset.checked === 'true';
      this.dataset.checked = checked ? 'false' : 'true';
      this.textContent = checked ? '□' : '✓';
      this.style.color  = checked ? '' : 'var(--moss)';
      this.style.background = checked ? '' : 'rgba(90,107,69,.1)';
      // Barrer le texte de la ligne
      var row = this.closest('.check-row');
      if (row) {
        var p = row.querySelector('p');
        if (p) p.style.opacity = checked ? '1' : '0.45';
      }
    });
  });

  // ── SMOOTH BACK BUTTON ────────────────────────────────────
  var backLink = document.querySelector('.back-link');
  if (backLink && backLink.getAttribute('href') === '#') {
    backLink.addEventListener('click', function (e) {
      e.preventDefault();
      history.back();
    });
  }

});
