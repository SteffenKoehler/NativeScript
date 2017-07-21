import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TabViewItemsComponent } from "./pages/tabView/tabView.component"
import { UserDetailsComponent } from "./pages/tabView/userDetails/userDetails.component"
import { ItemsComponent } from "./pages/item/items.component";
import { ItemDetailComponent } from "./pages/item/item-detail.component";
import { ListViewComponent } from './pages/listView/listView.component';
import { MapComponent } from './pages/tabView/map/map.component';

const routes: Routes = [
    { path: "", component: TabViewItemsComponent,
        children: [
            { path: "userDetails", component: UserDetailsComponent},
            { path: "listFavorite", component: ListViewComponent},
            { path: "map", component: MapComponent},
        ]

    },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }