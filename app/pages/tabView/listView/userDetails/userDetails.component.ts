import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { alert } from "ui/dialogs";
import { Page } from 'tns-core-modules/ui/page';
import { Randomuser } from '../../../../shared/user/randomUser';
import { UserData } from '../../../../providers/userData/userData';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    moduleId: module.id,
    selector: 'ns-userDetails',
    templateUrl: './userDetails.component.html',
    styleUrls: ['./userDetails-common.css']
})
export class UserDetailsComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef;

    private isLoading = true;
    public person : Randomuser;

    constructor(
        private userData : UserData,
        private page: Page,
        private routerExtensions: RouterExtensions
    ) {
        this.person = this.userData.storage;
        this.isLoading = false;
    }

    ngOnInit() {

    }

    goPageBack() {
        this.routerExtensions.back();
    }
}
