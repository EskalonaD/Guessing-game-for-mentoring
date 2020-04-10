import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateService } from '../state.service';
import { GameService } from '../game.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() private start: EventEmitter<any> = new EventEmitter;

    constructor(private state: StateService, private game: GameService) { }

    ngOnInit() {
    }

    get shouldShow(): boolean {
        return !this.state.isStarted;
    }

    startGame(): void {
        this.state.isStarted; // remove
        this.start.emit();
    }
}
