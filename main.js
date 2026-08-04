/* Split-Flap Concourse
   The authored motion is the board settling: leaves hinge from the top edge and
   fall until each row lands. It happens twice, on arrival and at the close, not
   once per section. Everything is legible before it runs and instant when
   motion is reduced. */

(function () {
  'use strict';

  var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@+$%/:&';
  var TICK = 110; // ms per leaf, matched to the CSS keyframe
  var GAP = 3; // must match .flap-line gap
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function prefersReduced() {
    return reduceMotion.matches;
  }

  function randomChar() {
    return CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
  }

  function makeCell(ch, ghost) {
    var cell = document.createElement('span');
    cell.className = 'flap' + (ch === ' ' ? ' flap-space' : '') + (ghost ? ' flap-ghost' : '');
    cell.setAttribute('aria-hidden', 'true');

    var glyph = document.createElement('span');
    glyph.className = 'flap-glyph';
    glyph.textContent = ch === ' ' ? ' ' : ch;

    cell.appendChild(glyph);
    return cell;
  }

  /* ----------------------------------------------------------------------
     Build: a row of leaves, plus a real text node for assistive tech.
     ---------------------------------------------------------------------- */

  function buildFlapLine(el) {
    var text = el.getAttribute('data-flap') || '';
    el.textContent = '';

    /* Every leaf is aria-hidden, so the row carries real text for screen
       readers. aria-label on a generic span is not reliably exposed, which
       would leave these headings with no accessible name. */
    var label = document.createElement('span');
    label.className = 'visually-hidden';
    label.textContent = text;
    el.appendChild(label);

    var cells = [];

    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      var cell = makeCell(ch, false);
      el.appendChild(cell);

      if (ch !== ' ') {
        cells.push({ cell: cell, glyph: cell.firstChild, target: ch });
      }
    }

    el._flapText = text;
    el._flapCells = cells;
    el._ghosts = [];
  }

  /* ----------------------------------------------------------------------
     Layout: the matrix runs to the edge of the panel. Cells past the end of
     the row are unlit, and they are part of the design.
     ---------------------------------------------------------------------- */

  function layoutFlapLine(el) {
    var text = el._flapText;
    if (text == null) return;

    /* Only the panel rows fill to the edge. The contact address is a single
       centred row, not a matrix. */
    if (!el.closest('.flap-headline, .flap-heading')) return;

    var probe = el.querySelector('.flap');
    if (!probe) return;

    var cellW = probe.getBoundingClientRect().width;
    if (!cellW) return;

    var container = el.parentElement;
    var avail = container ? container.clientWidth : el.clientWidth;
    if (!avail) return;

    var cols = Math.floor((avail + GAP) / (cellW + GAP));
    cols = Math.max(cols, text.length);

    var want = cols - text.length;
    var have = el._ghosts.length;

    for (var i = have; i < want; i++) {
      var g = makeCell(' ', true);
      el.appendChild(g);
      el._ghosts.push(g);
    }

    for (var j = have - 1; j >= want; j--) {
      el.removeChild(el._ghosts[j]);
      el._ghosts.pop();
    }
  }

  /* ----------------------------------------------------------------------
     Settle: each leaf falls a few times, then lands on its character.
     ---------------------------------------------------------------------- */

  function settleFlapLine(el) {
    var cells = el._flapCells;
    if (!cells || el._flapDone) return;
    el._flapDone = true;

    if (prefersReduced()) return;

    cells.forEach(function (item, index) {
      var turns = 4 + (index % 5);
      var delay = index * 55;

      window.setTimeout(function () {
        var remaining = turns;
        item.cell.classList.add('is-flipping');

        var timer = window.setInterval(function () {
          remaining -= 1;
          if (remaining <= 0) {
            window.clearInterval(timer);
            item.glyph.textContent = item.target;
            item.cell.classList.remove('is-flipping');
          } else {
            item.glyph.textContent = randomChar();
          }
        }, TICK);
      }, delay);
    });
  }

  /* ----------------------------------------------------------------------
     Wiring
     ---------------------------------------------------------------------- */

  var flapLines = Array.prototype.slice.call(document.querySelectorAll('[data-flap]'));

  flapLines.forEach(buildFlapLine);

  function layoutAll() {
    flapLines.forEach(layoutFlapLine);
  }

  function whenReady(fn) {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fn);
    } else {
      window.addEventListener('load', fn);
    }
  }

  whenReady(function () {
    layoutAll();

    /* Arrival: the hero board settles as one orchestrated moment. */
    var hero = document.querySelector('.hero');
    if (hero) {
      Array.prototype.forEach.call(hero.querySelectorAll('[data-flap]'), settleFlapLine);
    }

    /* The close: the last board of the night lands when it is reached. */
    var contact = document.querySelector('.contact-email');
    if (!contact) return;

    var contactLines = Array.prototype.slice.call(contact.querySelectorAll('[data-flap]'));

    if (!('IntersectionObserver' in window)) {
      contactLines.forEach(settleFlapLine);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          settleFlapLine(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    contactLines.forEach(function (el) {
      observer.observe(el);
    });
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(layoutAll, 140);
  });

  /* ----------------------------------------------------------------------
     Expandable board rows
     ---------------------------------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll('.row-btn'), function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);
      if (!panel) return;

      var row = btn.closest('.board-row');
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;

      if (row) {
        row.classList.toggle('is-open', !isOpen);
      }
    });
  });
})();
