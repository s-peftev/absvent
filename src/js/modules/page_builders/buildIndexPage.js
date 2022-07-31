import Splide from '@splidejs/splide';
import fillText from '../fillText.js';

export default (i18next) => {
  // Page text filling
  fillText('header', i18next);
  fillText('index', i18next);
  fillText('footer', i18next);

  // Sliders
  new Splide('.logo-slider', {
    type: 'loop',
    perPage: 8,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    speed: 2000,
    arrows: false,
    gap: '1em',
    pauseOnHover: false,
  }).mount();

  new Splide('.portfolio-slider', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    speed: 2000,
    arrows: false,
    gap: '1em',
    pauseOnHover: false,
  }).mount();
};
