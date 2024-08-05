// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:

export const useInsightSlider = () => {
  const insightSlider = new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 33,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
