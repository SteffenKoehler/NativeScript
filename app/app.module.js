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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBRS9DLHVFQUEwRTtBQUMxRSwyRkFBeUY7QUFDekYsMkRBQXlEO0FBQ3pELGdFQUE4RDtBQUM5RCw0RUFBeUU7QUFFekUsMERBQXlEO0FBQ3pELDJEQUF5RDtBQUd6RCxtQ0FBcUM7QUFHckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUE0QkQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDZCQUFzQjtZQUN0Qiw4QkFBZ0I7U0FDbkI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLHlDQUFxQjtZQUNyQiw0Q0FBb0I7WUFDcEIsNEJBQVk7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNQLDBCQUFXO1lBQ1gsbUJBQVE7U0FDWDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBUYWJWaWV3SXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy90YWJWaWV3L3RhYlZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3RhYlZpZXcvdXNlckRldGFpbHMvdXNlckRldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSBcIi4vcHJvdmlkZXJzL3VzZXJEYXRhL3VzZXJEYXRhXCI7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudFwiO1xuXG5cbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcblxuaWYocGxhdGZvcm0uaXNJT1MpIHtcbiAgICBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KFwiQUl6YVN5Qm1GWE1zQ1FCQWJrRE9HdEtOMi12X3RKVW44bU5uSWNnXCIpO1xufVxuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBUYWJWaWV3SXRlbXNDb21wb25lbnQsXG4gICAgICAgIFVzZXJEZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBNYXBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgVXNlckRhdGFcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19