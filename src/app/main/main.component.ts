import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service'
import { GameService } from '../game.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private state: StateService, private game: GameService){}

  ngOnInit() {
  }


  get gameStarted(): boolean {
    return this.state.isStarted;
  } 

  input: FormControl = new FormControl('');

  setSecretNumber(input: string): void {
    this.game.setGameParameters(+input)
  }

  messages$: Observable<any[]> = this.state.messages$;
}