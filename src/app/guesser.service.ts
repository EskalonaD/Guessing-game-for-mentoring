import { Injectable } from '@angular/core';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class GuesserService {

  constructor(private state: StateService) { }

  messagesTemplate: string[] = ['Is this', 'Maybe it\'s', 'I think it is', 'How about'];
  currentGuess: number;

  guess(way: 'more' | 'less'): void {
    let guess: number = way === 'more' ? this.currentGuess + Math.ceil(Math.random() * 10)
      : this.currentGuess - Math.ceil(Math.random() * 10);

    while(true) {
      if (this.state.guessedNumbers.includes(guess)) {
        way === 'more' ? guess++ : guess--;
        continue;
        };

        this.state.guessedNumbers.push(guess);
        break;
      }

      this.currentGuess = guess;
      this.state.chat$.next({ text: this.guessedMessage(this.currentGuess), person: 'guesser' })
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
    const meaningfulInfo = message.includes('more') ? 'more' : 'less';
    this.guess(meaningfulInfo);
  }
}
