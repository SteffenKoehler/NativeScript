import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { alert } from "ui/dialogs";
import { UserData } from "../../../providers/userData/userData";
import { Randomuser } from "../../../shared/user/randomUser";

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
        private userData : UserData
    ) {
        this.person = this.userData.storage;
        this.isLoading = false;
    }

    ngOnInit() {

    }

    onAddReactionButtonTap() {
        let options = {
            title: "Add reaction",
            message: "Added some fancy reaction *lul*",
            okButtonText: "OK"
        };

        alert(options).then(() => {
            console.log("Race chosen!");
        });
    }


}
