import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentService : StudentService = new StudentService();
  studentList : Student[] = [];  
  columnList : string[] = ["id","name","feeStatus","course"];
  columnHeaderList : string[] = ["Id","Name","Fee Status","Course"];

  constructor() { }

  ngOnInit() {
    this.studentList = this.studentService.getStudentList();
  }

}
