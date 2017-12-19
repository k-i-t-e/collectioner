import { Component, OnInit } from '@angular/core';
import { Collection } from '../model/collection';
import { CollectionService } from '../collections/service/collection.service';
/**
 * Created by Mikhail_Miroliubov on 12/18/2017.
 */

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {
    private collections: Collection[];


    constructor(private collectionService: CollectionService) {
    }

    ngOnInit(): void {
        this.collectionService.getCollections().toPromise().then(c => this.collections = c.slice(0, 5))
    }


}