import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

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
