import { Injectable } from '@angular/core';
import { GuesserService } from './guesser.service';
import { PuzzlerService } from './puzzler.service';
import { StateService } from './state.service';
import { takeUntil, tap } from 'rxjs/operators';

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
        takeUntil(this.state.unsubscriber$),
        tap((data: { text: string, person: string, stop?: boolean }) => {
            if (data.stop === true) return;
            const person = data.person === 'guesser' ? 'puzzler' : 'guesser';
            this[person].listenInterlocutor(data.text);
        })
    ).subscribe();

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
