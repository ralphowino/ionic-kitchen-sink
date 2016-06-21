(function () {
    'use strict';
    angular.module('starter')
        .controller('geoCtrl', geoCtrl);
    geoCtrl.$inject = ['$cordovaGeolocation'];

    function geoCtrl($cordovaGeolocation) {
        var vm = this;
        vm.getLocation = getLocation;

        function getLocation() {
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation.getCurrentPosition(posOptions)
                .then(function (position) {
                    vm.lat = position.coords.latitude;
                    vm.long = position.coords.longitude;
                    vm.altitude = position.coords.altitude;
                    vm.speed = position.coords.speed;
                    console.log(position);
                }, function (err) {
                    // error
                });
        }
    }
})();



