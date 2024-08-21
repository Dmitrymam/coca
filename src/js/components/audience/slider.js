// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export const useHeroAudienceSlider = () => {
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
      1201: { slidesPerView: 2.5 },
      769: { spaceBetween: 32 },

      577: { spaceBetween: 20, slidesPerView: 2 },
    },
  });
};

export const useOurTeamSlider = () => {
  const insightSlider = new Swiper('.our-team__slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.our-team__btn--next',
      prevEl: '.our-team__btn--prev',
    },
    scrollbar: {
      el: '.our-team__scrollbar',
    },
    breakpoints: {
      1201: { slidesPerView: 3 },
      769: { slidesPerView: 2.5, spaceBetween: 20 },
      577: { slidesPerView: 2, spaceBetween: 15 },
      381: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      // 577: { spaceBetween: 20, slidesPerView: 2 },
    },
  });
};
