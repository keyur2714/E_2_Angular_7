import { Component, OnInit } from '@angular/core';
import { interval, Subscription, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';

  subscription : Subscription = new Subscription();

  numberObservable = interval(1000);
  num : number = 0;

  numbers = of(1,2,3,4,5,6);

  ngOnInit(){
    this.subscription = this.numberObservable.subscribe(
      (data)=>{
        this.num = data;
      }
    )

    this.numbers.pipe(
      filter(n=> n%2 == 0),
      map(n=>n+n)
    ).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

  stop():void {    
    this.subscription.unsubscribe();
  }
}
