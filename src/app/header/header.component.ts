import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private state: StateService ) { }

  ngOnInit() {
  }

  console = console;

  get gameStarted(){
    return this.state.isStarted;
  }

  startGame() {
    this.console.log(1)
    this.state.startGame();
  }
}
