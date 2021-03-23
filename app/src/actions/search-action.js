import { selectorSearch, selectorSearchJustPeopleBtn } from "../selectors.js";
import { PressEnterTo } from "../utils/keyboard-events.js";
import { doAction } from "../utils/do-action.js";

// document.querySelector("input.search-global-typeahead__input.always-show-placeholder").value = word
export async function actionSearchFor(words) {
  // const searchInput = document.querySelector(selectorSearch)
  const word = "gaaaaaaa"
  let a = (m)=>alert(m)
 // let a = (m) => {
 //   document.querySelector("input.search-global-typeahead__input.always-show-placeholder").value = "asdasd"
 // }
 // function a(m){
 //   document.querySelector("input.search-global-typeahead__input.always-show-placeholder").value = "asdasd"
 // }

  await doAction(`()=>console.log("${word}")`)
  // searchInput.value = word
  // PressEnterTo(searchInput)
  // return searchInput
}

export async function actionSearchProfileFor(name) {
  await actionSearchFor(name)
  // document.querySelector(selectorSearchJustPeopleBtn).click()
}