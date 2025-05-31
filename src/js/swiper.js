import Swiper from 'swiper';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';

console.log(
  'Swiper slides:',
  document.querySelectorAll('.swiper-slide').length
);
const swiper = new Swiper('.review-swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
