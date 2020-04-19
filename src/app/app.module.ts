import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { MessageComponent } from './message/message.component';
import { ScrollDirective } from './scroll.directive';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { GameAnchorDirective } from './game-anchor.directive';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameComponent,
    MessageComponent,
    ScrollDirective,
    ScrollButtonComponent,
    GameAnchorDirective,
    WrapperComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  entryComponents: [
    GameComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
