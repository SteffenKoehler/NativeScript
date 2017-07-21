import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { TabViewItemsComponent } from "./pages/tabView/tabView.component";

import { ItemService } from "./shared/item/item.service";
import { ItemsComponent } from "./pages/item/items.component";
import { ItemDetailComponent } from "./pages/item/item-detail.component";

import { UserData } from "./providers/userData/userData";
import { MapComponent } from "./pages/tabView/map/map.component";


import * as platform from "platform";

import { RandomuserService } from './shared/user/randomUser.service';
import { UserDetailsComponent } from './pages/tabView/listView/userDetails/userDetails.component';
import { ListViewComponent } from './pages/tabView/listView/listView.component';
declare var GMSServices: any;

if(platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyBmFXMsCQBAbkDOGtKN2-v_tJUn8mNnIcg");
}


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        TabViewItemsComponent,
        UserDetailsComponent,
        MapComponent,
        ListViewComponent
    ],
    providers: [
        ItemService,
        UserData,
        RandomuserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
