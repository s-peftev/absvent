export default (i18next) => {
  document.querySelector('[data-text="footer_contact_1"]')
    .textContent = i18next.t('footer.contact_1');

  document.querySelector('[data-text="footer_contact_2"]')
    .textContent = i18next.t('footer.contact_2');

  document.querySelector('[data-text="footer_email"]')
    .textContent = i18next.t('footer.email');
};
