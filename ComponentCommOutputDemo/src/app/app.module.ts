import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
