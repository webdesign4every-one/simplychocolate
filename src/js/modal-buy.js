document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('modal');

  if (!openBtn || !closeBtn || !modal) return;

  openBtn.addEventListener('click', () => {
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('is-hidden');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('is-hidden');
      document.body.style.overflow = '';
    }
  });

  // Закрытие по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modal.classList.add('is-hidden');
      document.body.style.overflow = '';
    }
  });
});
