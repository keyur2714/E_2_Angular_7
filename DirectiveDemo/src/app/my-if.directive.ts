import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private viewContainerRef : ViewContainerRef,private templateRef: TemplateRef<any>) { }

  @Input('appMyIf') set myIf(condition : boolean){    
    alert(condition);
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }  
}
