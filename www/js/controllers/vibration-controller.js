(function () {
    'use strict';
    angular.module('starter')
        .controller('vibrationCtrl', vibrationCtrl);
    vibrationCtrl.$inject = ['$cordovaVibration'];

    function vibrationCtrl($cordovaVibration) {
        var vm = this;
        vm.vibrate = vibrate;

        function vibrate() {
            $cordovaVibration.vibrate(100);
        }
    }
})();


