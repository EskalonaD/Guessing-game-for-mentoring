import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service'
import { GameService } from '../game.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private state: StateService, private game: GameService){}

  get gameStarted() {
    return this.state.isStarted;
  } 

  input = new FormControl('');

  setSecretNumber(input: string) {
    this.game.setGameParameters(+input)
  }
  messages$ = this.state.messages$;
}
