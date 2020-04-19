import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from '@project/models';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { interval, Subject, merge, of } from 'rxjs';
import { takeUntil, tap, reduce, startWith } from 'rxjs/operators';

const picturesMapper = {
    puzzler: '../assets/71560.jpg',
    guesser: '../assets/114469.png',
}

// enum Blinking {
//     'coloured' = 'f',
//     'decoloured' = false,
// }

let colour: string;

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    animations: [
        trigger('blinking', [
            state('show', style({
                opacity: '1',
            })),
            state('hide', style({
                opacity: '0',
            })),
            transition('show => hide', [animate('1.5s 0s ease-in')]),
            transition('hide => show', [animate('1.5s 0s ease-out')]),
            // transition('white <=> guesser', [animate('1s')]),
        ])
    ],
})
export class MessageComponent implements OnInit, OnDestroy {
    constructor() { }

    @Input() message: Message;

    private unsubscriber$: Subject<void> = new Subject;

    showLoader: boolean;
    logoURL: string;
    colour: string;

    ngOnInit() {
        this.showLoader = true;
        this.logoURL = picturesMapper[this.message.person];
        // using external variable;
        this.colour = 'hide'
        // this.message.person;
        // 'white'

        // merge(of(1), interval(1500)).pipe(
        //     takeUntil(this.unsubscriber$),
        //     // startWith(1),
        //     tap(_ => {
        //         console.log(_)
        //         // colour = this.message.person;
        //         this.colour = this.colour === 'show' ? 'hide' : 'show';
        //     })
        // ).subscribe();
        interval(1500).pipe(
            takeUntil(this.unsubscriber$),
            startWith(1),
            tap(_ => {
                // colour = this.message.person;
                this.colour = this.colour === 'show' ? 'hide' : 'show';
            })
        ).subscribe();

        // setTimeout(() => {
        //     this.showLoader = false;
        //     this.unsubscriber$.next();
        //     this.unsubscriber$.complete();
        // }, 1600);
    }

    ngOnDestroy(){
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }


}
