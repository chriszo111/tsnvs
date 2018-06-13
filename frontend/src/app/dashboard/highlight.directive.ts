import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightDashboard]'
})
export class HighlightDirective {

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.className = "shadow rounded card border-light mb-12";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.className = "card border-light mb-3";
  }

}
