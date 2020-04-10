import { Directive, Input, AfterViewInit, ElementRef, wtfLeave } from '@angular/core';

@Directive({
    selector: '[appScroll]'
})
export class ScrollDirective implements AfterViewInit {
    @Input('appScroll') private shouldApply: boolean;
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        if (this.shouldApply) {
            this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
