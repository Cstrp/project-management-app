import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
