import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class GuesserService {

  constructor(private state: StateService) { }

  guess$ = new Subject();

  messagesTemplate: string[] = ['Is this', 'Maybe it\'s', 'I think it is', 'How about'];
  currentGuess: number;
  guess(way){
    if(this.state.guessedNumbers) {

      this.guess$.next([this.guessedMessage(way), 'guesser'])
    }
    this.firstGuess();
  }

  firstGuess() {
    this.currentGuess = Math.ceil(Math.random() * 10);
    this.guess$.next([this.currentGuess, 'guesser']);
  }

  guessedMessage(way: 'more' | 'less') {
    let guess = way === 'more' ? this.currentGuess + Math.ceil(Math.random() * 10) : this.currentGuess - Math.ceil(Math.random() * 10);

    while(true) {
      if (this.state.guessedNumbers.includes(guess)) {
        way === 'more' ? guess++ : guess--;
        continue;
        };
        
        this.state.guessedNumbers.push(guess);
        return `${this.messagesTemplate[Math.floor(Math.random() * this.messagesTemplate.length)]} ${guess}`;
      }
  }
}
