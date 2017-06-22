import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { TabViewItemsComponent } from "./pages/tabView/tabView.component"
import { UserDetailsComponent } from "./pages/userDetails/userDetails.component"
import { ItemsComponent } from "./pages/item/items.component";
import { ItemDetailComponent } from "./pages/item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/tabView", pathMatch: "full" },
    { path: "tabView", component: TabViewItemsComponent},
    { path: "userDetails", component: UserDetailsComponent},
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }