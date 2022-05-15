import Splide from '@splidejs/splide';
import textifyHeader from './text_filling/header.js';
import textifyMain from './text_filling/indexPageMainSection.js';

export default (i18next) => {
  // Page text filling
  textifyHeader(i18next);

  document.querySelector('[data-text="parallax_title"]')
    .textContent = i18next.t('parallax.title');

  textifyMain(i18next);

  // Slider
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
};
