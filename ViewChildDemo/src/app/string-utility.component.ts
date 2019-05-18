import { Component } from '@angular/core';

@Component({
    selector : 'app-string-utility',
    template : ''    
})
export class StringUtilityComponent {
    
    constructor(){
        console.log("String Utility Component Object Created...!");
    }

    reverse(str: string):string{
        let revStr = str.split('').reverse().join('');
        return revStr;
    }

    convertToUpperCase(str: string): string{
        let upperStr = str.toUpperCase();
        return upperStr;
    }

    convertToLowerCase(str: string): string{
        let lowerStr = str.toLowerCase();
        return lowerStr;
    }

}