import { Injectable } from '@angular/core';
import { StateService } from './state.service';


@Injectable({
    providedIn: 'root'
})
export class GuesserService {
    messagesTemplate: string[] = ['Is this', 'Maybe it\'s', 'I think it is', 'How about'];
    currentGuess: number;

    constructor(private state: StateService) { }

    guess(way: 'more' | 'less' | 'match'): void {
        if (way === 'match') {
            setTimeout(() => this.state.chat$.next({ text: 'Hooray!', person: 'guesser', stop: true }), 2000);
            return;
        }

        let guess: number = way === 'more'
            ? this.currentGuess + Math.ceil(Math.random() * 10)
            : this.currentGuess - Math.ceil(Math.random() * 10);

        while (true) {
            if (this.state.guessedNumbers.includes(guess)) {
                way === 'more' ? guess++ : guess--;
                continue;
            };

            this.state.guessedNumbers.push(guess);
            break;
        }

        this.currentGuess = guess;
        setTimeout(() => this.state.chat$.next({ text: this.guessedMessage(this.currentGuess), person: 'guesser' }), 2000);
    }

    firstGuess(): void {
        this.currentGuess = Math.ceil(Math.random() * 10);
        this.state.guessedNumbers.push(this.currentGuess);
        this.state.chat$.next({ text: `${this.currentGuess}`, person: 'guesser' });
    }

    guessedMessage(guess: number): string {
        return `${this.messagesTemplate[Math.floor(Math.random() * this.messagesTemplate.length)]} ${guess}`;
    }

    listenInterlocutor(message: string): void {
        if (message === 'You are right!') {
            this.state.guessedNumbers = [];
            return this.guess('match');
        };
        const meaningfulInfo = message.includes('more') ? 'more' : 'less';
        this.guess(meaningfulInfo);
    }
}
