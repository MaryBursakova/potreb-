(() => {
  const btn = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  const form = document.querySelector('[data-form]');
  const status = document.querySelector('[data-status]');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const d = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent(`Исследование Lanny — ${d.company || d.name}`);
      const body = encodeURIComponent(
`Имя: ${d.name}
Компания: ${d.company || '—'}
E-mail: ${d.email}
Телефон: ${d.phone}
Формат: ${d.type}

Задача:
${d.message || '—'}`
      );
      if (status) status.textContent = 'Открываем письмо с заполненной заявкой';
      location.href = `mailto:rnd@lanny.group?subject=${subject}&body=${body}`;
    });
  }
})();