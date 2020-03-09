import { Directive, Input, AfterViewInit, ElementRef, wtfLeave } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements AfterViewInit {
  @Input('app-scroll') options: any;
  constructor(private el: ElementRef ) { }

  ngAfterViewInit() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
