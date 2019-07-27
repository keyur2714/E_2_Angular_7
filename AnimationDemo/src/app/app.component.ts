import { Component, OnInit, HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple-state.animation';
import { Observable, interval, Subscription } from 'rxjs';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    STATE_ANIMATION,
    ROUND_ANTICLOCK_ANIMATION,
    ON_OFF_2_ANIMATION
  ]
})
export class AppComponent implements OnInit{
  title = 'AnimationDemo';

  names: string[] = ["keyur","denish","vinit"];

  seqNom = 0;
  subscription : Subscription = new Subscription();
  numberObservable = interval(1000);

  state : string = 'start';
  tableState : string = 'on';

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  @HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute'; 

  ngOnInit(){
    this.subscription = this.numberObservable.subscribe(
      (num)=>{
        this.state = 'stop';
        this.seqNom = num;
        if(this.seqNom > 10){
          this.subscription.unsubscribe();
        }
      }
    )    
  }

  toggleState(): void {
    this.state = this.state === 'start' ? 'stop' : 'start';    
    this.tableState = this.tableState === 'on' ? 'off' : 'on';    
  }
}
