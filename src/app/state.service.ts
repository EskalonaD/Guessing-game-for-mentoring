import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  isStarted: boolean;
  isEnded: boolean;
  guessedNumbers: number[];

  console = console;

}
