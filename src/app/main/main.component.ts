import { Component, OnInit, HostListener, Host, ElementRef } from '@angular/core';
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


  // move scroll logic into app component
  topScroll=  this.el.nativeElement.scrollWidth > this.el.nativeElement.clientWidth;
  bottomScroll=true;
  scrollTo(way: string): void {
    if(way === 'top') {
      this.state.shouldScroll = false;
      this.el.nativeElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    
    if(way === 'bottom') {
      this.state.shouldScroll = true;
      this.el.nativeElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
      this.bottomScroll = false;
      this.topScroll = true;
    }
  }

  messages$: Observable<any[]> = this.state.messages$;

  @HostListener('wheel') scollHandler(): void {
    console.log(this.state.shouldScroll)
// console.log('scroll', this.el.nativeElement.scrollHeight);
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
