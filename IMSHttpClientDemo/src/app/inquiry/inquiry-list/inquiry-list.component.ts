import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../inquiry.service';
import { Inquiry } from '../inquiry.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css']
})
export class InquiryListComponent implements OnInit {

  id : number = 0;
  editId : number = 0;
  inquiryList : Inquiry[] = [];

  newInquiry : Inquiry = new Inquiry();
  inquiryForm = this.formBuilder.group(
    {        
      name : this.formBuilder.control(''),
      email : this.formBuilder.control(''),
      mobileNo : this.formBuilder.control(''),
      course : this.formBuilder.control('')
    }      
  );    
  courseList : Course[] = [];
  successMessage : string = '';
  isUpdate : boolean = false;
  constructor(private formBuilder : FormBuilder,private courseService : CourseService,private inquiryService : InquiryService) { }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(
      (data)=>{
        this.courseList = data;
        this.createInquiryForm();  
        this.getInquiryList();
      }
    );    
  }

  createInquiryForm(){
    // this.inquiryForm = this.formBuilder.group(
    //   {        
    //     name : this.formBuilder.control(''),
    //     email : this.formBuilder.control(''),
    //     mobileNo : this.formBuilder.control(''),
    //     course : this.formBuilder.control('')
    //   }      
    // );    
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
          this.getInquiryList();
        }
      )
    }
  }

  update():void {
    console.log(this.inquiryForm.value);
    if(this.inquiryForm.valid){      
      alert(this.newInquiry.id+" ==== ");
      this.newInquiry = this.inquiryForm.value;      
      this.newInquiry.id = this.editId;
      this.inquiryService.update(this.newInquiry).subscribe(
        (data)=>{
          console.log(data+'=====');
          alert(data);
          this.successMessage = "Inquiry Updated with Id : "+data.id;
          this.getInquiryList();
        }
      )
    }
  }

  getInquiryList():void {
    this.inquiryService.getInquiries().subscribe(
      (data : Inquiry[])=>{
        console.log("========"+JSON.stringify(data));
        this.inquiryList = data;
      }
    );
  }

  edit(id:number):void {    
    this.editId = id;
    this.inquiryService.getInquiriesById(id).subscribe(
      (inquiry : Inquiry) =>{
        this.inquiryForm.setValue({name : inquiry.name,email : inquiry.email,mobileNo : inquiry.mobileNo, course : JSON.stringify(inquiry.course)});
        //this.inquiryForm.patchValue({"course":inquiry.course});
        this.inquiryForm.controls['course'].setValue(inquiry.course);
        console.log(JSON.stringify(inquiry.course));
      }
    )    
    this.isUpdate = true;
  }

  delete(id:number):void{
    let confirmMsg = confirm("Are you sure want to delete?");    
    if(confirmMsg){
      this.inquiryService.delete(id).subscribe(
        ()=>{
          alert("Inquiry Deleted Successfully...");
          this.getInquiryList();
        }
      );
    }    
  }

}
