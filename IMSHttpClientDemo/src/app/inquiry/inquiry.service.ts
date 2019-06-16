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

  getInquiriesById(id:number) : Observable<Inquiry>{
    return this.httpClient.get<Inquiry>(this.appURL+"/"+id);
  }

  save(inquiry : Inquiry) : Observable<Inquiry> {
    return this.httpClient.post<Inquiry>(this.appURL,inquiry);
  }

  update(inquiry : Inquiry) : Observable<Inquiry> {
    return this.httpClient.put<Inquiry>(this.appURL+"/"+inquiry.id,inquiry);
  }

  delete(id:number): Observable<number>{
    return this.httpClient.delete<number>(this.appURL+"/"+id);
  }
}
