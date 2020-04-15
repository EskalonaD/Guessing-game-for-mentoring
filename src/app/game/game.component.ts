import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
    Renderer2,
} from '@angular/core';
import { StateService } from '@project/state.service'
import { GameService } from '@project/game.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';
import { Message } from '@project/models';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    constructor(private state: StateService, private game: GameService, private renderer: Renderer2) { }

    private unsubscriber$: Subject<void> = new Subject;
    @ViewChild('divider', { static: false }) private divider:ElementRef;

    showDivider: boolean;
    shouldScroll: boolean;
    input: FormControl = new FormControl('');   //check if private flag can be used instead public / move initialization to inInit??
    incorrectInput: boolean;
    messages$: Observable<Message[]> = this.game.chatListener$.pipe(    //move to ngOnInit??
        takeUntil(this.unsubscriber$),
        scan((acc: Message[], val: Message) => {
            if (val.stop) {
                this.state.messageShouldScroll$.next(false);
                this.showDivider = true;
                setTimeout(() => this.renderer.addClass(this.divider.nativeElement, 'large-divider'))
                this.unsubscriber$.next();
                this.unsubscriber$.complete();
            }
            acc.push(val);
            return acc
        }, []),
    );

    ngOnInit() {
        this.shouldScroll = true;
        this.incorrectInput = false;
        this.showDivider = false;

        this.state.messageShouldScroll$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(boolean => this.shouldScroll = boolean);

        this.state.messageShouldScroll$.next(true);
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    handleInput(): void {
        if (!this.shouldHandleInput()) return;

        const { value } = this.input;

        if (value === +value) {
            this.incorrectInput = false;

            this.game.setGameParameters(+value);
            this.input.disable();
        }
        else {
            this.incorrectInput = true;

            this.input.setValue(null);
        }
    }

    private shouldHandleInput(): boolean {
        return !this.input.disabled
    }

    onInputKeyDown(event: KeyboardEvent): void {
        event.stopPropagation();
        const key = event.key || event.keyCode;

        switch (key) {
            case 'Enter':
            case 13:
                this.handleInput();
                break;
            case 'Escape':
            case 27:
                this.input.setValue(null);
                break;
        }
    }
}
