import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InquiryModule } from './inquiry/inquiry.module';
import { InquiryListComponent } from './inquiry/inquiry-list/inquiry-list.component';
import { InquiryEntryComponent } from './inquiry/inquiry-entry/inquiry-entry.component';
import { CourseService } from './inquiry/course.service';

@NgModule({
  declarations: [
    AppComponent,
    InquiryListComponent,
    InquiryEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InquiryModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
