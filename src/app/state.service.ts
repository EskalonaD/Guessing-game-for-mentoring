import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, scan } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    unsubscriber$: Subject<any> = new Subject();
    chat$: Subject<any> = new Subject();
    isStarted: boolean;
    isEnded: boolean;
    secretNumber: number;
    guessedNumbers: number[] = [];
    shouldScroll: boolean = true;

    messages$ = this.chat$.pipe(
        takeUntil(this.unsubscriber$),
        scan((acc, val) => acc.push(val) && acc, []),
    )
}
