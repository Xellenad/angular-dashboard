import { Injectable } from '@angular/core';

import { LOCAL_STORAGE_KEY } from './constans';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLocalStorageData = (key?: string) => {
    const storageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storageData) {
      return null;
    }
    if (key) {
      return JSON.parse(storageData)[key];
    }
    return JSON.parse(storageData);
  }

  setLocalStorageData = (key: string, data: any) => {
    const storageData = this.getLocalStorageData();
    if (!storageData) {
      return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({[key]: data}));
    }
    storageData[key] = data;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
  }

}


