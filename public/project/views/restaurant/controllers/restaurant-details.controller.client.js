/**
 * Created by user on 03-08-2017.
 */
(function () {
    angular
        .module("Foood")
        .controller("restaurantDetailsController", restaurantDetailsController);

    function restaurantDetailsController($location,
                                         homeService,
                                         $routeParams) {
        var model = this;
        var restId = $routeParams.restId;

        function init() {
            homeService
                .getRestaurantDetails(restId)
                .then(function (response) {
                    model.restaurant = response.data;
            })
        }
        init();
    }
})();