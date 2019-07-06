import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudentList() : Observable<Student[]>{
    let stud1 = new Student();
    stud1.rollNo = '03BT47';
    stud1.name = 'keyur';
    stud1.per = 72.14;
    stud1.grade = 'Dist';

    let stud2 = new Student();
    stud2.rollNo = '03BT44';
    stud2.name = 'vinit';
    stud2.per = 64.14;
    stud2.grade = 'First';

    let stud3 = new Student();
    stud3.rollNo = '03BT26';
    stud3.name = 'denish';
    stud3.per = 84.14;
    stud3.grade = 'Dist';

    let studentList = [];
    studentList.push(stud1);
    studentList.push(stud2);
    //studentList.push(stud3);

    return of(studentList);
  }

  getStudentNames() : Observable<string[]>{
    return this.getStudentList().pipe(
     filter(students=> {
       for(let student of students){
         if(student.name === 'denish'){
           return false;
         }
       }
       return true; 
     }), 
     map(students=>{
       let names : string[] = [];
       for(let student of students){
         names.push(student.name.toUpperCase());
       }
       return names;
      })
    );
  }

  getFilteredStudents(): Observable<string[]>{
    return this.getStudentNames().pipe(
      filter(names=> {
        names.push('denish');
        alert(names);        
        return names.indexOf('denish') > 0 ? false : true;
      },
      map(names=>{
        return names;
      }
      )))
  }
}


