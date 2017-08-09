/**
 * Created by user on 01-08-2017.
 */
(function () {
    angular
        .module('Foood')
        .directive('autoPopulatePlaces',function ($parse) {
        return {
            link: function ($scope,element,model) {
                var opts;
                var initOpts = function () {
                    opts = {};
                    if ($scope.options) {
                        if ($scope.options.types) {
                            opts.types = [];
                            opts.types.push($scope.options.types);
                        }
                        if ($scope.options.bounds) {
                            opts.types = [];
                            opts.types.push($scope.options.types);
                        }
                        if ($scope.options.country) {
                            opts.componentRestrictions = {
                                country: $scope.options.country
                            }
                        }
                    }
                }
                initOpts();
                var newAutocomplete = function () {
                    $scope.gPlace = new google.maps.places.Autocomplete(element[0],opts);
                    google.maps.event.addListener($scope.gPlace,'place_changed',function () {
                        $scope.$apply(function () {
                            $scope.details = $scope.gPlace.getPlace();
                            $scope.autoPopulatePlaces=element.val();
                        });
                    })
                }
                newAutocomplete()
            }
            }
    })
})();
