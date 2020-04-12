import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    constructor(private game: GameService) { }

    @Output() private startAnotherGame: EventEmitter<void> = new EventEmitter<void>();
    @Output() private endGame: EventEmitter<void> = new EventEmitter<void>();

    closeGame(): void {
        // this.game.endGame(); //remove?      // if needed move logic to parent smart-component;
        this.endGame.emit();
    }

    restartGame(): void {
        this.startAnotherGame.emit();
    }
}
