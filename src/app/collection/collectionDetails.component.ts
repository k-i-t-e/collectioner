import {Component, Input} from "@angular/core";
import {Collection} from "../model/collection";

@Component({
    selector: 'collection',
    template: require('./collectionDetails.component.html')
})
export class CollectionDetailsComponent {
    @Input() collection: Collection;
}