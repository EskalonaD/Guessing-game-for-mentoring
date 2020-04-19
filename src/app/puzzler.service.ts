import { Injectable } from '@angular/core';
import { StateService } from '@project/state.service';
import { GuessWay } from '@project/models';

@Injectable({
    providedIn: 'root'
})
export class PuzzlerService {
    constructor(private state: StateService) { }

    secretNumber: number;
    messagesTemplate: string[] = [
        'No, it\'s',
        'You\'re not correct, it\'s',
        'Try again, it\'s',
        'Actually no, it\'s'
    ];

    guessedAnswerMessage(way: GuessWay, guess: number): string {
        if (way === 'match') return 'You are right!';
        const { messagesTemplate: template } = this;
        return `${template[Math.floor(Math.random() * template.length)]} ${way} than ${guess}.`;
    }

    guessAnswer(guess: number): void {
        const way = this.secretNumber === guess
            ? 'match'
            : this.secretNumber > guess
                ? 'more' : 'less';

        this.state.chat$.next({
            text: this.guessedAnswerMessage(way, guess),
            person: 'puzzler',
        });
    }

    rememberNumber(input: number): void {
        this.secretNumber = input;
    }

    listenInterlocutor(message: string): void {
        const meaningfulInfo = message.match(/-?\d{1,}/g)[0];
        this.guessAnswer(+meaningfulInfo);
    }
}
