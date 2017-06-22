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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tVXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFuZG9tVXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFDL0IsMkNBQXdDO0FBSXhDLElBQWEsaUJBQWlCO0lBQzFCLDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUU5QixRQUFHLEdBQUcsNEJBQTRCLENBQUM7SUFGRixDQUFDO0lBSWxDLG9DQUFRLEdBQVIsVUFBUyxlQUFlLEVBQUUsWUFBWTtRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsZUFBZSxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFFN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDOUIsQ0FBQzthQUNHLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7Z0JBQzVCLElBQUksSUFBSSxHQUFHO29CQUNQLEtBQUssRUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQzdCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUk7aUJBQzdCLENBQUM7Z0JBRUYsSUFBSSxPQUFPLEdBQUc7b0JBQ1YsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSztvQkFDL0IsTUFBTSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTTtvQkFDakMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUztpQkFDMUMsQ0FBQztnQkFFRixJQUFJLFFBQVEsR0FBRztvQkFDWCxNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUNsQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUM5QixLQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUNoQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2lCQUN6QyxDQUFDO2dCQUVGLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEcsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHTCx3QkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksaUJBQWlCO0lBRDdCLGlCQUFVLEVBQUU7cUNBRWlCLFdBQUk7R0FEckIsaUJBQWlCLENBK0M3QjtBQS9DWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc3RlZmZlbi5rb2VobGVyIG9uIDE1LjA2LjE3LlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQge1JhbmRvbXVzZXJ9IGZyb20gXCIuL3JhbmRvbVVzZXJcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmFuZG9tdXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHVybCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLyc7XG5cbiAgICBnZXRVc2VycyhudW1iZXJPZlJlc3VsdHMsIG5hdGlvbmFsaXRpZSkge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybCArIFwiP3Jlc3VsdHM9XCIgKyBudW1iZXJPZlJlc3VsdHMgKyBcIiZuYXQ9XCIgKyBuYXRpb25hbGl0aWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwsIHtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByYW5kb21Vc2VyTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGRhdGEucmVzdWx0cy5mb3JFYWNoKChyYW5kb21Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgOiByYW5kb21Vc2VyLm5hbWUuZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiByYW5kb21Vc2VyLm5hbWUubGFzdFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwaWN0dXJlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2U6IHJhbmRvbVVzZXIucGljdHVyZS5sYXJnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGl1bTogcmFuZG9tVXNlci5waWN0dXJlLm1lZGl1bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDogcmFuZG9tVXNlci5waWN0dXJlLnRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldDogcmFuZG9tVXNlci5sb2NhdGlvbi5zdHJlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiByYW5kb21Vc2VyLmxvY2F0aW9uLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcmFuZG9tVXNlci5sb2NhdGlvbi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Rjb2RlOiByYW5kb21Vc2VyLmxvY2F0aW9uLnBvc3Rjb2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tVXNlckxpc3QucHVzaChuZXcgUmFuZG9tdXNlcihyYW5kb21Vc2VyLmdlbmRlciwgbmFtZSwgcGljdHVyZSwgbG9jYXRpb24sIHJhbmRvbVVzZXIuZW1haWwpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFuZG9tVXNlckxpc3Q7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxuXG5cbn0iXX0=