import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { ScrollDirection } from '@project/models';

@Component({
    selector: 'app-scroll-button',
    templateUrl: './scroll-button.component.html',
    styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
    constructor() { }

    @Input() direction: ScrollDirection;
    @Output() private scrollTo: EventEmitter<ScrollDirection> = new EventEmitter<ScrollDirection>();

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
