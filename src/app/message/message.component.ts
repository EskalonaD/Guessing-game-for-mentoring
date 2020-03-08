import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  get logoURL(): string {
    return this.message.person === 'puzzler'
        ? 'https://avatarfiles.alphacoders.com/715/71560.jpg'
        : 'https://avatarfiles.alphacoders.com/114/114469.png'
  }
  constructor() { }

  @Input() message: { text: string, person: 'puzzler' | 'guesser', stop?: boolean };
  showLoader: boolean = false;

  ngOnInit() {
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 500);


  }

}
