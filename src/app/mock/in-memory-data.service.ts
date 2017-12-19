import { InMemoryDbService } from 'angular-in-memory-web-api';
import { COLLECTIONS } from './collections.mock';
/**
 * Created by Mikhail_Miroliubov on 12/18/2017.
 */

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        const collection = COLLECTIONS;
        return {collection};
    }


}