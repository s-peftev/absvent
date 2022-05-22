export default (i18next) => {
  // About section
  document.querySelector('[data-text="about_p_1"]')
    .textContent = i18next.t('index_page.main.about.p_1');
  document.querySelector('[data-text="about_p_2"]')
    .textContent = i18next.t('index_page.main.about.p_2');
  document.querySelector('[data-text="about_p_3"]')
    .textContent = i18next.t('index_page.main.about.p_3');

  // Advantages section
  document.querySelector('[data-text="advantages_title"]')
    .textContent = i18next.t('index_page.main.advantages.title');

  document.querySelector('[data-text="advantages_item_1_name"]')
    .textContent = i18next.t('index_page.main.advantages.item_1.name');
  document.querySelector('[data-text="advantages_item_1_description"]')
    .textContent = i18next.t('index_page.main.advantages.item_1.description');

  document.querySelector('[data-text="advantages_item_2_name"]')
    .textContent = i18next.t('index_page.main.advantages.item_2.name');
  document.querySelector('[data-text="advantages_item_2_description"]')
    .textContent = i18next.t('index_page.main.advantages.item_2.description');

  document.querySelector('[data-text="advantages_item_3_name"]')
    .textContent = i18next.t('index_page.main.advantages.item_3.name');
  document.querySelector('[data-text="advantages_item_3_description"]')
    .textContent = i18next.t('index_page.main.advantages.item_3.description');

  document.querySelector('[data-text="advantages_item_4_name"]')
    .textContent = i18next.t('index_page.main.advantages.item_4.name');
  document.querySelector('[data-text="advantages_item_4_description"]')
    .textContent = i18next.t('index_page.main.advantages.item_4.description');

  // Order-info section
  document.querySelector('[data-text="order-info_title"]')
    .textContent = i18next.t('index_page.main.order-info.title');
  document.querySelector('[data-text="order-info_p_1"]')
    .textContent = i18next.t('index_page.main.order-info.p_1');
  document.querySelector('[data-text="order-info_p_2"]')
    .textContent = i18next.t('index_page.main.order-info.p_2');

  // Schemas section
  document.querySelector('[data-text="schemas_title"]')
    .textContent = i18next.t('index_page.main.schemas.title');
  document.querySelectorAll('[data-text="schemas_btn"]')
    .forEach((btn) => {
      btn.textContent = i18next.t('index_page.main.schemas.btn');
    });

  document.querySelector('[data-text="schema_1_name_start"]')
    .textContent = i18next.t('index_page.main.schemas.schema_1.name.start');
  document.querySelector('[data-text="schema_1_name_middle"]')
    .textContent = i18next.t('index_page.main.schemas.schema_1.name.middle');
  document.querySelector('[data-text="schema_1_name_end"]')
    .textContent = i18next.t('index_page.main.schemas.schema_1.name.end');
  document.querySelector('[data-text="schema_1_description"]')
    .textContent = i18next.t('index_page.main.schemas.schema_1.description');

  document.querySelector('[data-text="schema_2_name_start"]')
    .textContent = i18next.t('index_page.main.schemas.schema_2.name.start');
  document.querySelector('[data-text="schema_2_name_middle"]')
    .textContent = i18next.t('index_page.main.schemas.schema_2.name.middle');
  document.querySelector('[data-text="schema_2_name_end"]')
    .textContent = i18next.t('index_page.main.schemas.schema_2.name.end');
  document.querySelector('[data-text="schema_2_description"]')
    .textContent = i18next.t('index_page.main.schemas.schema_2.description');

  document.querySelector('[data-text="schema_3_name_start"]')
    .textContent = i18next.t('index_page.main.schemas.schema_3.name.start');
  document.querySelector('[data-text="schema_3_name_middle"]')
    .textContent = i18next.t('index_page.main.schemas.schema_3.name.middle');
  document.querySelector('[data-text="schema_3_name_end"]')
    .textContent = i18next.t('index_page.main.schemas.schema_3.name.end');
  document.querySelector('[data-text="schema_3_description"]')
    .textContent = i18next.t('index_page.main.schemas.schema_3.description');

  // Our team section
  document.querySelector('[data-text="team_title"]')
    .textContent = i18next.t('index_page.main.team.title');

  document.querySelector('[data-text="team_item_1_name"]')
    .textContent = i18next.t('index_page.main.team.item_1.name');
  document.querySelector('[data-text="team_item_1_position"]')
    .textContent = i18next.t('index_page.main.team.item_1.position');

  document.querySelector('[data-text="team_item_2_name"]')
    .textContent = i18next.t('index_page.main.team.item_2.name');
  document.querySelector('[data-text="team_item_2_position"]')
    .textContent = i18next.t('index_page.main.team.item_2.position');

  document.querySelector('[data-text="team_item_3_name"]')
    .textContent = i18next.t('index_page.main.team.item_3.name');
  document.querySelector('[data-text="team_item_3_position"]')
    .textContent = i18next.t('index_page.main.team.item_3.position');

  document.querySelector('[data-text="team_item_4_name"]')
    .textContent = i18next.t('index_page.main.team.item_4.name');
  document.querySelector('[data-text="team_item_4_position"]')
    .textContent = i18next.t('index_page.main.team.item_4.position');

  // Portfolio section
  document.querySelector('[data-text="portfolio-slider_title"]')
    .textContent = i18next.t('index_page.main.portfolio-slider.title');
};
