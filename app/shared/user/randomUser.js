"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by steffen.koehler on 15.06.17.
 */
var Randomuser = (function () {
    function Randomuser(userGender, name, picture, location, email) {
        this.userGender = userGender;
        this.name = name;
        this.picture = picture;
        this.location = location;
        this.email = email;
    }
    return Randomuser;
}());
exports.Randomuser = Randomuser;
