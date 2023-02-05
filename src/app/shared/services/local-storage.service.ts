import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
     * Get object from local storage.
     * @param key Key to search object in local storage.
     */
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (item) {
      const data: T = JSON.parse(item);

      return data;
    }

    return null;
  }

  /**
     * Sets object to local storage.
     * @param key Key to set object in local storage.
     * @param item Object to set in local storage.
     * @param stringify if true, stringifies parameter item.
     */
  setItem(key: string, item: unknown, stringify = true): void {
    if (stringify)
      localStorage.setItem(key, JSON.stringify(item));
    else
      localStorage.setItem(key, item as string);
  }

  /**
    * Removes object to local storage.
    * @param key Key to remove object in local storage.
    */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
