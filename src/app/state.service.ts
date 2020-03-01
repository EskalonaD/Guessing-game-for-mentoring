import { Injectable } from '@angular/core';
import { Subject, Observable, combineLatest, of } from 'rxjs';
import { withLatestFrom, map, takeUntil, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  unsubscriber$ = new Subject();
  chat$ = new Subject();
  isStarted: boolean;
  isEnded: boolean;
  secretNumber: number;
  guessedNumbers: number[] = [];


  messages$: Observable<any[]> = of([]).pipe(
    takeUntil(this.unsubscriber$),
    mergeMap(messageStore => this.chat$.pipe(       //check if regular map or switchmap will be fine
      map(value => messageStore.push(value) && messageStore)
    ))
  )

  console = console;

}
