import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandPos]',
})
export class RandomPositionDirective implements AfterViewInit {
  private width: number = window.innerWidth;

  private height: number = 0;

  private randomPosition = this.getRandomNumber(this.width, this.height);

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', this.randomPosition + 'px');

    this.renderer.setStyle(this.elementRef.nativeElement, 'background', this.shuffleColors());
  }

  shuffleColors(): string {
    const hex: string = '0123456789ABCDEF';
    let color: string = '#';

    while (color.length < 7) {
      color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
