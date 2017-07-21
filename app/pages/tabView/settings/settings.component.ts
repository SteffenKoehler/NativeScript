import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { RandomuserService } from '../../../shared/user/randomUser.service';


@Component({
    moduleId: module.id,
    selector: 'ns-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css', './settings-common.css']
})
export class SettingsComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef;

    private isLoading = true;
    private sliderValue: number;

    constructor(
        private router: RouterExtensions,
        private randomUserService: RandomuserService
    ) { }

    ngOnInit() {
        this.sliderValue = this.randomUserService.numberOfResults;
        console.log('#### sliderValue:', this.sliderValue);
    }

    newSliderValue(newValue) {
        this.sliderValue = Math.round(newValue);
        this.randomUserService.setNewNumber(Math.round(newValue));
    }
}
