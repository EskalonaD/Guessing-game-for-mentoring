import { Injectable } from '@angular/core';
import { StateService } from '@project/state.service';
import { GuessWay } from '@project/models';

@Injectable({
    providedIn: 'root'
})
export class GuesserService {
    constructor(private state: StateService) { }

    messagesTemplate: string[] = [
        'Is this',
        'Maybe it\'s',
        'How about',
        'Could it be',
        'Is it',
        '',
    ];
    currentGuess: number;

    // first number is the biggest guessed number that are lesser than secret, second - the fewest that are bigger;
    inflectionNumbers: [number, number] = [null, null];
    step: number = 10;
    previousWay: GuessWay = 'more';

    guess(way: GuessWay): void {
        if (way === 'match') {
            setTimeout(() => this.state.chat$.next({ text: 'Hooray!', person: 'guesser', stop: true }), 2000);
            return;
        }

        // step handling logic
        if (way === this.previousWay) {
            this.step *= 2;
        } else {
            if (this.step !== 1) {
                this.step = Math.trunc(this.step / 2) || 1;
            }
        }

        let guess: number = way === 'more'
            ? this.currentGuess + Math.ceil(Math.random() * this.step)
            : this.currentGuess - Math.ceil(Math.random() * this.step);

        // inflectionNumber handling logic
            if (this.inflectionNumbers[0] && guess < this.inflectionNumbers[0]) {
                guess = this.inflectionNumbers[0] + 1;
            }
            if (this.inflectionNumbers[1] && guess > this.inflectionNumbers[1]) {
                guess = this.inflectionNumbers[1] - 1;
            }

        this.previousWay = way;
        this.currentGuess = guess;
        setTimeout(() => this.state.chat$.next({ text: this.guessedMessage(this.currentGuess), person: 'guesser' }), 2000);
    }

    firstGuess(): void {
        this.currentGuess = Math.ceil(Math.random() * this.step);
        this.state.chat$.next({ text: `${this.currentGuess}`, person: 'guesser' });
    }

    guessedMessage(guess: number): string {
        const { messagesTemplate: template } = this;
        return `${template[Math.floor(Math.random() * template.length)]} ${guess}?`;
    }

    listenInterlocutor(message: string): void {
        if (message === 'You are right!') {

            // reset properties
            this.inflectionNumbers = [null, null];
            this.previousWay = 'more';
            this.step = 10;

            return this.guess('match');
        };

        const meaningfulInfo = message.includes('more') ? 'more' : 'less';

            if (meaningfulInfo === 'more') {
                this.inflectionNumbers[0] = this.currentGuess;
            }
            if (meaningfulInfo === 'less') {
                this.inflectionNumbers[1] = this.currentGuess;
            }

        this.guess(meaningfulInfo);
    }
}
