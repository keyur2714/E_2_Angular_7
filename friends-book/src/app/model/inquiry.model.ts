import { Course } from './course.model';

export class Inquiry {
    constructor(public id?:number,public name?:string,public mobileNo?:string,public email?:string,public course?:Course){}

    public printInquiry():void{
        console.log(this.name + " " + this.mobileNo+" "+this.email+" "+this.course.courseName+" "+this.course.fees+" "+this.course.trainerName);
    }

    set setId(id:number){
        this.id = id;
    }
    get getId():number{
        return this.id;
    }
}