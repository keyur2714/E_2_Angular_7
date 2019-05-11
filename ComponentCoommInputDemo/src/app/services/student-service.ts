import { Student } from '../model/student.model';
import { CourseService } from './course-service';
import { Course } from '../model/course.model';

export class StudentService {

    getStudentList(): Student[] {
        let studentList : Student [] = [];
        let courseList : Course[] = new CourseService().getCourseList();
        
        let student1 = new Student();
        student1.id = 32;
        student1.name = 'keyur';
        student1.feeStatus = 'PAID';
        student1.course = courseList[0];

        let student2 = new Student();
        student2.id = 26;
        student2.name = 'denish';
        student2.feeStatus = 'NOT_PAID';
        student2.course = courseList[1];

        let student3 = new Student();
        student3.id = 44;
        student3.name = 'vinit';
        student3.feeStatus = 'PARTIAL_PAID';
        student3.course = courseList[2];

        studentList.push(student1);
        studentList.push(student2);
        studentList.push(student3);

        return studentList;
    }
}