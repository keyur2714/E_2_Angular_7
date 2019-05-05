import { Component, OnInit } from '@angular/core';
import { Inquiry } from '../model/inquiry.model';
import { Course } from '../model/course.model';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-inquiry-entry',
  templateUrl: './inquiry-entry.component.html',
  styleUrls: ['./inquiry-entry.component.css']
})
export class InquiryEntryComponent implements OnInit {

  courseService : CourseService = new CourseService();

  newInquiry : Inquiry = new Inquiry();

  courseList : Course[] = [];

  constructor() { }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
    this.newInquiry.course = this.courseList[2];
  }

  saveInquiry():void{
    //console.log(this.newInquiry.name+" "+this.newInquiry.course.courseName+" "+this.newInquiry.mobileNo);
    this.newInquiry.setId = 27;
    alert(this.newInquiry.getId);
    this.newInquiry.printInquiry();
  }
}
