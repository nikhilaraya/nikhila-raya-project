/**
 * Created by user on 01-08-2017.
 */
(function () {
    angular
        .module("Foood")
        .controller("homeController", homeController);
    
    function homeController($location,homeService,$scope) {
        var model = this;
        model.searchBasedOnLocation = searchBasedOnLocation;
        $scope.details = {};

        function searchBasedOnLocation() {

            var latitude = $scope.details.geometry.location.lat();
            var longitude = $scope.details.geometry.location.lng();

            homeService.searchBasedOnLocation(latitude,longitude).then(function (response) {
                $location.url("/"+latitude+"/restaurant/"+longitude);
            })
        }
    }
})();