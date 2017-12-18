import { InMemoryDbService } from 'angular-in-memory-web-api';
import { COLLECTIONS } from './collections.mock';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
/**
 * Created by Mikhail_Miroliubov on 12/18/2017.
 */

export class InMemoryDataService implements InMemoryDbService {
    /*createDb(): Observable<{}> {
        return of({COLLECTIONS});
    }*/
    createDb(): {} {
        const collection = COLLECTIONS;
        return {collection};
    }


}