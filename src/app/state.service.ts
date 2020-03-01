import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  isStarted: boolean;
  isEnded: boolean
  console = console;

  startGame() {
    this.console.log('gamed')
    this.isStarted = true;
    this.console.log('state',this.isStarted)
  }

  endGame() {
    this.isStarted = false;
    this.isEnded = false;
  }
}
