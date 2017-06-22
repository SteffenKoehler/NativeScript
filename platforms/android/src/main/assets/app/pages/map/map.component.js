/**
 * Created by steffen.koehler on 17.06.17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var image_1 = require("ui/image");
var image_source_1 = require("image-source");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var MapComponent = (function () {
    function MapComponent() {
        this.latitude = 49.398750;
        this.longitude = 8.672434;
        this.zoom = 8;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
    }
    //Map events
    MapComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        console.log(this.street);
        var imgSrc = new image_source_1.ImageSource();
        imgSrc.fromResource("icon");
        var image = new image_1.Image();
        image.imageSource = imgSrc;
        var lat = 49.395750;
        var long = 8.672434;
        for (var i = 0; i < 100; i++) {
            var marker = new nativescript_google_maps_sdk_1.Marker();
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(lat + Math.random(), long + Math.random());
            marker.title = "Heidelberg";
            marker.snippet = "Germany";
            marker.userData = { index: 1 };
            //marker.icon = image;
            this.mapView.addMarker(marker);
        }
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(49.398750, 8.672434);
        marker.title = "Heidelberg";
        marker.snippet = "Germany";
        marker.userData = { index: 1 };
        //marker.icon = image;
        this.mapView.addMarker(marker);
    };
    MapComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    MapComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    MapComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    return MapComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MapComponent.prototype, "street", void 0);
MapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map',
        templateUrl: 'map.html',
        styleUrls: ['map.css'],
    }),
    __metadata("design:paramtypes", [])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7OztBQUdILHNDQUEwRDtBQUMxRCwwRUFBd0U7QUFDeEUsNkVBQXlFO0FBQ3pFLGtDQUFpQztBQUNqQyw2Q0FBMkM7QUFHM0MsZ0ZBQWdGO0FBQ2hGLGtDQUFlLENBQUMsU0FBUyxFQUFFLGNBQU0sT0FBQSxzQ0FBTyxFQUFQLENBQU8sQ0FBQyxDQUFDO0FBUTFDLElBQWEsWUFBWTtJQWNyQjtRQVZBLGFBQVEsR0FBSSxTQUFTLENBQUM7UUFDdEIsY0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQU0zQixDQUFDO0lBRUQsWUFBWTtJQUNaLGlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLElBQUksTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUUzQixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDcEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBR3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFDN0Isc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFHRCxJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFNLEVBQUUsQ0FBQztRQUMxQixNQUFNLENBQUMsUUFBUSxHQUFHLHVDQUFRLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDN0Isc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTO2NBQ3hDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztjQUN0QyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF0RVk7SUFBUixZQUFLLEVBQUU7OzRDQUFnQjtBQUZmLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztLQUN6QixDQUFDOztHQUNXLFlBQVksQ0F3RXhCO0FBeEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHN0ZWZmZW4ua29laGxlciBvbiAxNy4wNi4xNy5cbiAqL1xuXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgTWFwVmlldywgTWFya2VyLCBQb3NpdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGsnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSBcImltYWdlLXNvdXJjZVwiO1xuXG5cbi8vIEltcG9ydGFudCAtIG11c3QgcmVnaXN0ZXIgTWFwVmlldyBwbHVnaW4gaW4gb3JkZXIgdG8gdXNlIGluIEFuZ3VsYXIgdGVtcGxhdGVzXG5yZWdpc3RlckVsZW1lbnQoJ01hcFZpZXcnLCAoKSA9PiBNYXBWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21hcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdtYXAuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ21hcC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIHN0cmVldDogc3RyaW5nO1xuXG4gICAgbGF0aXR1ZGUgPSAgNDkuMzk4NzUwO1xuICAgIGxvbmdpdHVkZSA9IDguNjcyNDM0O1xuICAgIHpvb20gPSA4O1xuICAgIGJlYXJpbmcgPSAwO1xuICAgIHRpbHQgPSAwO1xuICAgIHBhZGRpbmcgPSBbNDAsIDQwLCA0MCwgNDBdO1xuICAgIG1hcFZpZXc6IE1hcFZpZXc7XG5cbiAgICBsYXN0Q2FtZXJhOiBTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICAvL01hcCBldmVudHNcbiAgICBvbk1hcFJlYWR5KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXAgUmVhZHknKTtcblxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIGEgbWFya2VyLi4uXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RyZWV0KTtcblxuICAgICAgICBsZXQgaW1nU3JjID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgIGltZ1NyYy5mcm9tUmVzb3VyY2UoXCJpY29uXCIpO1xuXG4gICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5pbWFnZVNvdXJjZSA9IGltZ1NyYztcblxuICAgICAgICBsZXQgbGF0ID0gNDkuMzk1NzUwO1xuICAgICAgICBsZXQgbG9uZyA9IDguNjcyNDM0O1xuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xuICAgICAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKGxhdCArIE1hdGgucmFuZG9tKCksIGxvbmcgKyBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIG1hcmtlci50aXRsZSA9IFwiSGVpZGVsYmVyZ1wiO1xuICAgICAgICAgICAgbWFya2VyLnNuaXBwZXQgPSBcIkdlcm1hbnlcIjtcbiAgICAgICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgICAgICAvL21hcmtlci5pY29uID0gaW1hZ2U7XG4gICAgICAgICAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XG4gICAgICAgIG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0OS4zOTg3NTAsIDguNjcyNDM0KTtcbiAgICAgICAgbWFya2VyLnRpdGxlID0gXCJIZWlkZWxiZXJnXCI7XG4gICAgICAgIG1hcmtlci5zbmlwcGV0ID0gXCJHZXJtYW55XCI7XG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XG4gICAgICAgIC8vbWFya2VyLmljb24gPSBpbWFnZTtcbiAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xuICAgIH1cblxuICAgIG9uQ29vcmRpbmF0ZVRhcHBlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogXCIgKyBhcmdzLnBvc2l0aW9uLmxhdGl0dWRlICsgXCIsIExvbjogXCIgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XG4gICAgfVxuXG4gICAgb25NYXJrZXJFdmVudChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFya2VyIEV2ZW50OiAnXCIgKyBhcmdzLmV2ZW50TmFtZVxuICAgICAgICAgICAgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlXG4gICAgICAgICAgICArIFwiLCBMYXQ6IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XG4gICAgfVxuXG4gICAgb25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDYW1lcmEgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSksIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSA9PT0gdGhpcy5sYXN0Q2FtZXJhKTtcbiAgICAgICAgdGhpcy5sYXN0Q2FtZXJhID0gSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpO1xuICAgIH1cblxufSJdfQ==