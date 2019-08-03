import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './pipes/welcome-pipe';
import { LoopPipe } from './loop.pipe';
import { MaskPipe } from './mask.pipe';
import { StatusPipe } from './status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    LoopPipe,
    MaskPipe,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
