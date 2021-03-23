import { actionSearchProfileFor } from "./src/actions/search-action.js";

let btnScrap = document.getElementById('btn-scrap')

btnScrap.addEventListener('click', async () => {
  const searchInput = document.getElementById("search-field")
  await actionSearchProfileFor(searchInput.value)
})




