// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export const usePartnersMobileSlider = () => {
  const insightSlider = new Swiper('.partners__slider', {
    loop: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false,
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      450: {
        slidesPerView: 3,
      },
      380: {
        slidesPerView: 2.5,
      },
    },
  });
};
