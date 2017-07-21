import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { alert } from "ui/dialogs";
import { UserData } from "../../../providers/userData/userData";
import { Randomuser } from "../../../shared/user/randomUser";
import { Page } from 'tns-core-modules/ui/page';

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
        private page: Page
    ) {
        this.person = this.userData.storage;
        this.isLoading = false;
    }

    ngOnInit() {

    }
}
