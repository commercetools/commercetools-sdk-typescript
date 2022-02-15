export default class TokenStorage {
  constructor(storage) {
    this.storage = storage
  }

  setStorage(storage) {
    this.storage = storage
  }

  getItem(item) {
    return this.storage.getItem(item)
  }

  setItem(key, value) {
    this.storage.setItem(key, value)
  }

  removeItem(item) {
    this.storage.removeItem(item)
  }

  clearItems() {
    this.storage.clear()
  }

  static _getItem(storage, item) {
    return storage.getItem(item)
  }

  static _setItem(storage, key, value) {
    storage.setItem(key, value)
  }
}
