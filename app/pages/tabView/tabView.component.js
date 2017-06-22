"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("../../shared/item/item.service");
var randomUser_service_1 = require("../../shared/user/randomUser.service");
var userData_1 = require("../../providers/userData/userData");
var TabViewItemsComponent = (function () {
    function TabViewItemsComponent(itemService, randomUserService, router, userData) {
        this.itemService = itemService;
        this.randomUserService = randomUserService;
        this.router = router;
        this.userData = userData;
        this.titleAndIcon = { iconSource: "res://group_white" };
        this.isLoading = false;
        this.listLoaded = false;
        this.randomUserList = [];
    }
    TabViewItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        this.listLoaded = true;
    };
    TabViewItemsComponent.prototype.onIndexChanged = function (args) {
        var _this = this;
        var tabView = args.object;
        if (tabView.selectedIndex === 1) {
            if (this.randomUserList.length === 0) {
                this.isLoading = true;
                this.randomUserService.getUsers(50, 'de')
                    .subscribe(function (loadedRandomusers) {
                    loadedRandomusers.forEach(function (randomUser) {
                        _this.randomUserList.push(randomUser);
                    });
                    _this.isLoading = false;
                    _this.listLoaded = true;
                });
            }
        }
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    };
    TabViewItemsComponent.prototype.onUserTab = function (args) {
        this.userData.storage = this.randomUserList[args.index];
        this.router.navigate(["userDetails"]);
    };
    return TabViewItemsComponent;
}());
TabViewItemsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./tabView.component.html",
        providers: [randomUser_service_1.RandomuserService],
        styleUrls: ['./tabView-common.css', './tabView.css']
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        randomUser_service_1.RandomuserService,
        router_1.Router,
        userData_1.UserData])
], TabViewItemsComponent);
exports.TabViewItemsComponent = TabViewItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiVmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJWaWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBd0M7QUFPeEMsK0RBQTZEO0FBRTdELDJFQUF5RTtBQUV6RSw4REFBNkQ7QUFVN0QsSUFBYSxxQkFBcUI7SUFPOUIsK0JBQ1ksV0FBd0IsRUFDeEIsaUJBQW9DLEVBQ3BDLE1BQWMsRUFDZCxRQUFtQjtRQUhuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVi9CLGlCQUFZLEdBQVEsRUFBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztRQUN0RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsbUJBQWMsR0FBc0IsRUFBRSxDQUFDO0lBT25DLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFHTSw4Q0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQTFCLGlCQWtCQztRQWpCRyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBR25DLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO3FCQUNwQyxTQUFTLENBQUMsVUFBQSxpQkFBaUI7b0JBQ3hCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7d0JBQ2pDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSxxQkFBcUI7SUFQakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1FBQzlCLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLGVBQWUsQ0FBQztLQUN2RCxDQUFDO3FDQVUyQiwwQkFBVztRQUNMLHNDQUFpQjtRQUM1QixlQUFNO1FBQ0gsbUJBQVE7R0FYdEIscUJBQXFCLENBNENqQztBQTVDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcblxuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pdGVtL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgUmFuZG9tdXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci9yYW5kb21Vc2VyXCI7XG5pbXBvcnQgeyBSYW5kb211c2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci9yYW5kb21Vc2VyLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3VzZXJEYXRhL3VzZXJEYXRhXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhYlZpZXcuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtSYW5kb211c2VyU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFiVmlldy1jb21tb24uY3NzJywgJy4vdGFiVmlldy5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFRhYlZpZXdJdGVtc0NvbXBvbmVudCB7XG4gICAgdGl0bGVBbmRJY29uOiBhbnkgPSB7aWNvblNvdXJjZTogXCJyZXM6Ly9ncm91cF93aGl0ZVwifTtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBsaXN0TG9hZGVkID0gZmFsc2U7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICByYW5kb21Vc2VyTGlzdDogQXJyYXk8UmFuZG9tdXNlcj4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByYW5kb21Vc2VyU2VydmljZTogUmFuZG9tdXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgdXNlckRhdGEgOiBVc2VyRGF0YVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBvbkluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG5cblxuICAgICAgICBpZih0YWJWaWV3LnNlbGVjdGVkSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucmFuZG9tVXNlckxpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb21Vc2VyU2VydmljZS5nZXRVc2Vycyg1MCwgJ2RlJylcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShsb2FkZWRSYW5kb211c2VycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWRSYW5kb211c2Vycy5mb3JFYWNoKChyYW5kb21Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5kb21Vc2VyTGlzdC5wdXNoKHJhbmRvbVVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBpbmRleCBjaGFuZ2VkISBOZXcgaW54ZWQ6IFwiICsgdGFiVmlldy5zZWxlY3RlZEluZGV4KTtcbiAgICB9XG5cbiAgICBvblVzZXJUYWIoYXJncyl7XG4gICAgICAgIHRoaXMudXNlckRhdGEuc3RvcmFnZSA9IHRoaXMucmFuZG9tVXNlckxpc3RbYXJncy5pbmRleF07XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInVzZXJEZXRhaWxzXCJdKTtcbiAgICB9XG59XG5cblxuXG4iXX0=