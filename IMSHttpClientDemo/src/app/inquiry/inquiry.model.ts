import { Course } from './course.model';

export class Inquiry{
    constructor(public id?:number,public name?:string,public mobileNo?:string,public email?:string,course?:Course){}
}