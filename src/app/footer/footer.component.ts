import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateService } from '../state.service';
import { GameService } from '../game.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    constructor(private state: StateService, private game: GameService) { }

    @Output() private startAnotherGame: EventEmitter<void> = new EventEmitter<void>();
    @Output() private endGame: EventEmitter<void> = new EventEmitter<void>();

    // shouldShow: boolean;

    ngOnInit() {
        // this.state.isEnded$.pipe(
        //     take
        // )
    }

    // get shouldShow(): boolean {         //move show logic to parent smart-component;
    //     return this.state.isEnded;
    // }

    closeGame(): void {
        this.game.endGame(); //remove?      // if needed move logic to parent smart-component;
        this.endGame.emit();
    }

    restartGame(): void {
        this.startAnotherGame.emit();
    }
}
