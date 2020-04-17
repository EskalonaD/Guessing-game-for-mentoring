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
            setTimeout(() => this.state.chat$.next({ text: 'Hooray!', person: 'guesser', stop: true }), 3000);
            return;
        }

        this.handleStepLogic(way);

        let guess: number = way === 'more'
            ? this.currentGuess + Math.ceil(Math.random() * this.step)
            : this.currentGuess - Math.ceil(Math.random() * this.step);

        if(this.isExceedBoundaries(guess)) {
            this.step = Math.trunc(this.step / 2) || 1;
            this.guess(way);
            return;
        }

        this.previousWay = way;
        this.currentGuess = guess;

        setTimeout(() => this.state.chat$.next({ text: this.guessedMessage(this.currentGuess), person: 'guesser' }), 3000);
    }

    private handleStepLogic(way: GuessWay): void {
        if(way === this.previousWay) this.step *= 2;
        else this.step = Math.trunc(this.step / 2) || 1;
    }

    private isExceedBoundaries(num: number): boolean {
        if (!this.inflectionNumbers.includes(null)) {
            return this.inflectionNumbers.some((el, i) => {
                if (el === num) return true;
                return i ? num > el : num < el;
            })
        }
        return false;
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

        this.setInflectionNumber(meaningfulInfo);
        this.guess(meaningfulInfo);
    }

    private setInflectionNumber(way: GuessWay): void {
        if(way === 'more') this.inflectionNumbers[0] = this.currentGuess;
        else this.inflectionNumbers[1] = this.currentGuess;
    }
}
