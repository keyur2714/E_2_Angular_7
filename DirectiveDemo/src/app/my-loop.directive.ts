import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private viewContainerRef : ViewContainerRef , private templateRef : TemplateRef<any>) { }

  @Input('appMyLoop') set myForLoop(loopCounter : number) {    
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  private _index : number;

  @Input() set appMyLoopIndex(idx : number) {
    this._index = idx;
    console.log(this._index+" **** "+idx);
  }
}
