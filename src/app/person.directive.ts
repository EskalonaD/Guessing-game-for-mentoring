import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPerson]'
})
export class PersonDirective {

  constructor(private el: ElementRef) { }
  @Input() person: 'guesser' | 'puzzler';

  setStyle() {
    
  }
}
