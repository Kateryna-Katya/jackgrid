import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Navigation, Autoplay]);

const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
  },
});

const similarSwiper = new Swiper('.similar-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.similar-next',
    prevEl: '.similar-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
  },
});
