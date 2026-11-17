(() => {
  const dialog = document.querySelector('.studio-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const links = [...document.querySelectorAll('[data-studio-photo]')];
  const image = dialog.querySelector('[data-photo-image]');
  const caption = dialog.querySelector('[data-photo-caption]');
  const count = dialog.querySelector('[data-photo-count]');
  let selected = 0;
  let opener;

  function show(index) {
    selected = (index + links.length) % links.length;
    const link = links[selected];
    image.alt = link.querySelector('img').alt;
    image.src = link.href;
    caption.textContent = [...link.closest('figure').querySelector('figcaption').childNodes].map(node => node.textContent.trim()).filter(Boolean).join(' ');
    count.textContent = `${selected + 1} / ${links.length}`;
  }

  links.forEach((link, index) => link.addEventListener('click', (event) => {
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    show(index);
    dialog.showModal();
  }));
  dialog.querySelector('[data-photo-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-photo-prev]').addEventListener('click', () => show(selected - 1));
  dialog.querySelector('[data-photo-next]').addEventListener('click', () => show(selected + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      const buttons = [...dialog.querySelectorAll('button')];
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(selected + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({preventScroll: true}));
})();
