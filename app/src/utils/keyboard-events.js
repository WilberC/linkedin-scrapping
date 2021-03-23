function KeyDown(keyCode) {
  return new KeyboardEvent('keydown', {
    bubbles: true, cancelable: true, keyCode: keyCode
  })
}

export const Enter = KeyDown(13)

export function PressEnterTo(element) {
  try {
    element.dispatchEvent(Enter);
    return true
  } catch (e) {
    return false
  }
}