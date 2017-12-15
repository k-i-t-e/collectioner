/**
 * Created by Mikhail_Miroliubov on 11/30/2017.
 */

import { Component, OnInit } from '@angular/core';
import {COLLECTIONS} from "../mock/collections.mock";
import {Collection} from "../model/collection";
import {CollectionService} from "./service/collection.service";

@Component({
    selector: 'collections',
    template: require('./collections.component.html'),
    styles: [require('./collections.component.css')]
})
export class CollectionsComponent implements OnInit {
    collections: Collection[];
    selected: Collection;
    ngOnInit(): void {
        this.collectionService.getCollections().subscribe(c => this.collections = c);
    }

    onSelect(collection: Collection): void {
        this.selected = collection;
    }

    constructor(private collectionService: CollectionService) {

    }
}
