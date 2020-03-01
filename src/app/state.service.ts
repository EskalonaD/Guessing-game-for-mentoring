import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  isStarted: boolean;
  isEnded: boolean;
  secretNumber: number;
  guessedNumbers: number[] = [];

  chat$ = new Subject();

  console = console;

}
