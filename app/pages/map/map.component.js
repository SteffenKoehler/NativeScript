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
