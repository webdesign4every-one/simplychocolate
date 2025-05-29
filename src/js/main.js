async function loadComponents() {
  // Открытие/закрытие меню хедера
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  } else {
    console.error('Не найдены элементы меню:', refs);
  }
}

//Воспроизведение видео
function playVideo(container) {
  const videoId = 'youtube-video';
  const iframe = container.querySelector('.video-iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`;
  iframe.style.display = 'block';

  container.querySelector('.video-thumbnail').style.display = 'none';
  container.querySelector('.custom-play-button').style.display = 'none';
}

loadComponents();