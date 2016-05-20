(function () {
    'use strict';
    angular.module('starter')
        .controller('availabilityCtrl', availabilityCtrl);
    availabilityCtrl.$inject = ['$cordovaAppAvailability'];

    function availabilityCtrl($cordovaAppAvailability) {
        var vm = this;
        vm.available = available;

        function available() {
            document.addEventListener("deviceready", function () {

                $cordovaAppAvailability.check('com.whatsapp')
                    .then(function () {
                        vm.result = "Whatsapp is Installed!Yey!"
                    }, function () {
                        vm.result = "Whatsapp is Not Installed in your Device"
                    });
            }, false);
        }
    }
})();


