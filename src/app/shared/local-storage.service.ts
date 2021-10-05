import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public getItem(key: string) {
    localStorage.getItem(key)
  }

}
