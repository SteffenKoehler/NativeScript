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
    public  selectedIndex: number;
    isLoading = false;
    listLoaded = false;
    items: Item[];
    randomUserList: Array<Randomuser> = [];
    favoriteUserList: Array<Randomuser> = [];
    randomUserCount: number = 0;
    sliderValue: number;
    actionBarTitle: string;

    constructor(
        private itemService: ItemService,
        private randomUserService: RandomuserService,
        private router: Router,
        private userData : UserData,
    ) {}

    ngOnInit(): void {
        this.selectedIndex = 1;
        this.items = this.itemService.getItems();
        this.listLoaded = true;
    }


    public onIndexChanged(args) {
        let tabView = <TabView>args.object;
        this.selectedIndex = tabView.selectedIndex;


        if (this.selectedIndex === 0){
            this.actionBarTitle = "Karte";
        } else if(this.selectedIndex === 1) {
            this.actionBarTitle = "Kontakte";
            this.getUserList(args);
        } else if (this.selectedIndex === 2){
            this.actionBarTitle = "Einstellungen";
        }
    }

    getUserList (args) {
        if(this.randomUserCount !== this.randomUserService.numberOfResults) {
            this.isLoading = true;
            this.listLoaded = false;
            this.randomUserList = [];
            this.favoriteUserList = [];

            this.randomUserCount = this.randomUserService.numberOfResults;
            this.randomUserService.getUsers('de')
                .subscribe(loadedRandomusers => {
                    loadedRandomusers.forEach((randomUser) => {
                        this.randomUserList.push(randomUser);

                        if(randomUser.favorite){
                            this.favoriteUserList.push(randomUser);
                        }
                    });
                    this.isLoading = false;
                    this.listLoaded = true;
                });
        }
    }

    onUserTab(args){
        this.userData.storage = this.randomUserList[args.index];
        this.router.navigate(["userDetails"]);
    }

    onFavoriteIconTap(user){

        if(!user.favorite){
            this.favoriteUserList.unshift(user);
            user.favorite = true;
        } else if (user.favorite){
            let userIndex = this.favoriteUserList.indexOf(user);

            if(userIndex > -1){
                this.favoriteUserList.splice(userIndex, 1);
                user.favorite = false;
            }
        }

    }

    newSliderValue(newValue) {
        this.randomUserService.numberOfResults = Math.round(newValue);
    }
}



