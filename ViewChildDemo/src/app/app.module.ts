import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringOperationComponent } from './string-operation/string-operation.component';
import { StringUtilityComponent } from './string-utility.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOperationComponent,
    StringUtilityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
