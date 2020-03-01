import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  isStarted: boolean;
  isEnded: boolean;
  guessedNumbers: number[];

  console = console;

  startGame() {
    this.console.log('gamed')
    this.isStarted = true;
    this.console.log('state',this.isStarted)
  }

  endGame() {
    this.isEnded = true;
  }

  closeGame() {
    this.isStarted = false;
    this.isEnded = false;
  }
}
