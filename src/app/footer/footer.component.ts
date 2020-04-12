import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    constructor() { }

    @Output() private startAnotherGame: EventEmitter<void> = new EventEmitter<void>();
    @Output() private endGame: EventEmitter<void> = new EventEmitter<void>();

    closeGame(): void {
        this.endGame.emit();
    }

    restartGame(): void {
        this.startAnotherGame.emit();
    }
}
