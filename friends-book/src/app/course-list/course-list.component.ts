import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseService : CourseService = new CourseService();
  courseList : Course[] = [];

  constructor() { }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
  }

}
