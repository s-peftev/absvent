export default (i18next) => {
  // About section
  document.querySelector('[data-text="about_p_1"]')
    .textContent = i18next.t('main.about.p_1');
  document.querySelector('[data-text="about_p_2"]')
    .textContent = i18next.t('main.about.p_2');
  document.querySelector('[data-text="about_p_3"]')
    .textContent = i18next.t('main.about.p_3');

  // Advantages section
  document.querySelector('[data-text="advantages_title"]')
    .textContent = i18next.t('main.advantages.title');

  document.querySelector('[data-text="advantages_item_1_name"]')
    .textContent = i18next.t('main.advantages.item_1.name');
  document.querySelector('[data-text="advantages_item_1_description"]')
    .textContent = i18next.t('main.advantages.item_1.description');

  document.querySelector('[data-text="advantages_item_2_name"]')
    .textContent = i18next.t('main.advantages.item_2.name');
  document.querySelector('[data-text="advantages_item_2_description"]')
    .textContent = i18next.t('main.advantages.item_2.description');

  document.querySelector('[data-text="advantages_item_3_name"]')
    .textContent = i18next.t('main.advantages.item_3.name');
  document.querySelector('[data-text="advantages_item_3_description"]')
    .textContent = i18next.t('main.advantages.item_3.description');

  document.querySelector('[data-text="advantages_item_4_name"]')
    .textContent = i18next.t('main.advantages.item_4.name');
  document.querySelector('[data-text="advantages_item_4_description"]')
    .textContent = i18next.t('main.advantages.item_4.description');
};
