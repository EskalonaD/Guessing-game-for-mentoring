import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appGameAnchor]'
})
export class GameAnchorDirective {
    constructor(public viewRef: ViewContainerRef) { }
}
