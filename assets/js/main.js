/* =========================================================================
   Abdullah Shaikh — Portfolio v2
   Vanilla port of the Claude Design canvas component:
     - accent colour custom property
     - reveal-on-scroll
     - subtle vertical parallax on framed images (frame drifts, art never
       scales, so visuals stay uncropped)
   ========================================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');

  /* ----------  Accent colour  ----------
     Optional override via <html data-accent="olive"> or ?accent=#5f6b86      */
  var PALETTE = {
    clay:  '#a8703f',
    olive: '#6f7f6a',
    plum:  '#9a6a7a',
    slate: '#5f6b86'
  };
  var requested =
    new URLSearchParams(location.search).get('accent') ||
    root.dataset.accent ||
    '';
  var accent = PALETTE[requested.toLowerCase()] ||
    (/^#[0-9a-f]{3,8}$/i.test(requested) ? requested : '#a8703f');
  root.style.setProperty('--accent', accent);

  var PARALLAX_STRENGTH = 14; // px
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =======================================================================
     Reveal on scroll
     ======================================================================= */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  function showAll() {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    showAll();
  } else {
    // Anything already within (or above) the viewport on load: show at once.
    var vh0 = window.innerHeight;
    revealables.forEach(function (el) {
      if (el.getBoundingClientRect().top < vh0 * 0.9) el.classList.add('is-visible');
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });

    revealables.forEach(function (el) {
      if (!el.classList.contains('is-visible')) io.observe(el);
    });
  }

  /* =======================================================================
     Header shadow — only once the page has scrolled
     ======================================================================= */
  var header = document.querySelector('.site-header');

  if (header) {
    var stuck = false;

    function syncHeader() {
      var should = window.scrollY > 8;
      if (should !== stuck) {
        stuck = should;
        header.classList.toggle('is-stuck', stuck);
      }
    }

    window.addEventListener('scroll', syncHeader, { passive: true });
    syncHeader();
  }

  /* =======================================================================
     Parallax — drift the frame, never the artwork
     ======================================================================= */
  if (!reduceMotion) {
    var frames = Array.prototype.slice
      .call(document.querySelectorAll('[data-parallax]'))
      .map(function (img) { return img.parentElement || img; });

    var ticking = false;

    function update() {
      ticking = false;
      var vh = window.innerHeight;
      for (var i = 0; i < frames.length; i++) {
        var fr = frames[i];
        var r = fr.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        fr.style.transform = 'translate3d(0,' + (-p * PARALLAX_STRENGTH).toFixed(2) + 'px,0)';
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }
})();
