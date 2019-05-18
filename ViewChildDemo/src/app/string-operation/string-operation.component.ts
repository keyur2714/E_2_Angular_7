import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StringUtilityComponent } from '../string-utility.component';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  result : string = '';

  @ViewChild("str")
  str : ElementRef;

  @ViewChild("res")
  res : ElementRef;

  @ViewChild(StringUtilityComponent)
  stringUtilityComponent : StringUtilityComponent;

  constructor() { }

  ngOnInit() {
  }

  // reverse(str:string):void{
  //   console.log(str);
  //   let strArr = str.split('');
  //   console.log(strArr);
  //   let revStrArr = str.split('').reverse();
  //   console.log(revStrArr);
  //   let revStr = revStrArr.join('');
  //   console.log(revStr);
  //   this.result = revStr;
  //   this.str.nativeElement.value = '';
  // }

  // reverse():void{
  //   let str = this.str.nativeElement.value;
  //   console.log(str);
  //   let strArr = str.split('');
  //   console.log(strArr);
  //   let revStrArr = str.split('').reverse();
  //   console.log(revStrArr);
  //   let revStr = revStrArr.join('');
  //   console.log(revStr);
  //   this.result = revStr;
  //   this.str.nativeElement.value = '';
  //   this.res.nativeElement.innerHTML = "Result is : "+this.result;
  // }

  reverse() : void {
    let str = this.str.nativeElement.value;
    this.result = this.stringUtilityComponent.reverse(str);
    this.str.nativeElement.value = '';
    this.res.nativeElement.innerHTML = "Reverse String is : "+this.result;
  }

  upper() : void {
    let str = this.str.nativeElement.value;
    this.result = this.stringUtilityComponent.convertToUpperCase(str);
    this.str.nativeElement.value = '';
    this.res.nativeElement.innerHTML = "Upper String is : "+this.result;
  }

  lower() : void {
    let str = this.str.nativeElement.value;
    this.result = this.stringUtilityComponent.convertToLowerCase(str);
    this.str.nativeElement.value = '';
    this.res.nativeElement.innerHTML = "Lower String is : "+this.result;
  }
}
