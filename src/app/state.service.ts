import { Injectable, ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, scan } from 'rxjs/operators';
import { MainComponent } from './main/main.component';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    // unsubscriber$: Subject<any> = new Subject(); // should remove it to component's unsubscribers
    chat$: Subject<any> = new Subject(); //should i unsubscribe/resubscribe?
    isStarted: boolean; //remove
    isEnded: boolean;
    secretNumber: number;
    guessedNumbers: number[] = [];
    shouldScroll: boolean = true;
    gamesStorage: ComponentRef<MainComponent>[] = [];

    //put messeges$ here and set gameservices chatlistener to listen to last element of messages$ array
}
