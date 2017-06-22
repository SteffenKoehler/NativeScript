"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by steffen.koehler on 15.06.17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var randomUser_1 = require("./randomUser");
var RandomuserService = (function () {
    function RandomuserService(http) {
        this.http = http;
        this.url = 'https://randomuser.me/api/';
    }
    RandomuserService.prototype.getUsers = function (numberOfResults, nationalitie) {
        var headers = new http_1.Headers();
        this.url = this.url + "?results=" + numberOfResults + "&nat=" + nationalitie;
        return this.http.get(this.url, {})
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var randomUserList = [];
            data.results.forEach(function (randomUser) {
                var name = {
                    first: randomUser.name.first,
                    last: randomUser.name.last
                };
                var picture = {
                    large: randomUser.picture.large,
                    medium: randomUser.picture.medium,
                    thumbnail: randomUser.picture.thumbnail
                };
                var location = {
                    street: randomUser.location.street,
                    city: randomUser.location.city,
                    state: randomUser.location.state,
                    postcode: randomUser.location.postcode
                };
                randomUserList.push(new randomUser_1.Randomuser(randomUser.gender, name, picture, location, randomUser.email));
            });
            return randomUserList;
        })
            .catch(this.handleErrors);
    };
    RandomuserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return RandomuserService;
}());
RandomuserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RandomuserService);
exports.RandomuserService = RandomuserService;
