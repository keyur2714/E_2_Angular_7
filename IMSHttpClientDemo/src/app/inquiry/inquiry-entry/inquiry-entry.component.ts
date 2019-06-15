import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { Course } from '../course.model';
import { Inquiry } from '../inquiry.model';
import { InquiryService } from '../inquiry.service';

@Component({
  selector: 'app-inquiry-entry',
  templateUrl: './inquiry-entry.component.html',
  styleUrls: ['./inquiry-entry.component.css']
})
export class InquiryEntryComponent implements OnInit {

  newInquiry : Inquiry = new Inquiry();
  inquiryForm : FormGroup = new FormGroup({});
  courseList : Course[] = [];
  successMessage : string = '';
  constructor(private formBuilder : FormBuilder,private courseService : CourseService,private inquiryService : InquiryService) { }

  ngOnInit() {
     this.courseService.getCourseList().subscribe(
      (data)=>{
        this.courseList = data;
        this.createInquiryForm();  
      }
    );      
    this.createInquiryForm();  
  }

  createInquiryForm(){
    this.inquiryForm = this.formBuilder.group(
      {
        id : this.formBuilder.control(''),
        name : this.formBuilder.control(''),
        email : this.formBuilder.control(''),
        mobileNo : this.formBuilder.control(''),
        course : this.formBuilder.control('')
      }      
    );    
    this.inquiryForm.patchValue({"course":this.courseList[1]});
  }

  save():void {
    console.log(this.inquiryForm.value);
    if(this.inquiryForm.valid){
      this.newInquiry = this.inquiryForm.value;
      this.inquiryService.save(this.newInquiry).subscribe(
        (data)=>{
          console.log(data+'=====');
          this.successMessage = "Inquiry Created with Id : "+data.id;
        }
      )
    }
  }

}
