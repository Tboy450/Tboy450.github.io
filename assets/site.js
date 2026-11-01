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
