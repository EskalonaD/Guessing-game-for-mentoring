import { Component, OnInit, HostListener, Host, ElementRef, ViewChild } from '@angular/core';
import { StateService } from '../state.service'
import { GameService } from '../game.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

enum Scroll {
    'top',
    'bottom'
}

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    input: FormControl = new FormControl('');
    messages$: Observable<any[]> = this.state.messages$;

    constructor(private state: StateService, private game: GameService) { }

    ngOnInit() {
    }

    get gameStarted(): boolean {
        return this.state.isStarted;
    }

    get shouldScroll(): boolean {
        return this.state.shouldScroll;
    }

    setSecretNumber(input: string): void {
        this.game.setGameParameters(+input)
    }

    @HostListener('wheel') scollHandler(): void {
        if (this.state.shouldScroll) {
            this.state.shouldScroll = false;
        }
    }
}
