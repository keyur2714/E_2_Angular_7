import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillDetailsComponent } from './skill-details/skill-details.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { DeclarationComponent } from './declaration.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    SkillDetailsComponent,
    EducationDetailComponent,
    DeclarationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
