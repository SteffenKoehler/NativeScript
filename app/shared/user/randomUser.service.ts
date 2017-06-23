/**
 * Created by steffen.koehler on 15.06.17.
 */
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import {Randomuser} from "./randomUser";


@Injectable()
export class RandomuserService {
    constructor(private http: Http) {}

    numberOfResults: number = 50;

    url = 'https://randomuser.me/api/';

    getUsers(nationalitie) {
        let headers = new Headers();

        this.url = this.url + "?results=" + this.numberOfResults + "&nat=" + nationalitie;

        return this.http.get(this.url, {
        })
            .map(res => res.json())
            .map(data => {
                let randomUserList = [];
                data.results.forEach((randomUser) => {
                    let name = {
                        first : randomUser.name.first,
                        last: randomUser.name.last
                    };

                    let picture = {
                        large: randomUser.picture.large,
                        medium: randomUser.picture.medium,
                        thumbnail: randomUser.picture.thumbnail
                    };

                    let location = {
                        street: randomUser.location.street,
                        city: randomUser.location.city,
                        state: randomUser.location.state,
                        postcode: randomUser.location.postcode
                    };

                    randomUserList.push(new Randomuser(randomUser.gender, name, picture, location, randomUser.email, randomUser.cell));
                });
                return randomUserList;
            })
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}