import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMessage : string = '';
  loginForm;

  constructor(private formBuilder : FormBuilder,private authService : AuthService,private router : Router) { }

  ngOnInit() {
    this.createLoginForm();
    this.authenticateN();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      userName : this.formBuilder.control('',Validators.required),
      password : this.formBuilder.control('',Validators.required)
    })
  }

  authenticateN() : void{
    if(this.loginForm.valid){
      this.authService.authenticateN(this.loginForm.get('userName').value,this.loginForm.get('password').value).subscribe(
        (data)=>{
          console.log(JSON.stringify(data)+" =======");
          if(data !== undefined) {
            this.router.navigate([this.authService.successUrl]);            
            sessionStorage.setItem("token",data.token);
          }else{
             this.errorMessage = 'Invalid Username or Password.';
          }        
        },
        (error)=>{
          //Server Error
        }
      )  
    }    
  }

  authenticate():void{    
    if(this.loginForm.valid){
      if(this.authService.authenticate(this.loginForm.get('userName').value,this.loginForm.get('password').value)){
        this.router.navigate([this.authService.successUrl]);
      }else{
        this.errorMessage = 'Invalid Username or Password.';
      }
    }
  }
}
