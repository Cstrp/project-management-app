import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective {
  public darkMode: boolean = false;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}
}
