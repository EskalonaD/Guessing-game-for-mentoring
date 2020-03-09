import { Component, OnInit, HostListener, Host } from '@angular/core';
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

  get shouldScroll(): boolean {
    return this.state.shouldScroll;
  }

  input: FormControl = new FormControl('');

  setSecretNumber(input: string): void {
    this.game.setGameParameters(+input)
  }

  messages$: Observable<any[]> = this.state.messages$;

  @HostListener('wheel') scollHandler(): void {
    console.log(this.state.shouldScroll)
    this.state.shouldScroll = false;
  }
}
