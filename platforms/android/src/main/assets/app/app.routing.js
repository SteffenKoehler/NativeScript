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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsdUVBQXlFO0FBQ3pFLDJGQUF3RjtBQUN4RixnRUFBOEQ7QUFDOUQsNEVBQXlFO0FBRXpFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSx5Q0FBcUIsRUFBQztJQUNwRCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFDO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0NBQ3ZELENBQUM7QUFNRixJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVGFiVmlld0l0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGFiVmlldy90YWJWaWV3LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBVc2VyRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3RhYlZpZXcvdXNlckRldGFpbHMvdXNlckRldGFpbHMuY29tcG9uZW50XCJcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3RhYlZpZXdcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJ0YWJWaWV3XCIsIGNvbXBvbmVudDogVGFiVmlld0l0ZW1zQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwidXNlckRldGFpbHNcIiwgY29tcG9uZW50OiBVc2VyRGV0YWlsc0NvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==