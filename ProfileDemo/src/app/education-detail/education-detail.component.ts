import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  educationList : Education[] = [];

  constructor() { }

  ngOnInit() {
    let education1 = new Education();
    education1.education = "S.S.C";
    education1.yearOfPassing = 2002;
    education1.per = 72.14;

    let education2 = new Education();
    education2.education = "H.S.C";
    education2.yearOfPassing = 2004;
    education2.per = 66.50;

    let education3 = new Education();
    education3.education = "BTech IT";
    education3.yearOfPassing = 2008;
    education3.per = 65.44;

    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);
  }

}
