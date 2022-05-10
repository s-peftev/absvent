import textifyHeader from './text_filling/header.js';

export default (i18next) => {
  // Page text filling
  textifyHeader(i18next);
  document.querySelector('[data-text="parallax_title"]')
    .textContent = i18next.t('parallax.title');
};
