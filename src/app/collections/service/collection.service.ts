import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import { Collection } from "../../model/collection";
import { COLLECTIONS } from "../../mock/collections.mock";
import { LoggingService } from '../../logging/logging.service';

@Injectable()
export class CollectionService {
    constructor(private logger: LoggingService) {
    }

    getCollections(): Observable<Collection[]> {
        this.logger.log('CollectionService', 'Collections requested');
        return of(COLLECTIONS);
    }
}
