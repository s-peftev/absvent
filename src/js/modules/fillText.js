/* eslint-disable no-param-reassign */

const fillText = (sectionName, i18next) => {
  const dataAttr = `[data-${sectionName}-text]`;
  const dataSetName = `${sectionName.toLowerCase()}Text`;

  const elementsToBeFilled = document.querySelectorAll(dataAttr);
  elementsToBeFilled.forEach((element) => {
    element.textContent = i18next.t(`${sectionName}.${element.dataset[dataSetName]}`);
  });
};

export default fillText;
