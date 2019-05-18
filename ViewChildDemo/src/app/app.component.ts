import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'Radhe Krishna...!';

  @ViewChild("heading")
  headingTag : ElementRef;

  ngOnInit(){
    console.log(this.headingTag.nativeElement.innerHTML);
  }

  ngAfterViewInit(){
    console.log(this.headingTag.nativeElement.innerHTML);
    this.headingTag.nativeElement.innerHTML = 'Sachin Tendulakar...!';
  }
}
