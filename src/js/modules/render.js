import buildIndexPage from './page_builders/buildIndexPage.js';

const ROUTER = {
  '/': (i18next) => buildIndexPage(i18next),
};

const resolveRoute = (route) => {
  try {
    return ROUTER[route];
  } catch (e) {
    throw new Error(`Route ${route} not found`);
  }
};

const changeLanguage = (i18next, local) => {
  i18next.changeLanguage(local)
    .then(() => {
      document.querySelector('.lang__flag')
        .classList.toggle('lang__flag_en');
      document.querySelector('.lang__toggle')
        .classList.toggle('lang__toggle_en');
      const url = new URL(window.location);
      resolveRoute(url.pathname)(i18next);
    });
};

const burgerMenuToggle = (burgerMenuState) => {
  const header = document.querySelector('.header__container');
  const contacts = document.querySelector('.header__contacts');
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const langToggle = document.querySelector('.lang');

  nav.classList.toggle('nav_burger-active');
  langToggle.classList.toggle('header__lang');
  langToggle.classList.toggle('nav__lang');
  burger.classList.toggle('burger_active');

  switch (burgerMenuState) {
    case 'active':
      nav.prepend(langToggle);
      break;
    case 'inactive':
      header.insertBefore(langToggle, contacts);
      break;
    default:
      break;
  }
};

export default (i18next) => (path, value) => {
  switch (path) {
    case 'route':
      resolveRoute(value)(i18next);
      break;

    case 'burgerMenu':
      burgerMenuToggle(value);
      break;

    case 'local':
      changeLanguage(i18next, value);
      break;

    default:
      break;
  }
};
