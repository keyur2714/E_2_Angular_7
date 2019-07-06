import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentNames : string [] = [];

  constructor(private studentsService:StudentsService) { }

  ngOnInit() {
    this.studentsService.getFilteredStudents().subscribe(
      (names: string[])=>{
        this.studentNames = names;
      }
    )
  }

}
