import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-scroll-button',
    templateUrl: './scroll-button.component.html',
    styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent implements OnInit {
    @Input() direction: 'top' | 'bottom';
    @Output() scrollTo = new EventEmitter();

    constructor() { }

    arrowDirection = {
        top: '&#8648;',
        bottom: '&#8650;',
    }

    ngOnInit() {
    }

    onClick() {
        this.scrollTo.emit(this.direction);
    }
}
