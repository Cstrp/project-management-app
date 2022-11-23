import { Injectable } from '@angular/core';
import { _decrypt, _encrypt } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveData(key: string, value: string): void {
    localStorage.setItem(key, _encrypt(value));
  }

  public getData(key: string): string {
    const data = localStorage.getItem(key) || '';

    return _decrypt(data);
  }

  public removeData(): void {
    localStorage.clear();
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  public isSignIn(): boolean {
    const usr = this.getData('token');

    return !!usr;
  }
}
