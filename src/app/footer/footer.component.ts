import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateService } from '../state.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output()  private startAnotherGame: EventEmitter<void> = new EventEmitter<void>();
  @Output()  private endGame: EventEmitter<void> = new EventEmitter<void>();

  constructor(private state: StateService, private game: GameService) { }

  ngOnInit() {
  }

  get shouldShow(): boolean {
    return this.state.isEnded;
  }

  closeGame(): void {
    this.game.endGame(); //remove?
    this.endGame.emit();
  }

  restartGame(): void {
    // this.game.restartGame() //remove
    this.startAnotherGame.emit();
  }

}
