import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { RandomuserService } from '../../shared/user/randomUser.service';
import { Randomuser } from '../../shared/user/randomUser';
import { UserData } from '../../providers/userData/userData';
import "rxjs/add/operator/switchMap";
import { ActivatedRoute } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'ns-listView',
    templateUrl: './listView.component.html',
    styleUrls: ['./listView.component.css', './listView-common.css']
})
export class ListViewComponent implements OnInit {
    selectedTab: number;
    isLoading = false;
    listLoaded = false;
    randomUserList: Array<Randomuser> = [];
    favoriteUserList: Array<Randomuser> = [];
    randomUserCount: number = 0;

    constructor(
        private routerExtensions: RouterExtensions,
        private randomUserService: RandomuserService,
        private userData: UserData,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .forEach(params => {
                this.selectedTab = Number(this.route.snapshot.params['selectedTab']);
            });
        this.getUserList()
    }

    getUserList(): void {
        if(this.randomUserCount !== this.randomUserService.numberOfResults) {
            this.isLoading = true;
            this.listLoaded = false;
            this.randomUserList = [];
            this.favoriteUserList = [];

            this.randomUserCount = this.randomUserService.numberOfResults;
            this.randomUserService.getUsers('de')
                .subscribe(loadedRandomusers => {
                    loadedRandomusers.forEach((randomUser, index) => {
                        randomUser.initial = randomUser.name.first.charAt(0).toLocaleUpperCase() + randomUser.name.last.charAt(0).toLocaleUpperCase();
                        randomUser.index = index;
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

    onFavoriteIconTap(user): void{
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

    onUserTab(args){
        this.userData.storage = this.randomUserList[args.index];
        this.routerExtensions.navigate(["userDetails"], /*{clearHistory: true}*/);
    }



}
