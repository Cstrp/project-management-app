import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomPosition]',
})
export class Random_positionDirective implements OnInit {
  private width: number = window.innerWidth;

  private height: number = 0;

  private randomPosition = this.getRandomNumber(this.width, this.height);

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', this.randomPosition + 'px');
  }
}
