import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from './student.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Student[] = [];

  displayedColumns: string[] = ['rollNo', 'name', 'per', 'grade'];
  //dataSource;
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    let student1 = new Student("03BTECH47","keyur",60.5,"First");
    let student2 = new Student("03BTECH44","vinit",50.5,"Second");
    let student3 = new Student("03BTECH26","denish",70.5,"Dist");
    let student4 = new Student("03BTECH54","piyush",60.5,"First");
    let student5 = new Student("03BTECH24","darshana",70.5,"Dist");

    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);
    this.studentList.push(student4);
    this.studentList.push(student5);

    //this.dataSource = this.studentList;
    this.dataSource = new MatTableDataSource(this.studentList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
