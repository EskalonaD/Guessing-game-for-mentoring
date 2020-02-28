import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuesserService {

  constructor() { }

  guess$ = new Subject();
  stateNumber: number[];
  guess(way){
    if(this.stateNumber) {

      this.guess$.next([this.guessedMessage(this.stateNumber, way), 'guesser'])
    }
    this.firstGuess();
  }

  firstGuess()
  guessedMessage(stateNumber: number[], way: 'more' | 'less') {}
}
