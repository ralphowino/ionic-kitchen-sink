(function () {
    'use strict';
    angular.module('starter')
        .controller('loadingCtrl', loadingCtrl);
    loadingCtrl.$inject = ['$ionicLoading'];

    function loadingCtrl($ionicLoading) {
        var vm = this;

        vm.load = load;

        function load() {
            $ionicLoading.show({
                template: 'Loading...',
                duration:2000
            }).then(function () {

            });
        }

    }
})();

