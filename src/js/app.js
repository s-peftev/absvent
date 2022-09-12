import Cookies from 'js-cookie';
import onChange from 'on-change';
import render from './modules/render.js';

const initialState = {
  burgerMenu: 'inactive',
  local: '',
};

export default (i18next, lang = 'uk', state = initialState) => {
  let observedState;

  const setLocal = (local) => {
    observedState.local = local;
  };

  observedState = onChange(state, render(i18next));

  window.addEventListener('load', () => {
    setLocal(lang);
  });

  window.addEventListener('hashchange', () => {
    setLocal(lang);
  });

  document.querySelector('.header__lang').addEventListener('click', () => {
    setLocal(state.local === 'uk' ? 'en' : 'uk');
    Cookies.remove('language');
    Cookies.set('language', state.local, { expires: 7, secure: false, sameSite: 'Lax' });
  });

  document.querySelector('.header__burger').addEventListener('click', () => {
    observedState.burgerMenu = state.burgerMenu === 'active' ? 'inactive' : 'active';
  });
};
