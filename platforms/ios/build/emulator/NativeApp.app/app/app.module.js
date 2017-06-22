"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var tabView_component_1 = require("./pages/tabView/tabView.component");
var userDetails_component_1 = require("./pages/userDetails/userDetails.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLHVFQUEwRTtBQUMxRSxtRkFBaUY7QUFDakYsMkRBQXlEO0FBQ3pELGdFQUE4RDtBQUM5RCw0RUFBeUU7QUFFekUsMERBQXlEO0FBQ3pELDJEQUF5RDtBQUd6RCxtQ0FBcUM7QUFHckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUE0QkQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0Qiw4QkFBZ0I7U0FDbkI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLHlDQUFxQjtZQUNyQiw0Q0FBb0I7WUFDcEIsNEJBQVk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNQLDBCQUFXO1lBQ1gsbUJBQVE7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBUYWJWaWV3SXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy90YWJWaWV3L3RhYlZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3VzZXJEZXRhaWxzL3VzZXJEZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gXCIuL3Byb3ZpZGVycy91c2VyRGF0YS91c2VyRGF0YVwiO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFwL21hcC5jb21wb25lbnRcIjtcblxuXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmRlY2xhcmUgdmFyIEdNU1NlcnZpY2VzOiBhbnk7XG5cbmlmKHBsYXRmb3JtLmlzSU9TKSB7XG4gICAgR01TU2VydmljZXMucHJvdmlkZUFQSUtleShcIkFJemFTeUJtRlhNc0NRQkFia0RPR3RLTjItdl90SlVuOG1ObkljZ1wiKTtcbn1cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgVGFiVmlld0l0ZW1zQ29tcG9uZW50LFxuICAgICAgICBVc2VyRGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgTWFwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIFVzZXJEYXRhXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==