import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
    moduleId: module.id,
    selector: 'ns-listView',
    templateUrl: './listView.component.html',
    styleUrls: ['./listView.component.css']
})
export class ListViewComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef;

    private isLoading = true;

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }


}
