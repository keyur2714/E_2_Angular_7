import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MyDataGridComponent } from './my-data-grid/my-data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    StudentListComponent,
    CourseListComponent,
    MyDataGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
