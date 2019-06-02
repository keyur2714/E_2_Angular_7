import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ServiceAndDIDemo';
  constructor(private loggingService : LoggingService){
     this.loggingService.logInfo("App Component Object Created...!") ;
  }

  ngOnInit(){
    this.loggingService.logDebug("App Component Initialized...!");
  }

}
