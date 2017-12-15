import {Component, Input} from "@angular/core";
import {Collection} from "../model/collection";
import { LoggingService } from '../logging/logging.service';

@Component({
    selector: 'collection',
    template: require('./collectionDetails.component.html')
})
export class CollectionDetailsComponent {
    @Input() collection: Collection;

    constructor(private logger: LoggingService) {
    }

    onChange(): void {
        this.logger.log('CollectionDetailsComponent', `Collection ${this.collection.id} changed`)
    }
}