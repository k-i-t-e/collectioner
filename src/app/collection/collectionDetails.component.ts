import { Component, Input, OnInit } from "@angular/core";
import { Collection } from "../model/collection";
import { LoggingService } from '../logging/logging.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CollectionService } from '../collections/service/collection.service';

@Component({
    selector: 'collection',
    template: require('./collectionDetails.component.html')
})
export class CollectionDetailsComponent implements OnInit {
    //@Input() -- this is how
    collection: Collection;

    constructor(private logger: LoggingService, private collectionService: CollectionService,
                private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.collectionService.getCollection(id).then(collection => this.collection = collection);
    }

    onChange(): void {
        this.logger.log('CollectionDetailsComponent', `Collection ${this.collection.id} changed`);
    }

    goBack(): void {
        this.location.back();
    }
}