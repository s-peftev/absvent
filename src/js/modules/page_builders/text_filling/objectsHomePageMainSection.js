export default (i18next) => {
  document.querySelector('[data-text="objects_title"]')
    .textContent = i18next.t('objects.title');

  document.querySelector('[data-text="objects_home_label_1"]')
    .textContent = i18next.t('objects.home.label_1');
  document.querySelector('[data-text="objects_home_label_2"]')
    .textContent = i18next.t('objects.home.label_2');
  document.querySelector('[data-text="objects_home_label_3"]')
    .textContent = i18next.t('objects.home.label_3');
  document.querySelector('[data-text="objects_home_label_4"]')
    .textContent = i18next.t('objects.home.label_4');
  document.querySelector('[data-text="objects_home_label_5"]')
    .textContent = i18next.t('objects.home.label_5');
  document.querySelector('[data-text="objects_home_label_6"]')
    .textContent = i18next.t('objects.home.label_6');
  document.querySelector('[data-text="objects_home_label_7"]')
    .textContent = i18next.t('objects.home.label_7');
};
