"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var tabView_component_1 = require("./pages/tabView/tabView.component");
var userDetails_component_1 = require("./pages/tabView/userDetails/userDetails.component");
var items_component_1 = require("./pages/item/items.component");
var item_detail_component_1 = require("./pages/item/item-detail.component");
var routes = [
    { path: "", redirectTo: "/tabView", pathMatch: "full" },
    { path: "tabView", component: tabView_component_1.TabViewItemsComponent },
    { path: "userDetails", component: userDetails_component_1.UserDetailsComponent },
    { path: "items", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
