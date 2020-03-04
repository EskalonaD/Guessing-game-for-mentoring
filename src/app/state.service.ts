import { Injectable } from '@angular/core';
import { Subject, Observable, combineLatest, of } from 'rxjs';
import { withLatestFrom, map, takeUntil, mergeMap, tap, concatMap, switchMap, scan } from 'rxjs/operators';

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


  // messages$/*: Observable<any[]>*/ = new Observable(x => x.next([])).pipe(
  //   takeUntil(this.unsubscriber$),
  //   // tap(x => console.log('messages')),
  //   // tap(x => console.log(x)),
  //   // mergeMap(messageStore => this.chat$.pipe(       //check if regular map or switchmap will be fine
  //   switchMap(messageStore => this.chat$.pipe(       //check if regular map or switchmap will be fine
  //     tap(store => console.log(store)),
  //     map(value => (<any>messageStore).push(value) && messageStore),
  //     // tap(store => console.log(store))
  //   ))
  // )

  messages$/*: Observable<any[]>*/ = this.chat$.pipe(
    takeUntil(this.unsubscriber$),
    scan((acc, val) => {this.console.log(val); return acc.push(val) && acc}, []),
    tap(x => console.log(x))
    )
  

  console = console;

}
