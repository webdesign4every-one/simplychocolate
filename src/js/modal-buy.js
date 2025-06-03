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



// LEAVE MODAL
const openLeaveModalBtn = document.getElementById('openLeaveModalBtn');
const closeLeaveModalBtn = document.getElementById('closeLeaveModalBtn');
const leaveModal = document.querySelector('.modal-leave');

openLeaveModalBtn.addEventListener('click', () => {
  leaveModal.classList.remove('is-hidden-leave');
  document.body.style.overflow = 'hidden';
});

closeLeaveModalBtn.addEventListener('click', () => {
  leaveModal.classList.add('is-hidden-leave');
  document.body.style.overflow = '';
});
