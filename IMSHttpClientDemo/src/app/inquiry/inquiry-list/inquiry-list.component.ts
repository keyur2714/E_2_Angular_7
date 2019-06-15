import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../inquiry.service';
import { Inquiry } from '../inquiry.model';

@Component({
  selector: 'app-inquiry-list',
  templateUrl: './inquiry-list.component.html',
  styleUrls: ['./inquiry-list.component.css']
})
export class InquiryListComponent implements OnInit {

  inquiryList : Inquiry[] = [];

  constructor(private inquiryService : InquiryService) { }

  ngOnInit() {
    this.inquiryService.getInquiries().subscribe(
      (data : Inquiry[])=>{
        console.log("========"+JSON.stringify(data));
        this.inquiryList = data;
      }
    );
  }

}
