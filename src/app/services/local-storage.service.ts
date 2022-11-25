import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getData(key: string): string {
    return localStorage.getItem(key) || '';
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
