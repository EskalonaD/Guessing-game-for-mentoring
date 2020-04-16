import {
    Component,
    ViewChild,
    ElementRef,
    Renderer2,
    AfterViewInit,
    OnDestroy,
    ComponentFactoryResolver,
    OnInit,
} from '@angular/core';
import { StateService } from '@project/state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GameAnchorDirective } from '@project/game-anchor.directive';
import { GameComponent } from '@project/game/game.component';
import { ScrollDirection } from '@project/models';
import { FooterComponent } from '@project/footer/footer.component';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
  })
  export class WrapperComponent implements OnInit, AfterViewInit, OnDestroy {
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
    private shouldUpdateMessageShouldScroll: boolean;

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
        ).subscribe(shouldShow => {
            this.showFooter = shouldShow;
            if(shouldShow) {
                setTimeout(() => {
                    this.footer.wrapper.nativeElement.scrollIntoView({block: 'end', behavior: 'smooth' })
                    this.showScrollBottomButton = false;
                });
            }
        });

        this.state.messageShouldScroll$
            .pipe(
                takeUntil(this.unsubscriber$),
            ).subscribe(boolean => {
                this.shouldUpdateMessageShouldScroll = boolean;
                this.showScrollBottomButton = !boolean;
            });

        this.state.chat$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(_ => this.onScroll());
    }

    ngAfterViewInit() {
        this.renderer.listen(this.wrapper.nativeElement, 'wheel', ($event) => {
            if (this.wrapper.nativeElement.scrollHeight !== this.wrapper.nativeElement.clientHeight) {
                const { nativeElement: element } = this.wrapper;
                const isScrolledBot = element.scrollTop + $event.deltaY >= element.scrollHeight - element.clientHeight;

                if (this.shouldUpdateMessageShouldScroll && !isScrolledBot) {
                    this.state.messageShouldScroll$.next(false);
                    return;
                }

                if (isScrolledBot) {
                    this.state.messageShouldScroll$.next(true);
                }
            }
        });
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    onScroll(): void {
        if (this.showScrollButtons) {
            if (this.wrapper.nativeElement.scrollTop > 50) {
                this.showScrollTopButton = true;
            }

            if (this.wrapper.nativeElement.scrollTop < 50) {
                this.showScrollTopButton = false;
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
