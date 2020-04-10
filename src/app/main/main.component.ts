import { Component, OnInit, HostListener, Host, ElementRef, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { StateService } from '../state.service'
import { GameService } from '../game.service';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';
import { Message } from '../models';

enum Scroll {
    'top',
    'bottom'
}

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

    // @Output() startAnotherOne: EventEmitter<void> = new EventEmitter<void>();
    private unsubscriber$: Subject<any> = new Subject;
    input: FormControl = new FormControl('');
    messages$: Observable<any[]> = this.game.chatListener$.pipe(
        takeUntil(this.unsubscriber$),
        scan((acc: any[], val: Message) => {
            if (val.stop) {
                this.unsubscriber$.next();
                this.unsubscriber$.complete();
            }
            acc.push(val);
            return acc
        }, []),
    );

    constructor(private state: StateService, private game: GameService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        console.log('destroyed');
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    get shouldScroll(): boolean {
        return this.state.shouldScroll;
    }

    setSecretNumber(input: string): void {
        this.game.setGameParameters(+input)
    }

    // @HostListener('wheel') scollHandler(): void {
    //     console.log(1);
        
    //     if (this.state.shouldScroll) {
    //         this.state.shouldScroll = false;
    //     }
    // }
}
