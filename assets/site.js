(() => {
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Header stats, counted from the page so they never drift.
  const stats = document.querySelector('[data-stats]');
  if (stats) {
    const projects = $$('[data-project]').length;
    const live = $$('.badge.live').length;
    stats.textContent = `${projects} projects · ${live} live sites · built in public`;
  }

  // Category filters (shown only when scripts run).
  const bar = document.querySelector('.filters');
  if (bar) {
    bar.hidden = false;
    bar.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      const filter = button.dataset.filter;
      $$('button[data-filter]', bar).forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      $$('.feature, .card').forEach((item) => {
        item.hidden = filter !== 'all' && item.dataset.cat !== filter;
      });
      const featured = document.querySelector('.featured');
      if (featured) featured.hidden = $$('.feature', featured).every((item) => item.hidden);
      const empty = document.querySelector('.grid-empty');
      if (empty) empty.hidden = $$('.grid .card').some((item) => !item.hidden);
    });
  }

  // Header solar system: drag a planet off its orbit and it springs back; a flick along the
  // orbit spins it up for a few seconds; clicking the sun sends out a pulse. Without scripts
  // the planets keep their CSS spin.
  const orbit = document.querySelector('.orbit');
  if (orbit && window.DOMPoint) {
    const NS = 'http://www.w3.org/2000/svg';
    const C = 200; // orbit centre in viewBox units
    const PULL = 70; // how far a planet stretches before the pull stiffens
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const toSvg = (e) => new DOMPoint(e.clientX, e.clientY).matrixTransform(orbit.getScreenCTM().inverse());

    const hint = document.createElementNS(NS, 'text');
    hint.setAttribute('class', 'hint');
    hint.setAttribute('x', C);
    hint.setAttribute('y', 412);
    hint.textContent = 'DRAG A PLANET';
    orbit.appendChild(hint);
    const used = () => hint.classList.add('gone');

    const planets = $$('.planet', orbit).map((g) => {
      const body = g.querySelector('circle');
      const x0 = +body.getAttribute('cx');
      const y0 = +body.getAttribute('cy');
      const tether = document.createElementNS(NS, 'line');
      tether.setAttribute('class', 'tether');
      orbit.insertBefore(tether, g);
      const hit = document.createElementNS(NS, 'circle');
      hit.setAttribute('class', 'hit');
      hit.setAttribute('cx', x0);
      hit.setAttribute('cy', y0);
      hit.setAttribute('r', 24);
      g.appendChild(hit);
      g.classList.remove('spin');
      g.style.animation = 'none';
      return {
        g, x0, y0, tether,
        r: Math.hypot(x0 - C, y0 - C),
        angle: Math.atan2(y0 - C, x0 - C),
        speed: (2 * Math.PI) / Number(g.dataset.period),
        boost: 0, dx: 0, dy: 0, vx: 0, vy: 0, drag: null,
      };
    });

    const draw = () => planets.forEach((p) => {
      const bx = C + p.r * Math.cos(p.angle);
      const by = C + p.r * Math.sin(p.angle);
      p.g.setAttribute('transform', `translate(${(bx + p.dx - p.x0).toFixed(2)} ${(by + p.dy - p.y0).toFixed(2)})`);
      p.tether.setAttribute('x1', bx.toFixed(2));
      p.tether.setAttribute('y1', by.toFixed(2));
      p.tether.setAttribute('x2', (bx + p.dx).toFixed(2));
      p.tether.setAttribute('y2', (by + p.dy).toFixed(2));
      p.tether.style.opacity = Math.min(1, Math.hypot(p.dx, p.dy) / 24) * 0.7;
    });

    planets.forEach((p) => {
      p.g.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        p.g.setPointerCapture(e.pointerId);
        const s = toSvg(e);
        p.drag = { sx: s.x, sy: s.y, dx: p.dx, dy: p.dy, lx: s.x, ly: s.y, t: e.timeStamp, vx: 0, vy: 0 };
        orbit.classList.add('dragging');
        used();
      });
      p.g.addEventListener('pointermove', (e) => {
        if (!p.drag) return;
        const s = toSvg(e);
        let dx = p.drag.dx + s.x - p.drag.sx;
        let dy = p.drag.dy + s.y - p.drag.sy;
        const len = Math.hypot(dx, dy);
        if (len > 0) { // rubber band: easy at first, then stiffer
          const k = (PULL * Math.tanh(len / PULL)) / len;
          dx *= k;
          dy *= k;
        }
        const dt = Math.max(1, e.timeStamp - p.drag.t) / 1000;
        p.drag.vx = (s.x - p.drag.lx) / dt;
        p.drag.vy = (s.y - p.drag.ly) / dt;
        Object.assign(p.drag, { lx: s.x, ly: s.y, t: e.timeStamp });
        Object.assign(p, { dx, dy, vx: 0, vy: 0 });
        if (still) draw();
      });
      const release = (e) => {
        if (!p.drag) return;
        if (e.timeStamp - p.drag.t < 80) { // only a moving release counts as a flick
          const along = p.drag.vx * -Math.sin(p.angle) + p.drag.vy * Math.cos(p.angle);
          p.boost = Math.max(-5, Math.min(5, p.boost + along / p.r / 2));
        }
        p.drag = null;
        orbit.classList.remove('dragging');
        if (still) {
          p.dx = 0;
          p.dy = 0;
          draw();
        }
      };
      p.g.addEventListener('pointerup', release);
      p.g.addEventListener('pointercancel', release);
    });

    const sun = orbit.querySelector('.sun');
    if (sun) {
      sun.addEventListener('click', () => {
        used();
        if (still) return;
        const ring = document.createElementNS(NS, 'circle');
        ring.setAttribute('class', 'ripple');
        ring.setAttribute('cx', C);
        ring.setAttribute('cy', C);
        ring.setAttribute('r', 22);
        ring.addEventListener('animationend', () => ring.remove());
        orbit.insertBefore(ring, sun);
        planets.forEach((p) => { // the pulse nudges every planet outward
          p.vx += Math.cos(p.angle) * 160;
          p.vy += Math.sin(p.angle) * 160;
        });
      });
    }

    draw();
    if (!still) {
      // site.css hides the orbit at this width; stop animating while it's hidden. Browsers
      // already pause animation frames in background tabs.
      const phone = matchMedia('(max-width: 760px)');
      let last = 0;
      let running = false;
      const tick = (now) => {
        if (phone.matches) {
          running = false;
          return;
        }
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        planets.forEach((p) => {
          p.angle += (p.speed + p.boost) * dt;
          p.boost *= Math.exp(-dt / 2.5);
          if (!p.drag) { // springy return to the orbit
            p.vx += (-90 * p.dx - 9 * p.vx) * dt;
            p.vy += (-90 * p.dy - 9 * p.vy) * dt;
            p.dx += p.vx * dt;
            p.dy += p.vy * dt;
          }
        });
        draw();
        requestAnimationFrame(tick);
      };
      const start = () => {
        if (running) return;
        running = true;
        last = performance.now();
        requestAnimationFrame(tick);
      };
      phone.addEventListener('change', start);
      start();
    }
  }

  // "Updated X ago" from each repository's last push on GitHub.
  const ago = (iso) => {
    const days = Math.floor((Date.now() - new Date(iso).getTime()) / 864e5);
    if (days < 1) return 'updated today';
    if (days < 2) return 'updated yesterday';
    if (days < 14) return `updated ${days} days ago`;
    if (days < 60) return `updated ${Math.round(days / 7)} weeks ago`;
    if (days < 365) return `updated ${Math.round(days / 30)} months ago`;
    const years = Math.round(days / 365);
    return `updated ${years} year${years > 1 ? 's' : ''} ago`;
  };
  const apply = (pushed) => {
    $$('[data-repo]').forEach((item) => {
      const when = pushed[item.dataset.repo.toLowerCase()];
      const out = item.querySelector('.updated');
      if (when && out) {
        out.textContent = ago(when);
        out.title = `Last push ${new Date(when).toLocaleDateString()}`;
      }
    });
  };
  const KEY = 'tboy450-repo-pushes';
  try {
    const cached = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    if (cached && Date.now() - cached.at < 36e5) {
      apply(cached.pushed);
      return;
    }
  } catch (e) { /* ignore storage errors */ }
  fetch('https://api.github.com/users/Tboy450/repos?per_page=100')
    .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
    .then((repos) => {
      const pushed = {};
      repos.forEach((repo) => { pushed[repo.name.toLowerCase()] = repo.pushed_at; });
      try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), pushed })); } catch (e) { /* ignore */ }
      apply(pushed);
    })
    .catch(() => { /* dates are optional */ });
})();
