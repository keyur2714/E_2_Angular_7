import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective implements AfterViewInit{

   @Input()
   color : string = 'orange';
   @Input()
   fontSize : string = '55px';

   constructor(private elementRef : ElementRef) {
    console.log("Directive Object Created...!");
   }

   ngAfterViewInit(){
     console.log(this.elementRef.nativeElement);
     this.elementRef.nativeElement.style.color = this.color;     
     this.elementRef.nativeElement.style.fontSize = this.fontSize;
   }

   changeColor(color:string,elementRef : ElementRef):void{
    elementRef.nativeElement.style.color = color;     
   }
}
