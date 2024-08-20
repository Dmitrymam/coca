// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export const useHeroActivitySlider = () => {
  const insightSlider = new Swiper('.hero__slider', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.hero__btn--next',
      prevEl: '.hero__btn--prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1201: { slidesPerView: 2.44, spaceBetween: 30 },
      769: { spaceBetween: 32 },

      577: { spaceBetween: 20, slidesPerView: 2 },
    },
  });
};

export const useArticleActivitySlider = () => {
  const insightSlider = new Swiper('.article__slider', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.article__head-btn--next',
      prevEl: '.article__head-btn--prev',
    },
    scrollbar: {
      el: '.article__scrollbar',
    },
    breakpoints: {
      1201: { slidesPerView: 2.94 },
      769: { spaceBetween: 32 },

      577: { spaceBetween: 20, slidesPerView: 2 },
    },
  });
};
