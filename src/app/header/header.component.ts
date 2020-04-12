import {
    Component,
    Output,
    EventEmitter,
    Input
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor() { }

    @Input() showStartGameButton: boolean;
    @Output() private start: EventEmitter<any> = new EventEmitter;

    startGame(): void {
        this.start.emit();
    }
}
