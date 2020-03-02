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

  chatListener$  = this.state.chat$.pipe(
    takeUntil(this.state.unsubscriber$),
    tap((data: { text: string, person: string }) => {
      const person = data.person === 'guesser' ? 'puzzler' : 'guesser';
      this[person].listenInterlocutor(data.text);
      // console.log(data.person)
    })
  ).subscribe();

  startGame(): void {
    this.state.console.log('gamed')
    this.state.isStarted = true;
    this.state.console.log('state',this.state.isStarted);
    // this.puzzler.
  }

  setGameParameters(secret: number): void {
    console.log('secret number set, it\'s ', secret);
    this.puzzler.rememberNumber(secret);
    this.guesser.firstGuess();
    console.log(this.state.secretNumber);
  }

  endGame(): void {
    this.state.isEnded = true;
  }

  closeGame(): void {
    this.state.isStarted = false;
    this.state.isEnded = false;
  }
}
