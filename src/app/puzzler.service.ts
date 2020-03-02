import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class PuzzlerService {

  constructor(private state: StateService) { }

  messagesTemplate: string[] = ['No, it\'s', 'You\'re not correct, it\'s', 'Try again, it\'s', 'Actually no, it\'s'];

  guessedAnswerMessage(way: 'more' | 'less', guess: number): string {
    return `${this.messagesTemplate[Math.floor(Math.random() * this.messagesTemplate.length)]} ${way} than ${guess}`;
  };

  guessAnswer(guess: number): void {
    const way = this.state.secretNumber > guess ? 'less' : 'more';
    this.state.chat$.next([this.guessedAnswerMessage(way, guess), 'puzzler']);
  }

  rememberNumber(input: number): void {
    this.state.secretNumber = input;
  }


  listenInterlocutor(message: string): void {
    const meaningfulInfo = message.match(/\d*?/)[0];
    this.guessAnswer(+meaningfulInfo);
  }
}
