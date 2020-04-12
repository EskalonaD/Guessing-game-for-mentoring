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

    // mb store this properies in main/gameComponent or puzzler/guesser services or create game-values service to store them as local
    secretNumber: number;   
    guessedNumbers: number[] = [];  //remove in favor of peakNumbers[]

    // ?? put messeges$ here and set gameservices chatlistener to listen to last element of messages$ array
}
