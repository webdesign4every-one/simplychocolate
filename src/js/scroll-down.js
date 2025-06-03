document.querySelector('.scroll-link').addEventListener('click', function (e) {
  e.preventDefault(); // предотвращает переход по ссылке, если это <a>

  const element = document.querySelector('#footer');
  const topPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
});

//How its made
document.querySelector('.how-scroll').addEventListener('click', function (e) {
  e.preventDefault(); // предотвращает переход по ссылке, если это <a>

  const element = document.querySelector('#how');
  const topPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
});

//our
document.querySelector('.our-scroll').addEventListener('click', function (e) {
  e.preventDefault(); // предотвращает переход по ссылке, если это <a>

  const element = document.querySelector('#our');
  const topPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
});

//top
document.querySelector('.top-scroll').addEventListener('click', function (e) {
  e.preventDefault(); // предотвращает переход по ссылке, если это <a>

  const element = document.querySelector('#top');
  const topPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
});

//review
document.querySelector('.review-scroll').addEventListener('click', function (e) {
  e.preventDefault(); // предотвращает переход по ссылке, если это <a>

  const element = document.querySelector('#review');
  const topPosition = element.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: topPosition,
    behavior: 'smooth',
  });
});