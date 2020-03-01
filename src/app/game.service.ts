import { Injectable } from '@angular/core';
import { GuesserService } from './guesser.service';
import { PuzzlerService } from './puzzler.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private guesser: GuesserService,
    private puzzler: PuzzlerService,
    private state: StateService
    ) { }

  
  startGame() {
    this.state.console.log('gamed')
    this.state.isStarted = true;
    this.state.console.log('state',this.state.isStarted);
    // this.puzzler.
  }

  setGameParameters(secret: number) {
    console.log('secret number set, it\'s ', secret)
  }
  endGame() {
    this.state.isEnded = true;
  }

  closeGame() {
    this.state.isStarted = false;
    this.state.isEnded = false;
  }
}
