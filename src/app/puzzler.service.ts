import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { StateService } from './state.service';

@Injectable({
    providedIn: 'root'
})
export class PuzzlerService {

    messagesTemplate: string[] = ['No, it\'s', 'You\'re not correct, it\'s', 'Try again, it\'s', 'Actually no, it\'s'];

    constructor(private state: StateService) { }
    guessedAnswerMessage(way: 'more' | 'less' | 'match', guess: number): string {
        if (way === 'match') return 'You are right!';
        return `${this.messagesTemplate[Math.floor(Math.random() * this.messagesTemplate.length)]} ${way} than ${guess}`;
    };

    guessAnswer(guess: number): void {
        const way = this.state.secretNumber === guess
            ? 'match'
            : this.state.secretNumber > guess
                ? 'more' : 'less';
        setTimeout(() => this.state.chat$.next({ text: this.guessedAnswerMessage(way, guess), person: 'puzzler', }), 2000);
    }

    rememberNumber(input: number): void {
        this.state.secretNumber = input;
    }


    listenInterlocutor(message: string): void {
        const meaningfulInfo = message.match(/-?\d{1,}/g)[0];
        this.guessAnswer(+meaningfulInfo);
    }
}
