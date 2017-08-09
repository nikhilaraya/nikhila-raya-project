/**
 * Created by user on 01-08-2017.
 */
(function () {
    angular
        .module("Foood")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl: "views/home/templates/home.view.client.html",
                controller: 'homeController',
                controllerAs: 'model'
            })
            .when("/login",{
                templateUrl:'views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when("/register",{
                templateUrl:'views/user/templates/register.view.client.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when("/search/:basedLocation",{
                templateUrl:'views/home/templates/home.view.client.html',
                controller: 'homeController',
                controllerAs: 'model'
            })
            .when("/:latitude/restaurant/:longitude",{
                templateUrl:'views/restaurant/templates/restaurant-list.view.client.html',
                controller: 'restaurantListController',
                controllerAs: 'model'
            })
            .when("/restaurant/:restId",{
                templateUrl:'views/restaurant/templates/restaurant-details.view.client.html',
                controller: 'restaurantDetailsController',
                controllerAs: 'model'
            })
    }
})();
