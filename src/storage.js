const localStroageSetItem = (key, value) => {
  return localStorage.setItem(key, value)
}

const localStroageClear = () => {
  return localStorage.clear
}

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export {
  localStroageSetItem,
  localStroageClear,
  getLocalStorage
}