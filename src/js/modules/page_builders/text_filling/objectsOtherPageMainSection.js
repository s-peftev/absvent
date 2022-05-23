export default (i18next) => {
  document.querySelector('[data-text="objects_title"]')
    .textContent = i18next.t('objects.title');

  document.querySelector('[data-text="objects_other_label_1"]')
    .textContent = i18next.t('objects.other.label_1');
  document.querySelector('[data-text="objects_other_label_2"]')
    .textContent = i18next.t('objects.other.label_2');
  document.querySelector('[data-text="objects_other_label_3"]')
    .textContent = i18next.t('objects.other.label_3');
  document.querySelector('[data-text="objects_other_label_4"]')
    .textContent = i18next.t('objects.other.label_4');
  document.querySelector('[data-text="objects_other_label_5"]')
    .textContent = i18next.t('objects.other.label_5');
  document.querySelector('[data-text="objects_other_label_6"]')
    .textContent = i18next.t('objects.other.label_6');
  document.querySelector('[data-text="objects_other_label_7"]')
    .textContent = i18next.t('objects.other.label_7');
  document.querySelector('[data-text="objects_other_label_8"]')
    .textContent = i18next.t('objects.other.label_8');
};
