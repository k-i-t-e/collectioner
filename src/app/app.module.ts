import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { CollectionsComponent } from './collections/collections.component'
import { CollectionDetailsComponent } from "./collection/collectionDetails.component";

import { CollectionService } from "./collections/service/collection.service";
import { LoggingService } from './logging/logging.service';
import { LoggingComponent } from './logging/logging.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, CollectionsComponent, CollectionDetailsComponent, LoggingComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ CollectionService, LoggingService ]
})
export class AppModule {}