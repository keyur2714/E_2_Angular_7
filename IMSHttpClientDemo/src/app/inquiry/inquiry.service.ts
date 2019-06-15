import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inquiry } from './inquiry.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  appURL : string = 'http://localhost:3000/inquiries';

  constructor(private httpClient : HttpClient) { }

  getInquiries() : Observable<Inquiry[]>{
    return this.httpClient.get<Inquiry[]>(this.appURL);
  }

  save(inquiry : Inquiry) : Observable<Inquiry> {
    return this.httpClient.post<Inquiry>(this.appURL,inquiry);
  }
}
