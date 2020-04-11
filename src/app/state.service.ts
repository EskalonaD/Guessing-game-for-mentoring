import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    //should i unsubscribe/resubscribe?
    chat$: Subject<any> = new Subject(); 
    messageShouldScroll$: Subject<boolean> = new Subject();
    isStarted: boolean; //remove
    isEnded: boolean;
    secretNumber: number;
    guessedNumbers: number[] = [];
    // messageShouldScroll: boolean = true;    //remove
    
    // ?? put messeges$ here and set gameservices chatlistener to listen to last element of messages$ array
}
