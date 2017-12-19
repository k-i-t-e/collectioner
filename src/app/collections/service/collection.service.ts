import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import { Collection } from "../../model/collection";
import { COLLECTIONS } from "../../mock/collections.mock";
import { LoggingService } from '../../logging/logging.service';
import resolve = Promise.resolve;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CollectionService {
    private rootUrl: string = 'api/';
    private collectionsUrl: string = 'collection';

    constructor(private logger: LoggingService, private http: HttpClient) {
    }

    getCollections(): Observable<Collection[]> {
        this.logger.log('CollectionService', 'Collections requested');
        return this.http
            .get<Collection[]>(this.rootUrl + this.collectionsUrl)
            .pipe(
                catchError(
                    (error) => this.handleError(error, 'getCollections', [])),
                tap(_ => this.logger.log('CollectionService', 'Collections fetched'))
            );
    }

    getCollection(id: number): Observable<Collection> {
        this.logger.log('CollectionService', `Collection ${id} requested`);
        return this.http
            .get<Collection>(this.rootUrl + this.collectionsUrl + '/' + id)
            .pipe(
                catchError(e => this.handleError<Collection>(e, 'getCollectionDetails')),
                tap(_ => this.logger.log('CollectionService', 'Collection Details fetched'))
            )
    }

    save(collection: Collection): Observable<any> {
        let res = collection.id ? this.http.put(this.rootUrl + this.collectionsUrl, collection, httpOptions) :
            this.http.post(this.rootUrl + this.collectionsUrl, collection, httpOptions);
        return res.pipe(
            catchError(e => this.handleError(e, 'save')),
            tap(_ => this.logger.log('CollectionService', 'Collection Details saved'))
        )
    }

    private handleError<T> (error: any, operation: string, result?: T):Observable<T> {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.logger.log('CollectionService', `${operation} failed: ${error.status}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    }
}
