import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    constructor() { }

    @Input() message: Message;
    showLoader: boolean = false;

    get logoURL(): string { //check if getter is needed instead of regular property
        return this.message.person === 'puzzler'        // use object-mapper instead
            ? 'https://avatarfiles.alphacoders.com/715/71560.jpg'
            : 'https://avatarfiles.alphacoders.com/114/114469.png'
    }

    ngOnInit() {
        this.showLoader = true;

        setTimeout(() => {
            this.showLoader = false;
        }, 800);
    }
}
