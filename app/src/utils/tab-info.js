export async function useTabInfo() {
  const queryInfo = { active: true, currentWindow: true }
  const [tab] = await chrome.tabs.query(queryInfo);
  if (!!tab) {
    console.log(tab)
    return tab
  }
  return undefined
}