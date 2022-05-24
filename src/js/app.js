import Cookies from 'js-cookie';
import onChange from 'on-change';
import render from './modules/render.js';

export default (i18next, lang = 'uk') => {
  const state = onChange({
    burgerMenu: 'inactive',
    local: '',
  }, render(i18next));

  window.addEventListener('load', () => {
    state.local = lang;
  });

  window.addEventListener('hashchange', () => {
    state.local = lang;
  });

  document.querySelector('.header__lang').addEventListener('click', () => {
    state.local = state.local === 'uk' ? 'en' : 'uk';
    Cookies.remove('language');
    Cookies.set('language', state.local, { expires: 7, secure: true, sameSite: 'Lax' });
  });

  document.querySelector('.header__burger').addEventListener('click', () => {
    state.burgerMenu = state.burgerMenu === 'active' ? 'inactive' : 'active';
  });
};
