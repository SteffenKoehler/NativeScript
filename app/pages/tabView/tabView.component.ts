import { Component } from "@angular/core";
import { Item } from "../../shared/item/item";
import {RouterExtensions} from "nativescript-angular";
import { Router } from '@angular/router'



@Component({
    moduleId: module.id,
    templateUrl: "./tabView.component.html",
    styleUrls: ['./tabView-common.css']
})

export class TabViewItemsComponent {
    srcHeartIcon: string;
    srcPeopleIcon: string;
    srcWorldIcon: string;
    srcSettingsIcon: string;
    selectedTab: number;
    items: Item[];

    constructor(
        private routerExtensions: RouterExtensions,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.changeSelectedTab(1);
    }

    changeSelectedTab(tab): void {
        if (this.router.url === '/userDetails') {
            return;
        }

        this.selectedTab = tab;
        this.setSrcForIcons();

        if(tab === 1) {
            this.routerExtensions.navigate(["listFavorite", {selectedTab: tab}], /*{clearHistory: true}*/);
        } else if (tab === 2) {
            this.routerExtensions.navigate(["listFavorite", {selectedTab: tab}], /*{clearHistory: true}*/);
        } else if (tab === 3) {
            this.routerExtensions.navigate(["map", {selectedTab: tab}], /*{clearHistory: true}*/);
        } else if (tab === 4) {
            this.routerExtensions.navigate(["settings", {selectedTab: tab}], /*{clearHistory: true}*/);
        }
    }

    setSrcForIcons() {
        this.srcHeartIcon = '~/images/tab-view/heart_empty.png';
        this.srcPeopleIcon = '~/images/tab-view/people_empty.png';
        this.srcWorldIcon = '~/images/tab-view/world_empty.png';
        this.srcSettingsIcon = '~/images/tab-view/settings_empty.png';

        switch (this.selectedTab) {
            case 1:
                this.srcHeartIcon = '~/images/tab-view/heart_filled.png';
                break;
            case 2:
                this.srcPeopleIcon = '~/images/tab-view/people_filled.png';
                break;
            case 3:
                this.srcWorldIcon = '~/images/tab-view/world_filled.png';
                break;
            case 4:
                this.srcSettingsIcon = '~/images/tab-view/settings_filled.png';
                break;
        }
    }
}



