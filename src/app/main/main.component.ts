import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private state: StateService){}

  messages$ = this.state.messages$;
}
