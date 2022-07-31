import buildIndexPage from './page_builders/buildIndexPage.js';
import buildWallTypePage from './page_builders/buildWallTypePage.js';
import buildDuctTypePage from './page_builders/buildDuctTypePage.js';
import buildCentralizedTypePage from './page_builders/buildCentralizedTypePage.js';
import buildExamplePage from './page_builders/buildExamplePage.js';
import buildObjectsHomePage from './page_builders/buildObjectsHomePage.js';
import buildObjectsOtherPage from './page_builders/buildObjectsOtherPage.js';

const ROUTER = {
  '/': (i18next, setSelectedProjectType) => buildIndexPage(i18next, setSelectedProjectType),
  '/wall-type.html': (i18next) => buildWallTypePage(i18next),
  '/duct-type.html': (i18next) => buildDuctTypePage(i18next),
  '/centralized-type.html': (i18next) => buildCentralizedTypePage(i18next),
  '/example.html': (i18next) => buildExamplePage(i18next),
  '/objects-home.html': (i18next) => buildObjectsHomePage(i18next),
  '/objects-other.html': (i18next) => buildObjectsOtherPage(i18next),
};

const resolveRoute = (route) => {
  try {
    return ROUTER[route];
  } catch (e) {
    throw new Error(`Route ${route} not found`);
  }
};

const renderPage = (i18next, route, action) => {
  const render = resolveRoute(route);
  render(i18next, action);
};

const changeLanguage = (i18next, local, action) => {
  i18next.changeLanguage(local)
    .then(() => {
      switch (local) {
        case 'uk':
          document.querySelector('.lang__flag')
            .classList.remove('lang__flag_en');
          document.querySelector('.lang__toggle')
            .classList.remove('lang__toggle_en');
          break;
        case 'en':
          document.querySelector('.lang__flag')
            .classList.add('lang__flag_en');
          document.querySelector('.lang__toggle')
            .classList.add('lang__toggle_en');
          break;
        default:
          break;
      }
      const url = new URL(window.location);
      renderPage(i18next, url.pathname, action);
    });
};

const burgerMenuToggle = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('.header__menu');
  const burger = document.querySelector('.burger');

  body.classList.toggle('body_lock');
  menu.classList.toggle('header__menu_active');
  burger.classList.toggle('burger_active');
};

const selectProjectType = (value) => {
  document.querySelector('.project-types__switch').style.display = 'none';
  document.querySelector(`#${value}_tab_control`).checked = true;
  const tabs = document.querySelector('.project-types__tabs');
  tabs.style.display = 'block';
  tabs.scrollIntoView();
};

export default (i18next, action) => (path, value) => {
  switch (path) {
    case 'burgerMenu':
      burgerMenuToggle();
      break;

    case 'local':
      changeLanguage(i18next, value, action);
      break;

    case 'selectedProjectType':
      selectProjectType(value);
      break;

    default:
      break;
  }
};
