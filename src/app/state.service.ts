import { Injectable } from '@angular/core';
import { Subject, Observable, empty } from 'rxjs';
import { Message } from '@project/models';
import { delay, delayWhen } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    chat$: Subject<Message> = new Subject;
    chatDelayer$: Observable<Message> = this.chat$.pipe(
        delayWhen(({ isFirst }) => isFirst? empty() : empty().pipe(delay(3000))),
        );
    scrollToBottomButtonHideZone$: Subject<string> = new Subject;
    messageShouldScroll$: Subject<boolean> = new Subject;
    isEnded$: Subject<boolean> = new Subject;
}
