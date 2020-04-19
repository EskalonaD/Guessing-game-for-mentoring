import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@project/models';

const picturesMapper = {
    puzzler: '../assets/71560.jpg',
    guesser: '../assets/114469.png',
}

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    constructor() { }

    @Input() message: Message;

    showLoader: boolean;
    logoURL: string;

    ngOnInit() {
        this.showLoader = true;
        this.logoURL = picturesMapper[this.message.person];

        setTimeout(() => {
            this.showLoader = false;
        }, 1600);
    }
}
