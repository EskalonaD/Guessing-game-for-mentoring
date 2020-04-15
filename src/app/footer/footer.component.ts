import {
    Component,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    constructor() { }

    @Output() private startAnotherGame: EventEmitter<void> = new EventEmitter;
    @Output() private endGame: EventEmitter<void> = new EventEmitter;
    @ViewChild('wrapper', { static: true }) wrapper: ElementRef;

    closeGame(): void {
        this.endGame.emit();
    }

    restartGame(): void {
        this.startAnotherGame.emit();
    }
}
