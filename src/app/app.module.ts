import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonDirective } from './person.directive';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
