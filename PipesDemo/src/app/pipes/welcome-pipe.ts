import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'welcome'
})
export class WelcomePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {        
        //alert(value);
        value = 'Welcome '+value;
        return value;
    }
}