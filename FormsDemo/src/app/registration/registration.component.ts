import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from './registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit , AfterViewInit {

  registration : Registration = new Registration();
  isSubmit : boolean = false;

  errorMsg : string = '';

  @ViewChild("male")
  gender : ElementRef;


  constructor() { }

  ngOnInit() {
    this.registration.gender = 'M';
  }

  ngAfterViewInit() {
    
  }

  checkEq(confirmPassword:string,password:string) : void {    
    if( confirmPassword !== password){      
      this.errorMsg = "Both password are not match.";
    }else{
      this.errorMsg = '';
    }
  }

  save(frm: NgForm) : void {
    console.log(frm);
    console.log(frm.value);
    console.log(frm.controls['name'].value);
    console.log(frm.controls['email'].value);
    this.isSubmit = true;
    //this.registration = frm.value;
  }

}
