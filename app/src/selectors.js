export const selectorProfile = {
  personalInformation: {
    name: "div.ph5.pb5 > div.display-flex.mt2 ul li",
    title: "div.ph5.pb5 > div.display-flex.mt2 h2",
    resume: 'section.pv-about-section > p'
  },
  experienceInformation: {
    list: '#experience-section > ul > li',
    groupByCompany: {
      identify: '.pv-entity__position-group',
      company: 'div.pv-entity__company-summary-info > h3 > span:nth-child(2)',
      list: 'section > ul > li',
      title: 'div > div > div > div > div > div > h3 > span:nth-child(2)',
      date: 'div > div > div > div > div > div > div > h4 > span:nth-child(2)',
      description: '.pv-entity__description'
    },
    default: {
      title: 'section > div > div > a > div.pv-entity__summary-info > h3',
      company: 'section > div > div > a > div.pv-entity__summary-info > p.pv-entity__secondary-title',
      date: 'section > div > div > a > div.pv-entity__summary-info > div > h4.pv-entity__date-range > span:nth-child(2)',
      description: 'section > div > div > div > p'
    }
  },
  educationInformation: {
    list: '#education-section > ul > li',
    institution: 'div > div > a > div.pv-entity__summary-info > div > h3',
    career: 'div > div > a > div.pv-entity__summary-info > div > p > span:nth-child(2)',
    date: 'div > div > a > div.pv-entity__summary-info > p > span:nth-child(2)'
  }
}

export const selectorSearch = "input.search-global-typeahead__input.always-show-placeholder"
export const selectorSearchJustPeopleBtn = "button.artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.ember-view.search-reusables__filter-pill-button"