let scrapBtn = document.getElementById('scrap-profile')

scrapBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  if (!!tab) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: scrapingProfile,
    });
  }
})

const scrapingProfile = () => {
  const waitFor = function (milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, milliseconds);
    });
  };
  // Selects Profile section parent element
  const profileContainer = document.querySelector("div.ph5.pb5 > div.display-flex.mt2")
  // select children from the parent
  const name = profileContainer.querySelector("ul li.inline")?.innerText || ''
  const title = profileContainer.querySelector("h2")?.innerText || ''
  const location = profileContainer.querySelector("ul li.t-16")?.innerText || ''

  // I search the "see more" btn
  const elementMoreResume = document.getElementById('line-clamp-show-more-button')
  // I click it to see more just if it exist
  if (elementMoreResume) elementMoreResume.click();
  // then I scroll to the footer of the page
  document.querySelector(".global-footer.global-footer--static.ember-view").scrollIntoView()
  // Wait for lazy render
  waitFor(2000).then(() => {
    const resume = document.querySelector('section.pv-about-section > p')?.innerText || ""
    // I save all into a const Profile to manage easily
    const profile = {name, title, location, resume}

    // Selects experience section
    const experienceContainer = document.querySelector("#experience-section ul")
    let experience = []
    Array.from(experienceContainer.querySelectorAll("li div.pv-entity__summary-info")).map(experienceElement => {
      const company = experienceElement.querySelector("p.pv-entity__secondary-title")?.innerText || ""
      const period = experienceElement.querySelectorAll("h4 span")[1]?.innerText || ""
      const functions = experienceElement.querySelector("h3")?.innerText || ""
      experience.push({company, period, functions})
    })

    // Selects education section
    const educationContainer = document.querySelector("#education-section ul")
    let education = []
    Array.from(educationContainer.querySelectorAll("li div.pv-entity__summary-info")).map(educationElement => {
      const schoolName = educationElement.querySelector("h3")?.innerText || ""
      const period = educationElement.querySelectorAll("div p.pv-entity__dates span")[1]?.innerText || ""
      let degree = []
      Array.from(educationElement.querySelectorAll("div.pv-entity__degree-info p span"))
        .map((degreeTitle, i) => {
          if (i % 2 !== 0) {
            degree.push(degreeTitle.innerText)
          }
        })
      degree = degree.join(", ")
      education.push({schoolName, period, degree})
    })

    const profileComplete = {...profile, experience, education}
    console.log(profileComplete)
  })
}