import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, maskChar : string, noOfMsakChar : number): any {    
    let visiblevalue = value.substring(value.length - noOfMsakChar);
    let maskString = '';    
    for(let i=1;i<=value.length - noOfMsakChar;i++){
      maskString = maskString + maskChar;
    }
    return maskString+visiblevalue;
  }

}
