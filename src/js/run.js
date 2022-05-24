import i18next from 'i18next';
import Cookies from 'js-cookie';
import resources from './resources.js';
import app from './app.js';

export default () => {
  const i18nextInstance = i18next.createInstance();
  let lang;

  if (Cookies.get('language')) {
    lang = Cookies.get('language');
  } else {
    lang = 'uk';
    Cookies.set('language', 'uk', { expires: 7, secure: true, sameSite: 'Lax' });
  }

  i18nextInstance
    .init({
      lng: lang,
      debug: false,
      resources,
    })
    .then(() => {
      app(i18nextInstance, lang);
    });
};
