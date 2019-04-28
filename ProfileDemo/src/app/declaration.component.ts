import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-declaration',
    template : `<p>{{declarationNote}}</p>`,
    styles : ["p{color : 'blue'}"]
})
export class DeclarationComponent implements OnInit{
    
    declarationNote : string;

    ngOnInit(): void {
        this.declarationNote = "Above information is best of my knowledge...!";
    }
}