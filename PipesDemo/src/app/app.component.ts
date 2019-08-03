import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';
  seqNum : number = 0;

  numberObservable : Observable<number> = interval(1000);


  constructor(private http:HttpClient){}

  person = {
    name : 'keyur',
    city : 'surat',
    mobileNo : '7387029671',
    email : 'keyurjava27@gmail.com',
    accNo: '1231212222',
    grade : 'fail'
  };

  today : Date = new Date();

  ngOnInit(){
    // this.numberObservable.subscribe(
    //   (data)=>{
    //     this.seqNum = data;
    //   }
    // )
  }

  sum(num1:number,num2:number):number {
    return num1 + num2;
  }
}
