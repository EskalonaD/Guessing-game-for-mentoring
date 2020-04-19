import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@project/models';
import { trigger, state, style, transition, animate } from '@angular/animations';

const picturesMapper = {
    puzzler: '../assets/71560.jpg',
    guesser: '../assets/114469.png',
}

enum Colours {
    guesser = 'rgb(252, 143, 228)',
    puzzler = 'rgb(35, 102, 146)',
}

let colour: string;

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss'],
    animations: [
        trigger('blinking', [
            state('coloured', style({
                color: '#f00',
            })),
            state('decoloured', style({
                color: '#fff',
            })),
            transition('coloured <=> decoloured', [animate('0.3s')]),
        ])
    ],
})
export class MessageComponent implements OnInit {
    constructor() { }

    @Input() message: Message;

    showLoader: boolean;
    logoURL: string;

    ngOnInit() {
        this.showLoader = true;
        this.logoURL = picturesMapper[this.message.person];
        // using external variable;
        colour = Colours[this.message.person],

        setTimeout(() => {
            this.showLoader = false;
        }, 1600);
    }


}
