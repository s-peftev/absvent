import onChange from 'on-change';
import render from './modules/render.js';

export default (i18next) => {
  const state = onChange({
    route: '',
    burgerMenu: 'inactive',
    local: 'uk',
  }, render(i18next));

  window.addEventListener('load', () => {
    const url = new URL(window.location);
    state.route = url.pathname;
  });

  window.addEventListener('hashchange', () => {
    const url = new URL(window.location);
    state.route = url.pathname;
  });

  document.querySelector('.header__lang').addEventListener('click', () => {
    state.local = state.local === 'uk' ? 'en' : 'uk';
  });

  document.querySelector('.burger').addEventListener('click', () => {
    state.burgerMenu = state.burgerMenu === 'active' ? 'inactive' : 'active';
  });
};
