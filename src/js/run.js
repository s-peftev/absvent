import i18next from 'i18next';
import resources from './resources.js';
import app from './app.js';

export default () => {
  const i18nextInstance = i18next.createInstance();
  i18nextInstance
    .init({
      lng: 'uk',
      debug: false,
      resources,
    })
    .then(() => {
      app(i18nextInstance);
    });
};
