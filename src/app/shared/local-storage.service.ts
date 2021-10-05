import { Injectable } from '@angular/core';

import { Todo } from './todo.interface';
import { LOCAL_STORAGE_KEY } from './constans';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLocalStorageData = (key: string) => {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storageData) {
      return null;
    }
    if (key) {
      return JSON.parse(storageData)[key];
    }
    return JSON.parse(storageData);
  }

  setLocalStorageData = (key: string, data: Todo) => {
    const storageData = this.getLocalStorageData(key);
    if (!storageData) {
      return window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({[key]: data}));
    }
    storageData[key] = data;
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
  }

}


