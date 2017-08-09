/**
 * Created by user on 03-08-2017.
 */
(function () {
    angular
        .module("Foood")
        .controller("loginController", loginController);
    
    function loginController() {
        var model = this;

        function init() {

        }
        init();

        model.login = login;

    }
})();