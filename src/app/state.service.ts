import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, scan } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    // unsubscriber$: Subject<any> = new Subject(); // should remove it to component's unsubscribers
    chat$: Subject<any> = new Subject();
    isStarted: boolean;
    isEnded: boolean;
    secretNumber: number;
    guessedNumbers: number[] = [];
    shouldScroll: boolean = true;

    //put messeges$ here and set gameservices chatlistener to listen to last element of messages$ array
}
