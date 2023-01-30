class MStorage {
  private _storage: Storage;

  constructor(storage: Storage) {
    this._storage = storage;
  }

  getItem(key: string)  {
    return this._storage.getItem(key);
  }

  setItem(key: string, value: string) {
    return this._storage.setItem(key, value);
  }

  removeItem(key: string) {
    return this._storage.removeItem(key);
  }

  clear() {
    return this._storage.clear();
  }
}

export default MStorage;