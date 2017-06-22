import { Component } from "@angular/core";
import { Router} from "@angular/router";
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";


import { Item } from "../../shared/item/item";
import { ItemService } from "../../shared/item/item.service";
import { Randomuser } from "../../shared/user/randomUser";
import { RandomuserService } from "../../shared/user/randomUser.service";

import { UserData } from "../../providers/userData/userData";


@Component({
    moduleId: module.id,
    templateUrl: "./tabView.component.html",
    providers: [RandomuserService],
    styleUrls: ['./tabView-common.css', './tabView.css']
})

export class TabViewItemsComponent {
    titleAndIcon: any = {iconSource: "res://group_white"};
    isLoading = false;
    listLoaded = false;
    items: Item[];
    randomUserList: Array<Randomuser> = [];

    constructor(
        private itemService: ItemService,
        private randomUserService: RandomuserService,
        private router: Router,
        private userData : UserData
    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.listLoaded = true;
    }


    public onIndexChanged(args) {
        let tabView = <TabView>args.object;


        if(tabView.selectedIndex === 1) {
            if(this.randomUserList.length === 0){
                this.isLoading = true;
                this.randomUserService.getUsers(50, 'de')
                    .subscribe(loadedRandomusers => {
                        loadedRandomusers.forEach((randomUser) => {
                            this.randomUserList.push(randomUser);
                        });
                        this.isLoading = false;
                        this.listLoaded = true;
                    });
            }
        }
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
    }

    onUserTab(args){
        this.userData.storage = this.randomUserList[args.index];
        this.router.navigate(["userDetails"]);
    }
}



