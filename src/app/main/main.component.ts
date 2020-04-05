import { Component, OnInit, HostListener, Host, ElementRef, ViewChild } from '@angular/core';
import { StateService } from '../state.service'
import { GameService } from '../game.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

enum Scroll {
  'top',
  'bottom'
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private state: StateService, private game: GameService, private el: ElementRef){}

  ngOnInit() {
  }

  

  get gameStarted(): boolean {
    return this.state.isStarted;
  }

  get shouldScroll(): boolean {
    return this.state.shouldScroll;
  }

  input: FormControl = new FormControl('');

  setSecretNumber(input: string): void {
    this.game.setGameParameters(+input)
  }

  messages$: Observable<any[]> = this.state.messages$;

  @HostListener('wheel') scollHandler(): void {
//     console.log(this.state.shouldScroll)
// console.log('scroll', this.el.nativeElement.scrollHeight);
// console.log(this.wrapper);
// console.log(this.wrapper.nativeElement.scrollHeight)
// console.log(this.wrapper.nativeElement.clientHeight)

// console.log((<any>this.wrapper).scrollWidth);
// console.log('client', this.el.nativeElement.clientHeight);
    

    if(this.state.shouldScroll) {

      this.state.shouldScroll = false;
    }
    return;
  }


  // @HostListener('keyup') keyUpHandler(): void {
  //   if (!this.state.shouldScroll) {
  //     this.state.shouldScroll= true;
  //   }
  // }
}
