import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
    logRecords: String[] = [];

    log(actorName: String, message: String) {
        this.logRecords.push(`${actorName} : ${message}`)
    }

    clear() {
        this.logRecords = [];
    }
}