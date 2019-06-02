import { Injectable } from '@angular/core';

export class LoggingService {

    constructor(){
        this.logInfo("LoggingService Object Created...");
    }

    logInfo(msg : string) : void {
        console.log("INFO MSG : "+msg);
    }

    logError(msg : string) : void {
        console.log("ERROR MSG : "+msg);
    }

    logDebug(msg : string) : void {
        console.log("DEBUG MSG : "+msg);
    }

}