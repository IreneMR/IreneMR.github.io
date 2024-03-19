import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import Pagination from 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/modules/pagination.min.mjs';
import Navigation from 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/modules/navigation.min.mjs';
import Scrollbar from 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/modules/scrollbar.min.mjs';
import FreeMode from 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/modules/free-mode.min.mjs';
import A11y from 'https://cdn.jsdelivr.net/npm/swiper@11.0.5/modules/a11y.min.mjs';

document.addEventListener('DOMContentLoaded', function() {
  if (!document.querySelector('[data-card-slider]')) return;

  initSlider();
});

function initSlider() {
  new Swiper('[data-card-slider]', {
    modules: [ Pagination, Navigation, Scrollbar, FreeMode, A11y ],
    pagination: {
      el: '[data-slider-pagination]',
      clickable: true
    },
    navigation: {
      nextEl: '[data-slider-next]',
      prevEl: '[data-slider-prev]',
    },
    scrollbar: {
      el: '[data-slider-scrollbar]',
    },
    slidesPerView: 'auto',
    spaceBetween: 24,
    freeMode: true,
    breakpoints: {
      768: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 60,
        freeMode: false,
      },
    },
    a11y: {
      enabled: true,
    },
  });
}
