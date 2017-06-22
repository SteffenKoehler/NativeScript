import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { TabViewItemsComponent } from "./pages/tabView/tabView.component";
import { UserDetailsComponent } from "./pages/userDetails/userDetails.component";
import { ItemService } from "./shared/item/item.service";
import { ItemsComponent } from "./pages/item/items.component";
import { ItemDetailComponent } from "./pages/item/item-detail.component";

import { UserData } from "./providers/userData/userData";
import { MapComponent } from "./pages/map/map.component";


import * as platform from "platform";
declare var GMSServices: any;

if(platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
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
        MapComponent
    ],
    providers: [
        ItemService,
        UserData
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
