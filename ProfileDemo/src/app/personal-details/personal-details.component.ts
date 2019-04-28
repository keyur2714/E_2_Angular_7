import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  

  personDetail = {
    name : 'keyursinh Thakur',
    email : 'keyurjava27@gmail.com',
    designation : 'Java J2EE Tech Arch.'
  };

  // name : string = 'Keyursinh Thakur';
  // email : string = 'keyurjava27@gmail.com';
  // designation : string = '';

  constructor() { 
    console.log("Personal Detail Component Object Created...!");
  }

  ngOnInit():void {
    //this.designation = 'Java J2EE Tech Arch.';
  }

}
