import Splide from '@splidejs/splide';
import fillText from '../fillText.js';

export default (i18next) => {
  // Page text filling
  fillText('header', i18next);
  fillText('homeSystems', i18next);
  fillText('footer', i18next);

  // Portfolio sliders
  const portfolioSliders = document.querySelectorAll('.portfolio__slider');
  portfolioSliders.forEach((portfolioSlider) => {
    new Splide(`#${portfolioSlider.id}`, {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      speed: 2000,
    }).mount();
  });
};
