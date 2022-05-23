import Splide from '@splidejs/splide';
import textifyHeader from './text_filling/header.js';
import textifyFooter from './text_filling/footer.js';
import textifyMain from './text_filling/objectsHomePageMainSection.js';

export default (i18next) => {
  // Page text filling
  textifyHeader(i18next);
  textifyFooter(i18next);
  textifyMain(i18next);

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
