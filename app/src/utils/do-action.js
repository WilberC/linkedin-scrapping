import { useTabInfo } from "./tab-info.js";

export async function doAction(action) {
  const { id } = await useTabInfo()

  chrome.tabs.executeScript(id,{code: action})

  // chrome.scripting.executeScript({
  //   target: {tabId: id},
  //   code: action
  // });
}