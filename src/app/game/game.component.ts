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

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
    constructor(private state: StateService, private game: GameService) { }

    private unsubscriber$: Subject<void> = new Subject;

    shouldScroll: boolean;
    input: FormControl = new FormControl('');   //check if private flag can be used instead public
    messages$: Observable<Message[]> = this.game.chatListener$.pipe(
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
        this.state.messageShouldScroll$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(boolean => this.shouldScroll = boolean);

        this.state.messageShouldScroll$.next(true);
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    setSecretNumber(input: string): void {
        this.game.setGameParameters(+input)
    }
}
