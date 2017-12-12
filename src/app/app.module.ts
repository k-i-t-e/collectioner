import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CollectionsComponent } from './collections/collections.component'
import { CollectionDetailsComponent } from "./collection/collectionDetails.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, CollectionsComponent, CollectionDetailsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}