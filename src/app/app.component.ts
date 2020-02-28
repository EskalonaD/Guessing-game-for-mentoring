import { Component } from '@angular/core';
import { Message } from './models';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game2';
  console = console;

  constructor(private state: StateService){}

  messages: Array<Message> = [];

  get gameStarted(){

    return this.state.isStarted;
  }

  startGame() {
    this.console.log(1)
    this.state.startGame();
  }

  endGame() {
    this.state.endGame();
  }
}
