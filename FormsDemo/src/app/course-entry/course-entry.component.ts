import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Course } from './course.model';

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent implements OnInit {

  //courseEntryForm : FormGroup;
  courseEntryForm;
  isSubmit : boolean = false;
  newCourse : Course = new Course();

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    //this.createCourseEntryForm();
    this.createCourseEntryFormWithFormBuilder();
  }

  // createCourseEntryForm(){
  //   this.courseEntryForm = new FormGroup({
  //     courseCode : new FormControl('',Validators.required),
  //     courseName : new FormControl('',Validators.required),
  //     fees : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
  //     durationInWeek : new FormControl(4),
  //     trainerNames : new FormArray([new FormControl()])
  //   })
  // }

  createCourseEntryFormWithFormBuilder(){
 //   this.courseEntryForm = this.formBuilder.group(new Course());/
    this.courseEntryForm = this.formBuilder.group({
      courseCode : this.formBuilder.control('',Validators.required),
      courseName : this.formBuilder.control('',Validators.required),
      fees : this.formBuilder.control('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      durationInWeek : this.formBuilder.control(4),
      trainerNames : this.formBuilder.array([this.formBuilder.control('')])
    })
  }

  addTrainer():void {
    //let newTrainer = new FormControl();
    let newTrainer = this.formBuilder.control('');
    //(<FormArray>this.courseEntryForm.get('trainerNames')).push(newTrainer);
    (<FormArray>this.courseEntryForm.get('trainerNames')).push(newTrainer);
  }

  save(): void {
    this.isSubmit = true;
    console.log(this.courseEntryForm);
    console.log(this.courseEntryForm.value);
    this.newCourse.id = 1;
    this.newCourse = this.courseEntryForm.value;
  }

  updateFeesValidation() : void {
    let courseCode : string = this.courseEntryForm.get('courseCode').value;
    if( courseCode.toUpperCase() === 'DEMO'){
      this.courseEntryForm.get('fees').setValidators([]);
      this.courseEntryForm.get('fees').updateValueAndValidity();
    }
  }
}
