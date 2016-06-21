(function () {
    'use strict';
    angular.module('starter')
        .controller('backdropCtrl', backdropCtrl);
    backdropCtrl.$inject = ['$ionicBackdrop','$ionicLoading', '$scope','$timeout'];

    function backdropCtrl($ionicBackdrop, $ionicLoading, $scope,$timeout) {
        var vm = this;
        vm.action = action;

        function action() {
            $ionicBackdrop.retain();
            $timeout(function () {
                $ionicBackdrop.release();
            }, 1000);
        }

        $scope.$on('backdrop.shown', function() {
            $ionicLoading.show({
                template: 'Loading...',
                duration:1000
            });
        });
    }
})();

