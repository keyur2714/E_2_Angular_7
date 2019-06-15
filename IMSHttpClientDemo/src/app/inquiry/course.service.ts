import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  appURL : string = 'http://localhost:3000/courses';

  constructor(private httpClient : HttpClient) { }

  getCourseList():Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.appURL);
  }
  getCourseById(id : number):Observable<Course> {
    return this.httpClient.get<Course>(this.appURL+"/"+id);
  }
}
