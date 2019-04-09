export function getSessionStorage (itemName) {
  let data = JSON.parse(sessionStorage.getItem(itemName))
  console.log('data', data)
  return data
}

export function getLocalStorage (itemName) {
  let data = JSON.parse(localStorage.getItem(itemName))
  return data
}
export function setSessionStorage (itemName, itemData) {
  let data = JSON.stringify(itemData)
  sessionStorage.setItem(itemName, data)
}

export function setLocalStorage (itemName, itemData) {
  let data = JSON.stringify(itemData)
  localStorage.setItem(itemName, data)
}
