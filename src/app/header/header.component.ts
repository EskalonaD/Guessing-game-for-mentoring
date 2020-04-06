import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { GameService } from '../game.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private state: StateService, private game: GameService) { }

    ngOnInit() {
    }

    get shouldShow(): boolean {
        return !this.state.isStarted;
    }

    startGame(): void {
        this.game.startGame();
    }
}
