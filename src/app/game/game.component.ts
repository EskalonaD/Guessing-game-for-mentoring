import {
    Component,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { StateService } from '@project/state.service'
import { GameService } from '@project/game.service';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';
import { Message } from '@project/models';

enum keyHandlerMapper {
    'Escape' = 27,
    'Enter' = 13,
}

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    constructor(private state: StateService, private game: GameService) { }

    private unsubscriber$: Subject<void> = new Subject;

    shouldScroll: boolean;
    input: FormControl = new FormControl('');   //check if private flag can be used instead public / move initialization to inInit??
    incorrectInput: boolean;
    messages$: Observable<Message[]> = this.game.chatListener$.pipe(    //move to ngOnInit??
        takeUntil(this.unsubscriber$),
        scan((acc: Message[], val: Message) => {
            if (val.stop) {
                this.state.messageShouldScroll$.next(false);
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

        this.state.messageShouldScroll$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(boolean => this.shouldScroll = boolean);

        this.state.messageShouldScroll$.next(true);
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    setSecretNumber(): void {
        const { value } = this.input;

        if(value === +value) {
            this.incorrectInput = false;
            this.game.setGameParameters(+value);
            this.input.disable();
            return;
        }

        this.incorrectInput = true;
    }
    
    onInputBlur() {
        if(!this.input.disabled) {
            this.input.setValue(null);
        }
    }

    onInputKeyDown(event: KeyboardEvent): void {
        event.stopPropagation();
        const key = event.key || event.keyCode;

        if(keyHandlerMapper.hasOwnProperty(key)) {
            switch (key) {
                case 'Enter':
                case 13:
                    this.setSecretNumber();
                break;
                case 'Escape':
                case 27:
                    this.onInputBlur();
                break;
            }
        }
    }
}
