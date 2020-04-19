import {
    Component,
    ViewChild,
    ElementRef,
    Renderer2,
    OnDestroy,
    ComponentFactoryResolver,
    OnInit,
} from '@angular/core';
import { StateService } from '@project/state.service';
import { takeUntil, delay, delayWhen } from 'rxjs/operators';
import { Subject, empty, of } from 'rxjs';
import { GameAnchorDirective } from '@project/game-anchor.directive';
import { GameComponent } from '@project/game/game.component';
import { ScrollDirection } from '@project/models';
import { FooterComponent } from '@project/footer/footer.component';

const debounce = (func: Function, ms: number): (any) => void => {
    let timeoutID: any;
    return (...args: any[])  => {
        if(timeoutID) {
            return undefined
        }
        timeoutID = setTimeout(() => {
            func(...args)
            clearTimeout(timeoutID);
            timeoutID = undefined;
        }, ms);
    }
}

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
  })
  export class WrapperComponent implements OnInit, OnDestroy {
    constructor(
        private state: StateService,
        private renderer: Renderer2,
        private resolver: ComponentFactoryResolver,
    ) { }

    @ViewChild('contentContainer', { static: false }) private contentContainer: ElementRef;
    @ViewChild('wrapper', { static: false }) private wrapper: ElementRef;
    @ViewChild(GameAnchorDirective, { static: true }) private gameContainer: GameAnchorDirective;
    @ViewChild(FooterComponent, { static: false }) private footer: FooterComponent;

    private unsubscriber$: Subject<void> = new Subject;
    private GameComponent: typeof GameComponent = GameComponent;
    private scrollToBottomButtonHideZone: number;

    showFooter: boolean;
    showStartGameButton: boolean;
    showScrollButtons: boolean;
    showScrollTopButton: boolean;
    showScrollBottomButton: boolean;

    ngOnInit() {
        this.showScrollButtons = false;
        this.showScrollTopButton = false;
        this.showScrollBottomButton = false;
        this.showStartGameButton = true;

        this.state.isEnded$.pipe(
            takeUntil(this.unsubscriber$),
            delayWhen(isEnded => isEnded ? empty().pipe(delay(3000)) : of(null)),
        ).subscribe(shouldShow => {
            this.showFooter = shouldShow;
        });

        this.state.chatDelayer$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(_ => this.scrollLogic());

        this.state.scrollToBottomButtonHideZone$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(appearingElementHeightString => {
            const elementHeight = Number(appearingElementHeightString.replace('px', ''));
            const distanceToBottom = Number(getComputedStyle(this.wrapper.nativeElement)
                .marginBottom.replace('px', ''));
            this.scrollToBottomButtonHideZone = elementHeight + distanceToBottom;
        })
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    onScroll = debounce(this.scrollLogic.bind(this), 200);

    scrollLogic(): void {
        if (this.showScrollButtons) {
            const { nativeElement: element } = this.wrapper;

            if (element.scrollTop > 50) {
                this.showScrollTopButton = true;
            }

            if (element.scrollTop < 50) {
                this.showScrollTopButton = false;
            }

            const isScrolledBot = element.scrollTop + this.scrollToBottomButtonHideZone >= element.scrollHeight - element.clientHeight;

            if (!isScrolledBot) {
                this.state.messageShouldScroll$.next(false);
                this.showScrollBottomButton = true;
                return;
            }

            if (isScrolledBot) {
                this.state.messageShouldScroll$.next(true);
                this.showScrollBottomButton = false;
            }
        }
    }

    startGame(): void {
        this.showStartGameButton = false;
        this.state.isEnded$.next(false);

        const onScroll = this.renderer.listen(this.wrapper.nativeElement, 'scroll', () => {
            this.showScrollButtons = true;
            onScroll();
        });

        const componentFactory = this.resolver.resolveComponentFactory(this.GameComponent);
        const viewContainerRef = this.gameContainer.viewRef;
        viewContainerRef.createComponent(componentFactory);
    }

    endGame(): void {
        this.showFooter = false;
        this.showStartGameButton = true;
        this.showScrollButtons = false;
        this.gameContainer.viewRef.clear();
    }

    scrollTo(way: ScrollDirection): void {
        if (way === 'top') {
            this.state.messageShouldScroll$.next(false);
            this.contentContainer.nativeElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }

        if (way === 'bottom') {
            this.state.messageShouldScroll$.next(true);
            this.contentContainer.nativeElement.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }
    }
}
