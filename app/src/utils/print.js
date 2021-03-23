import { useTabInfo } from "./tab-info.js";

export async function print(msg) {
  const { id } = await useTabInfo()

  const port = chrome.tabs.connect(id);
  port.postMessage(msg);
}