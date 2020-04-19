import { Directive, Input, AfterViewInit, ElementRef, } from '@angular/core';
import { StateService } from './state.service';

@Directive({
    selector: '[appScroll]'
})
export class ScrollDirective implements AfterViewInit {
    @Input('appScroll') private shouldApply: boolean;
    constructor(private el: ElementRef, private state: StateService) { }

    ngAfterViewInit() {
        if (this.shouldApply) {
            this.el.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }

        this.state.scrollToBottomButtonHideZone$.next(getComputedStyle(this.el.nativeElement).height);
    }
}
