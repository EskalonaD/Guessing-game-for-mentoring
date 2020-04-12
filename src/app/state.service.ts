import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '@project/models';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    //should i unsubscribe/resubscribe?
    chat$: Subject<Message> = new Subject;
    messageShouldScroll$: Subject<boolean> = new Subject;
    isEnded$: Subject<boolean> = new Subject;
}
