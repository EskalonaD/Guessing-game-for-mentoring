import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    //should i unsubscribe/resubscribe?
    chat$: Subject<any> = new Subject(); // change any-type to proper type;
    messageShouldScroll$: Subject<boolean> = new Subject<boolean>();
    isEnded$: Subject<boolean> = new Subject<boolean>();

    secretNumber: number;
    guessedNumbers: number[] = [];


    // isStarted: boolean; //remove
    // isEnded: boolean;
    // messageShouldScroll: boolean = true;    //remove

    // ?? put messeges$ here and set gameservices chatlistener to listen to last element of messages$ array
}
