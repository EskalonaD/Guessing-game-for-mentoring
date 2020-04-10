import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    chat$: Subject<any> = new Subject(); //should i unsubscribe/resubscribe?
    isStarted: boolean; //remove
    isEnded: boolean;
    secretNumber: number;
    guessedNumbers: number[] = [];
    shouldScroll: boolean = true;
    // ?? put messeges$ here and set gameservices chatlistener to listen to last element of messages$ array
}
