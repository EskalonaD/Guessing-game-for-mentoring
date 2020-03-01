import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private state: StateService, private game: GameService) { }

  ngOnInit() {
  }

  console = console;

  get shouldShow(){
    return this.state.isEnded;
  }

  endGame() {
    this.game.closeGame();
  }

}
