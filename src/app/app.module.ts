import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { CollectionsComponent } from './collections/collections.component'
import { CollectionDetailsComponent } from "./collection/collectionDetails.component";

import { CollectionService } from "./collections/service/collection.service";
import { LoggingService } from './logging/logging.service';
import { LoggingComponent } from './logging/logging.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [ AppComponent, CollectionsComponent, CollectionDetailsComponent, LoggingComponent, DashboardComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [
        CollectionService,
        LoggingService,
        {provide: APP_BASE_HREF, useValue: '/'}
    ]
})
export class AppModule {}