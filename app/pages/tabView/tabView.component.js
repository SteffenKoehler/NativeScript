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
