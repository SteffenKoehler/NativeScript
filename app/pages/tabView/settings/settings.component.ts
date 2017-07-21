import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
    moduleId: module.id,
    selector: 'ns-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef;

    private isLoading = true;

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }


}
