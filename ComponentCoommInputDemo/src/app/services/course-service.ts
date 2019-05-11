import { Course } from '../model/course.model';

export class CourseService {
    
    getCourseList(): Course[] {

        let courseList: Course[] = [];

        let course1 = new Course();
        course1.id = 1;
        course1.courseCode = "angular";
        course1.courseName = "Angular";
        course1.fees = 13800;
        course1.trainerName = "keyur";

        let course2 = new Course();
        course2.id = 2;
        course2.courseCode = "java";
        course2.courseName = "Java";
        course2.fees = 10800;
        course2.trainerName = "keyur";

        let course3 = new Course();
        course3.id = 3;
        course3.courseCode = "bigdata";
        course3.courseName = "BigData";
        course3.fees = 15800;
        course3.trainerName = "Abhinav";

        let course4 = new Course();
        course4.id = 4;
        course4.courseCode = "spring";
        course4.courseName = "Spring Boot";
        course4.fees = 17800;
        course4.trainerName = "Denish";

        courseList.push(course1);
        courseList.push(course2);
        courseList.push(course3);
        courseList.push(course4);
        return courseList;
    }
}