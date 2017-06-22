"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userData_1 = require("../../providers/userData/userData");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlckRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBRXhFLDhEQUE2RDtBQVM3RCxJQUFhLG9CQUFvQjtJQU83Qiw4QkFDWSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnZCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFNckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsdUNBQVEsR0FBUixjQUFhLENBQUM7SUFHbEIsMkJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBZjRCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFhLGlCQUFVO3dEQUFDO0FBRnZDLG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUMxQyxDQUFDO3FDQVN5QixtQkFBUTtHQVJ0QixvQkFBb0IsQ0FpQmhDO0FBakJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvdXNlckRhdGEvdXNlckRhdGFcIjtcbmltcG9ydCB7IFJhbmRvbXVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvcmFuZG9tVXNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdXNlckRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyRGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlckRldGFpbHMtY29tbW9uLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbFZpZXcnKSBzY3JvbGxWaWV3OiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIHB1YmxpYyBwZXJzb24gOiBSYW5kb211c2VyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXNlckRhdGEgOiBVc2VyRGF0YVxuICAgICkge1xuICAgICAgICB0aGlzLnBlcnNvbiA9IHRoaXMudXNlckRhdGEuc3RvcmFnZTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG5cbn1cbiJdfQ==