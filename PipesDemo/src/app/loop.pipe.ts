import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loop'
})
export class LoopPipe implements PipeTransform {

  transform(value: any, loopCount : number): any {
    let newValue = '';
    for(let i=1;i<=loopCount;i++){
      newValue = newValue+"\n"+value;
    }
    return newValue;
  }

}
