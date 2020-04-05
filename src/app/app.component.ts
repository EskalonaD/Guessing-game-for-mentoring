import { Component, ViewChild, ElementRef, HostListener, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'game2';

  @ViewChild('contentContainer', {static: false}) contentContainer: ElementRef;
  @ViewChild('wrapper', {static: false}) wrapper: ElementRef;


  constructor(private state: StateService, private el: ElementRef, private renderer: Renderer2){}


  
  // _topScroll;
  // // move scroll logic into app component, use enum add logic if on top - don't use top button vice versa
  // get topScroll () {
  //   console.log('here');
    
  //   if(this.wrapper && this.wrapper.nativeElement) {
  //     this._topScroll = this.wrapper.nativeElement.scrollHeight > this.wrapper.nativeElement.clientHeight;
  //   } else if (this._topScroll === undefined) return false;
  //   console.log(this._topScroll);
    
  //   return this._topScroll;
  // }

  // set topScroll(value) {
  //   this._topScroll = value;
  // }

  // ngOnInit() {
  //   console.log(this.wrapper);
    
  //   this.renderer.listen(this.wrapper.nativeElement, 'scroll', () => {
  //     if(!this.topScroll) {
  //             this.topScroll = true;
  //           }
  //   })
  // }
  showScrollButtons = false;

  ngAfterViewInit() {
    // console.log(this.wrapper);
    
    const onScroll = this.renderer.listen(this.wrapper.nativeElement, 'scroll', () => {
      console.log('here');
      
              this.showScrollButtons = true;
              onScroll();
    })
  }
  topScroll = false;
  bottomScroll = false;
  timeout;
  onScroll() {
    console.log('host');

    
    // console.log(this.wrapper.nativeElement.offsetHeight);
    // console.log(this.wrapper.nativeElement.scrollHeight);
    // console.log(this.wrapper.nativeElement.scrollTop);
    
    
    // console.log();
    if(this.showScrollButtons) {
      if(this.wrapper.nativeElement.scrollTop > 100) {
        this.topScroll = true;
      }
      
      if(this.wrapper.nativeElement.scrollTop < 100) {
        this.topScroll = false;
      }
      
      
      if(!this.timeout /*&& !this.bottomScroll*/) {
        // delete additional timer;
        console.log('here');
        
        this.timeout = setTimeout(() =>{
          // console.log('in timeout');
    //           console.log(this.wrapper.nativeElement.scrollHeight);
    //           console.log(this.wrapper.nativeElement.clientHeight);
    // console.log(this.wrapper.nativeElement.scrollTop);
    //       console.log(this.wrapper.nativeElement.scrollTop > this.wrapper.nativeElement.scrollHeight - this.wrapper.nativeElement.clientHeight - 20);
          
          if(this.wrapper.nativeElement.scrollTop < this.wrapper.nativeElement.scrollHeight - this.wrapper.nativeElement.clientHeight - 20) {
            this.bottomScroll = true;
          }
          if(this.wrapper.nativeElement.scrollTop === this.wrapper.nativeElement.scrollHeight - this.wrapper.nativeElement.clientHeight) {
            this.bottomScroll = false;
          }
          this.timeout = false;
          //create additional timeout to check if childs is append and not use mutation observer;
        }, 1000)
      }
      }
  }



  scrollTo(way: string): void {
    if(way === 'top') {
      this.state.shouldScroll = false;
      this.contentContainer.nativeElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
    // console.log('wrapper');
    // console.log('offset');
    //     console.log(this.wrapper.nativeElement.offsetHeight);
    // console.log('scroll');
    //     console.log(this.wrapper.nativeElement.scrollHeight);
    // console.log('client');
    //     console.log(this.wrapper.nativeElement.clientHeight);

    // console.log(this.wrapper.nativeElement.offsetHeight > this.wrapper.nativeElement.scrollHeight);
    // console.log(this.wrapper.nativeElement.offsetWidth);
    // console.log(this.wrapper.nativeElement.scrollWidth);
    // console.log('content');

    // console.log(this.contentContainer.nativeElement.offsetWidth > this.contentContainer.nativeElement.scrollWidth);
    // console.log('el');

    // console.log(this.el.nativeElement.offsetWidth > this.el.nativeElement.scrollWidth);
    // console.log();
    
    
    
    
    if(way === 'bottom') {
      this.state.shouldScroll = true;
      this.contentContainer.nativeElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
      // this.bottomScroll = false;
      // this.topScroll = true;
    }
  }

}
