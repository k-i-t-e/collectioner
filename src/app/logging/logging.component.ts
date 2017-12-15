import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
    selector: 'log',
    template: require('./logging.component.html')
})
export class LoggingComponent {

    constructor(public logger: LoggingService) {
    }
}