import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyColorDirective } from './my-color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';

  @ViewChild("color")
  color : ElementRef;

  @ViewChild("h3")
  h3 : ElementRef;

  @ViewChild("p")
  p : ElementRef;

  @ViewChild(MyColorDirective)
  myColorDirective : MyColorDirective;

  changeColor():void{    
    this.myColorDirective.changeColor(this.color.nativeElement.value,this.h3);
    this.myColorDirective.changeColor(this.color.nativeElement.value,this.p);
  }
}
