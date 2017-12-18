import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionDetailsComponent } from './collection/collectionDetails.component';

const routes: Route[] = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'collections', component: CollectionsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'collection/:id', component: CollectionDetailsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
