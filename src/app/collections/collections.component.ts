/**
 * Created by Mikhail_Miroliubov on 11/30/2017.
 */

import { Component, OnInit } from '@angular/core';
import {COLLECTIONS} from "../mock/collections.mock";
import {Collection} from "../model/collection";

@Component({
    selector: 'collections',
    template: require('./collections.component.html'),
    styles: [require('./collections.component.css')]
})
export class CollectionsComponent implements OnInit {
    collections: Collection[] = COLLECTIONS;
    selected: Collection;
    ngOnInit(): void {
    }

    onSelect(collection: Collection): void {
        this.selected = collection
    }

    constructor() {

    }
}
