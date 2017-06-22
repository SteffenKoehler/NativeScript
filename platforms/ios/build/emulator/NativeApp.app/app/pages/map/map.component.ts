/**
 * Created by steffen.koehler on 17.06.17.
 */


import {Component, Input, ViewChild} from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';


// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.html',
    styleUrls: ['map.css'],
})
export class MapComponent {

    @Input() street: string;

    latitude =  49.398750;
    longitude = 8.672434;
    zoom = 8;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor() {
    }

    //Map events
    onMapReady(event) {
        console.log('Map Ready');

        this.mapView = event.object;

        console.log("Setting a marker...");

        console.log(this.street);


        var marker = new Marker();
        marker.position = Position.positionFromLatLng(49.398750, 8.672434);
        marker.title = "Heidelberg";
        marker.snippet = "Germany";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

}