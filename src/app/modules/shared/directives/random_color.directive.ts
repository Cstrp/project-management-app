import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
})
export class Random_colorDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  shuffleColors(): string {
    const hex: string = '0123456789ABCDEF';
    let color: string = '#';

    while (color.length < 7) {
      color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', this.shuffleColors());
  }
}
