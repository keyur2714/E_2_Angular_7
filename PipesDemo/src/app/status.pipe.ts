import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 'dist'){
      value = 'D';
    }else if(value === 'first'){
      value = 'F';
    }else if(value === 'second'){
      value = 'S';
    }else if(value === 'pass'){
      value = 'P';
    }else if(value === 'fail'){
      value = 'FAIL';
    }
    return value;
  }

}
