import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initSwiper() {
  const swiper = new Swiper('.pets-swiper', {
    // Optional parameters
    direction: 'horizontal',

    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    modules: [Navigation],

    breakpoints: {
      738: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true,
        spaceBetween: 40,
      },

      1164: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        spaceBetween: 90,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.pets-swiper__next-butt',
      prevEl: '.pets-swiper__prev-butt',
    },
  });
}
