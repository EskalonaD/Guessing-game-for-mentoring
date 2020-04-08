import { Injectable } from '@angular/core';
import { GuesserService } from './guesser.service';
import { PuzzlerService } from './puzzler.service';
import { StateService } from './state.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Message } from './models';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(
        private guesser: GuesserService,
        private puzzler: PuzzlerService,
        private state: StateService
    ) { }

    chatListener$ = this.state.chat$.pipe(
        // takeUntil(this.state.unsubscriber$),
        tap((data: Message) => {
            if (data.stop === true) {
                this.state.isEnded = true;  // end messege should scroll to the footer, not just to last message;
                return;
            }
            const person = data.person === 'guesser' ? 'puzzler' : 'guesser';
            this[person].listenInterlocutor(data.text);
        })
    )//.subscribe(); // Lisa, how should i handle it? subscribe or pass to be subscribed in components?

    startGame(): void {
        this.state.isStarted = true;
    }

    setGameParameters(secret: number): void {
        this.puzzler.rememberNumber(secret);
        this.guesser.firstGuess();
    }

    endGame(): void {
        this.state.isEnded = true;
    }

    closeGame(): void {
        this.state.isStarted = false;
        this.state.isEnded = false;
    }
}
