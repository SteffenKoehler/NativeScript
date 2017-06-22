"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var tabView_component_1 = require("./pages/tabView/tabView.component");
var userDetails_component_1 = require("./pages/tabView/userDetails/userDetails.component");
var item_service_1 = require("./shared/item/item.service");
var items_component_1 = require("./pages/item/items.component");
var item_detail_component_1 = require("./pages/item/item-detail.component");
var userData_1 = require("./providers/userData/userData");
var map_component_1 = require("./pages/map/map.component");
var platform = require("platform");
if (platform.isIOS) {
    GMSServices.provideAPIKey("AIzaSyBmFXMsCQBAbkDOGtKN2-v_tJUn8mNnIcg");
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            items_component_1.ItemsComponent,
            item_detail_component_1.ItemDetailComponent,
            tabView_component_1.TabViewItemsComponent,
            userDetails_component_1.UserDetailsComponent,
            map_component_1.MapComponent
        ],
        providers: [
            item_service_1.ItemService,
            userData_1.UserData
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
