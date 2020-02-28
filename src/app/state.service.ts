import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  isStarted: boolean;
  console = console;

  startGame() {
    this.console.log('gamed')
    this.isStarted = true;
    this.console.log('state',this.isStarted)
  }

  endGame() {
    this.isStarted = false;
  }
}
