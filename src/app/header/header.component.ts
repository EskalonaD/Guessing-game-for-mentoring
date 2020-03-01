import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private state: StateService, private game: GameService) { }

  ngOnInit() {
  }

  console = console;

  get shouldShow(){
    return !this.state.isStarted;
  }

  startGame() {
    this.console.log(1)
    this.game.startGame();
  }
}
