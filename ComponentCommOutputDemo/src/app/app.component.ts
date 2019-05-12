import { Component } from '@angular/core';
import { Lookup } from './my-dropdown/lookup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentCommOutputDemo';

  myMessage : string = '';

  selectedCountry : Lookup = new Lookup();
  selectedState : Lookup = new Lookup();


  countryList : Lookup[] = [
    {
      id : 1,
      code : 'IND',
      desc : 'India'
    },
    {
      id : 2,
      code : 'US',
      desc : 'United States'
    },
    {
      id : 3,
      code : 'UK',
      desc : 'United Kingdom'
    }
  ];

  stateList : Lookup[] = [
    {
      id : 11,
      code : 'GJ',
      desc : 'Gujrat'
    },
    {
      id : 21,
      code : 'MH',
      desc : 'Maharashtra'
    },
    {
      id : 31,
      code : 'MP',
      desc : 'Madhya Pradesh'
    }
  ];

  messageList : string[] = [
    "Hello",
    "How are you?",
    "Good Morning.",
    "Good Afternoon",
    "Good Evening"
  ];

  getMessage(message:string):void {
    console.log(2);
    this.myMessage = 'My Message: '+message;
  }

  save():void{
    alert("Hi..."+this.selectedCountry.desc+" "+this.selectedState.desc);    
  }

  getSelectedCountry(country:Lookup):void{
    this.selectedCountry = country;
  }
  getSelectedState(state:Lookup):void{
    this.selectedState = state;
  }
}
