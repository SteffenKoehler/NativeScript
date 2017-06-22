"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userData_1 = require("../../../providers/userData/userData");
var UserDetailsComponent = (function () {
    function UserDetailsComponent(userData) {
        this.userData = userData;
        this.isLoading = true;
        this.person = this.userData.storage;
        this.isLoading = false;
    }
    UserDetailsComponent.prototype.ngOnInit = function () { };
    return UserDetailsComponent;
}());
__decorate([
    core_1.ViewChild('scrollView'),
    __metadata("design:type", core_1.ElementRef)
], UserDetailsComponent.prototype, "scrollView", void 0);
UserDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-userDetails',
        templateUrl: './userDetails.component.html',
        styleUrls: ['./userDetails-common.css']
    }),
    __metadata("design:paramtypes", [userData_1.UserData])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
