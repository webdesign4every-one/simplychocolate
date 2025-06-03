document.querySelector('.scroll-link').addEventListener('click', function (e) {
  e.preventDefault(); // предотвращает переход по ссылке, если это <a>

  const element = document.querySelector('#footer');
  const topPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
});
