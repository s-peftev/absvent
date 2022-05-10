export default (i18next) => {
  document.querySelector('[data-text="header_lang"]')
    .textContent = i18next.t('header.lang');

  document.querySelector('[data-text="header_contact_1"]')
    .textContent = i18next.t('header.contacts.firstContact');

  document.querySelector('[data-text="header_contact_2"]')
    .textContent = i18next.t('header.contacts.secondContact');

  document.querySelector('[data-text="nav_item_1_title"]')
    .textContent = i18next.t('header.nav.item_1.title');

  document.querySelector('[data-text="nav_item_1_link_1"]')
    .textContent = i18next.t('header.nav.item_1.link_1');

  document.querySelector('[data-text="nav_item_1_link_2"]')
    .textContent = i18next.t('header.nav.item_1.link_2');

  document.querySelector('[data-text="nav_item_1_link_3"]')
    .textContent = i18next.t('header.nav.item_1.link_3');

  document.querySelector('[data-text="nav_item_2_title"]')
    .textContent = i18next.t('header.nav.item_2.title');

  document.querySelector('[data-text="nav_item_2_link_1"]')
    .textContent = i18next.t('header.nav.item_2.link_1');

  document.querySelector('[data-text="nav_item_2_link_2"]')
    .textContent = i18next.t('header.nav.item_2.link_2');
};
