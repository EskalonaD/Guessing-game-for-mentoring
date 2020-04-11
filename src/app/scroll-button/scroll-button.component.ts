import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-scroll-button',
    templateUrl: './scroll-button.component.html',
    styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
    constructor() { }

    @Input() direction: 'top' | 'bottom';
    @Output() private scrollTo: EventEmitter<'top' | 'bottom'> = new EventEmitter<'top' | 'bottom'>();

    arrowDirection = {
        top: '&#8648;',
        bottom: '&#8650;',
    }

    ngOnInit() {
    }

    onClick(): void {
        this.scrollTo.emit(this.direction);
    }
}
