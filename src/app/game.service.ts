import { Injectable, ComponentRef } from '@angular/core';
import { GuesserService } from './guesser.service';
import { PuzzlerService } from './puzzler.service';
import { StateService } from './state.service';
import { Message } from './models';
import { tap } from 'rxjs/operators';

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
        tap((data: Message) => {
            if (data.stop === true) {
                this.finishGame();  // end messege should scroll to the footer, not just to last message;
                return;
            }
            const person = data.person === 'guesser' ? 'puzzler' : 'guesser';
            this[person].listenInterlocutor(data.text);
        })
    )//.subscribe(); // how should i handle it? subscribe or pass to be subscribed in components?

    setGameParameters(secret: number): void {
        this.puzzler.rememberNumber(secret);
        this.guesser.firstGuess();
    }

    private finishGame(): void {    //remove?
        this.state.isEnded$.next(true);
    }
}
