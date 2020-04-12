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
import { ViewEncapsulation } from '@angular/core';
import { StateService } from './state.service';
import { takeUntil } from 'rxjs/operators';
import { Subscription, Subject } from 'rxjs';
import { GameAnchorDirective } from './game-anchor.directive';
import { MainComponent } from './main/main.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    constructor(
        private state: StateService,
        private renderer: Renderer2,
        private resolver: ComponentFactoryResolver,
    ) { }

    title = 'game2';
        
    @ViewChild('contentContainer', { static: false }) private contentContainer: ElementRef;
    @ViewChild('wrapper', { static: false }) private wrapper: ElementRef;
    @ViewChild(GameAnchorDirective, { static: true }) gameContainer: GameAnchorDirective; //check why static true;

    private unsubscriber$: Subject<void> = new Subject<void>();
    private GameComponent: typeof MainComponent = MainComponent;// rename
    private shouldUpdateMessageShouldScroll: boolean;

    showFooter: boolean;
    showStartGameButton: boolean;
    showScrollButtons: boolean = false;
    showScrollTopButton: boolean = false;
    showScrollBottomButton: boolean = false;
    scrollButtonUpdaterOnMessegeCreation$: Subscription = this.state.chat$.pipe(
        takeUntil(this.unsubscriber$),
    ).subscribe(_ => this.onScroll());

    ngOnInit() {
        this.showStartGameButton = true;

        this.state.isEnded$.pipe(
            takeUntil(this.unsubscriber$),
        ).subscribe(boolean => this.showFooter = boolean);

        this.state.messageShouldScroll$
            .pipe(
                takeUntil(this.unsubscriber$),
            ).subscribe(boolean => {
                this.shouldUpdateMessageShouldScroll = boolean;
                this.showScrollBottomButton = !boolean;
            });
    }

    ngAfterViewInit() {
        const onScroll = this.renderer.listen(this.wrapper.nativeElement, 'scroll', () => {
            this.showScrollButtons = true;
            onScroll();
        });

        // update to use deltaY property for defining direction/place of 'wheel-end' event
        this.renderer.listen(this.wrapper.nativeElement, 'wheel', () => {
            if (this.wrapper.nativeElement.scrollHeight !== this.wrapper.nativeElement.clientHeight) {
                if (this.shouldUpdateMessageShouldScroll) {
                    this.state.messageShouldScroll$.next(false);
                    return;
                }

                if (this.wrapper.nativeElement.scrollTop === this.wrapper.nativeElement.scrollHeight - this.wrapper.nativeElement.clientHeight) {
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

        // change variables names;
        const componentFactory = this.resolver.resolveComponentFactory(this.GameComponent);
        const viewContainerRef = this.gameContainer.viewRef; // check what exactly is viewContainerRef and another Refs(elementref, componentref etc);
        viewContainerRef.createComponent(componentFactory);
    }

    endGame(): void {
        this.showFooter = false;
        this.showStartGameButton = true;
        this.showScrollButtons = false;
        this.gameContainer.viewRef.clear();
    }

    scrollTo(way: string): void {
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
