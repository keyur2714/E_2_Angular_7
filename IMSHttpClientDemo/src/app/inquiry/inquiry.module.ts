import { NgModule } from '@angular/core';
import { InquiryService } from './inquiry.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations : [
        //InquiryListComponent
    //InquiryEntryComponent
    ],
    providers : [
        InquiryService
    ],
    imports : [
        CommonModule,        
        HttpClientModule
    ]
})
export class InquiryModule {
    constructor(){
        console.log("Inquiry Module Loaded...!");
    }
}