import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging-service';
import { IQuestion } from './model/iQuestion';
import { AngularQuestionBank } from './model/angular-questionbank';
import { BigDataQuestionBank } from './model/bigdata-questionbank';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [
    LoggingService,
    { provide  : IQuestion , useClass : BigDataQuestionBank }
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private loggingService : LoggingService,private iQuestion : IQuestion) { 
    this.loggingService.logInfo("Exam Component Object Created...!");
  }

  ngOnInit() {
    this.loggingService.logDebug("Exam Component Object Inititalized...!");
    this.question = this.iQuestion.askQuestion();
  }

}
