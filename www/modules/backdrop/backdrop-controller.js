(function () {
    'use strict';
    angular.module('starter')
        .controller('backdropCtrl', backdropCtrl);
    backdropCtrl.$inject = ['$ionicBackdrop', '$timeout'];

    function backdropCtrl($ionicBackdrop, $timeout) {
        var vm = this;
        vm.action = action;

        function action() {
            $ionicBackdrop.retain();
            $timeout(function () {
                $ionicBackdrop.release();
            }, 1000);
        }
    }
})();

