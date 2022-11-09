import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  visible: boolean = true;

  constructor() {}

  toggleVisibility(): void {
    this.visible = !this.visible;
  }
}
