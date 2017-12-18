import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import { Collection } from "../../model/collection";
import { COLLECTIONS } from "../../mock/collections.mock";
import { LoggingService } from '../../logging/logging.service';
import resolve = Promise.resolve;
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectionService {
    private rootUrl: string = 'http://collectionapi.hopto.org/api/';
    private collectionsUrl: string = 'collection';

    constructor(private logger: LoggingService, private http: HttpClient) {
    }

    getCollections(): Observable<Collection[]> {
        this.logger.log('CollectionService', 'Collections requested');
        return of(COLLECTIONS);
    }

    getCollection(id: number): Promise<Collection> {
        return new Promise((resolve, reject) => resolve(COLLECTIONS[id - 1]))
    }
}
