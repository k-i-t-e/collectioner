import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import { Collection } from "../../model/collection";
import { COLLECTIONS } from "../../mock/collections.mock";
import { LoggingService } from '../../logging/logging.service';
import resolve = Promise.resolve;

@Injectable()
export class CollectionService {
    constructor(private logger: LoggingService) {
    }

    getCollections(): Observable<Collection[]> {
        this.logger.log('CollectionService', 'Collections requested');
        return of(COLLECTIONS);
    }

    getCollection(id: number): Promise<Collection> {
        return new Promise((resolve, reject) => resolve(COLLECTIONS[id - 1]))
    }
}
