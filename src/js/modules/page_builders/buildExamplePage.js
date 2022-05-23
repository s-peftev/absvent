import textifyHeader from './text_filling/header.js';
import textifyFooter from './text_filling/footer.js';
import textifyMain from './text_filling/examplePageMainSection.js';

export default (i18next) => {
  // Page text filling
  textifyHeader(i18next);
  textifyFooter(i18next);
  textifyMain(i18next);
};
