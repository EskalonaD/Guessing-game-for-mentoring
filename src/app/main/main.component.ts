import { Component, OnInit, HostListener, Host, ElementRef, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { StateService } from '../state.service'
import { GameService } from '../game.service';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';
import { Message } from '../models';

// enum Scroll {
//     'top',
//     'bottom'
// }

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
    constructor(private state: StateService, private game: GameService) { }

    private unsubscriber$: Subject<any> = new Subject;

    shouldScroll: boolean;
    input: FormControl = new FormControl('');   //check if private flag can be used instead public
    messages$: Observable<any[]> = this.game.chatListener$.pipe(
        takeUntil(this.unsubscriber$),
        scan((acc: any[], val: Message) => {
            if (val.stop) {
                this.state.messageShouldScroll$.next(false);
                this.unsubscriber$.next();
                this.unsubscriber$.complete();
            }
            acc.push(val);
            return acc
        }, []),
    );

    // get shouldScroll(): boolean {
    //     return this.state.messageShouldScroll;
    // }

    ngOnInit() {
        this.state.messageShouldScroll$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(boolean => this.shouldScroll = boolean);

        this.state.messageShouldScroll$.next(true);
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    setSecretNumber(input: string): void {
        this.game.setGameParameters(+input)
    }
}
